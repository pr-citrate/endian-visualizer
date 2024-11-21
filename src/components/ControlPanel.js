// src/components/ControlPanel.js
import React from 'react';

function ControlPanel({
                        endian,
                        setEndian,
                        inputMethod,
                        setInputMethod,
                        value,
                        setValue,
                        memoryRegion,
                        setMemoryRegion,
                      }) {
  const UINT_MAX = 4294967295;
  const UINT_MIN = 0;

  const handleValueChange = (e) => {
    let val = e.target.value.trim();
    if (inputMethod === 'hex') {
      // Remove '0x' or '0X' prefix
      if (val.startsWith('0x') || val.startsWith('0X')) {
        val = val.slice(2);
      }
      // Parse as hexadecimal
      val = parseInt(val, 16);
    } else {
      // Parse as decimal
      val = parseInt(val, 10);
    }

    if (isNaN(val)) {
      val = 0;
    } else if (val < UINT_MIN) {
      val = UINT_MIN;
    } else if (val > UINT_MAX) {
      val = UINT_MAX;
    }

    setValue(val);
  };

  const renderValueInput = () => {
    const displayValue =
      inputMethod === 'hex'
        ? `0x${value.toString(16).toUpperCase()}`
        : value;
    const placeholder = inputMethod === 'hex' ? '0x...' : 'Enter number';

    return (
      <input
        id="value-input"
        type="text"
        value={displayValue}
        onChange={handleValueChange}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder={placeholder}
      />
    );
  };

  // Mapping for endian to architecture names
  const architectureMap = {
    little: 'x86',
    big: 'PowerPC', // Example architecture for Big-endian
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      {/* Endian Selection */}
      <div className="mb-4">
        <label htmlFor="architecture-select" className="block text-gray-700 mb-2">Architecture:</label>
        <div className="flex items-center">
          <span className="mr-4">
            {endian === 'little' ? 'Little-endian' : 'Big-endian'} ({architectureMap[endian]})
          </span>
          <select
            id="architecture-select"
            value={endian}
            onChange={(e) => setEndian(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="little">Little-endian</option>
            <option value="big">Big-endian</option>
          </select>
        </div>
      </div>

      {/* Input Method Selection */}
      <div className="mb-4">
        <label htmlFor="input-method-select" className="block text-gray-700 mb-2">Input Method:</label>
        <select
          id="input-method-select"
          value={inputMethod}
          onChange={(e) => setInputMethod(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="hex">Hexadecimal (0x...)</option>
          <option value="decimal">Decimal</option>
        </select>
      </div>

      {/* Memory Region Selection */}
      <div className="mb-4">
        <label htmlFor="memory-region-select" className="block text-gray-700 mb-2">Memory Region:</label>
        <select
          id="memory-region-select"
          value={memoryRegion}
          onChange={(e) => setMemoryRegion(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="stack">Stack</option>
          <option value="heap">Heap</option>
          <option value="data">Data</option>
        </select>
      </div>

      {/* Value Input */}
      <div className="mb-4">
        <label htmlFor="value-input" className="block text-gray-700 mb-2">
          Enter Value (0 ~ 4,294,967,295):
        </label>
        {renderValueInput()}
        <div className="mt-2 text-sm text-gray-600">
          Current Value: <strong>{inputMethod === 'hex' ? `0x${value.toString(16).toUpperCase()}` : value}</strong> (
          {inputMethod === 'hex' ? 'Hexadecimal' : 'Decimal'})
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
