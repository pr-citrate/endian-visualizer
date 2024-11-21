// src/components/CodeExample.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Change the import path to CommonJS
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';

function CodeExample({ endian, value, memoryRegion }) {
  const hexValue = `0x${value.toString(16).toUpperCase()}`;

  let code = '';

  switch (memoryRegion) {
    case 'stack':
      code = `
#include <stdio.h>

int main() {
    unsigned int local_var = ${hexValue}; // Variable stored on the stack
    printf("Value: %u\\n", local_var);
    return 0;
}
      `;
      break;
    case 'heap':
      code = `
#include <stdio.h>
#include <stdlib.h>

int main() {
    unsigned int *p = malloc(sizeof(unsigned int));
    *p = ${hexValue}; // Variable stored on the heap
    printf("Value: %u\\n", *p);
    free(p);
    return 0;
}
      `;
      break;
    case 'data':
      code = `
#include <stdio.h>

unsigned int g_var = ${hexValue}; // Global variable stored in the data segment

int main() {
    printf("Value: %u\\n", g_var);
    return 0;
}
      `;
      break;
    default:
      code = `// No memory region selected.`;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Code Example ({memoryRegion})</h2>
      <SyntaxHighlighter language="c" style={darcula} className="rounded-lg">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeExample;
