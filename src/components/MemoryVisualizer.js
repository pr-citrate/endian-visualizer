// src/components/MemoryVisualizer.js
import React from 'react';

function MemoryVisualizer({ endian, value, memoryRegion }) {
  // Function to generate byte array based on endian type
  const getBytes = (num, endianType) => {
    const byteArray = [];
    const totalBytes = 4; // unsigned int: 4 bytes
    const mask = 0xff;

    for (let i = 0; i < totalBytes; i++) {
      const shiftAmount =
        endianType === 'little' ? i * 8 : (totalBytes - 1 - i) * 8;
      const byte = (num >> shiftAmount) & mask;
      byteArray.push(byte.toString(16).padStart(2, '0'));
    }

    return byteArray;
  };

  const bytes = getBytes(value, endian);

  // Initialize memory regions with keys
  const memoryRegions = [
    { key: 'program', name: 'Program', content: '-' },
    { key: 'data', name: 'Data', content: '-' },
    { key: 'heap', name: 'Heap', content: '-' },
    { key: 'stack', name: 'Stack', content: '-' },
  ];

  // Assign bytes to the selected memory region
  const selectedIndex = memoryRegions.findIndex(
    (region) => region.key === memoryRegion
  );

  if (selectedIndex !== -1) {
    memoryRegions[selectedIndex].content = bytes;
  }

  // Prepare data for rendering
  const preparedRegions = memoryRegions.map((region) => {
    if (Array.isArray(region.content)) {
      return {
        name: region.name,
        bytes: region.content,
      };
    }
    return {
      name: region.name,
      bytes: ['-'],
    };
  });

  // Generate table rows
  const tableRows = [];
  preparedRegions.forEach((region, regionIdx) => {
    region.bytes.forEach((byte, byteIdx) => {
      tableRows.push(
        <tr key={`row-${regionIdx}-${byteIdx}`}>
          {/* Memory Region Name */}
          {byteIdx === 0 ? (
            <td
              rowSpan={region.bytes.length}
              className="border px-4 py-2 bg-gray-100 text-center font-semibold"
            >
              {region.name}
            </td>
          ) : null}
          {/* Memory Content */}
          <td className="border px-4 py-2 text-center">
            {byte !== '-' ? `0x${byte.toUpperCase()}` : '-'}
          </td>
        </tr>
      );
    });
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Memory Structure (32-bit, {endian === 'little' ? 'Little-endian (x86)' : 'Big-endian (PowerPC)'})
      </h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-200">Memory Region</th>
            <th className="border px-4 py-2 bg-blue-200">Content</th>
          </tr>
          </thead>
          <tbody>
          {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemoryVisualizer;
