// src/App.js
import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import MemoryVisualizer from './components/MemoryVisualizer';
import CodeExample from './components/CodeExample';

function App() {
  const [endian, setEndian] = useState('little');
  const [inputMethod, setInputMethod] = useState('hex'); // Default to hexadecimal input
  const [value, setValue] = useState(0x12345678); // Default value
  const [memoryRegion, setMemoryRegion] = useState('stack'); // Default memory region

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Endian Memory Visualizer
      </header>
      <div className="flex flex-1">
        <div className="w-2/3 p-4 overflow-auto">
          <ControlPanel
            endian={endian}
            setEndian={setEndian}
            inputMethod={inputMethod}
            setInputMethod={setInputMethod}
            value={value}
            setValue={setValue}
            memoryRegion={memoryRegion}
            setMemoryRegion={setMemoryRegion}
          />
          <MemoryVisualizer
            endian={endian}
            value={value}
            memoryRegion={memoryRegion}
          />
        </div>
        <div className="w-1/3 p-4 bg-white shadow-lg overflow-auto">
          <CodeExample
            endian={endian}
            value={value}
            memoryRegion={memoryRegion}
          />
        </div>
      </div>
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 Endian Memory Visualizer
      </footer>
    </div>
  );
}

export default App;
