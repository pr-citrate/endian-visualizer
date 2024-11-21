# Endian Memory Visualizer

## Introduction

**Endian Memory Visualizer** is a web application designed to help users visually understand how data is stored in memory across different endian architectures. By selecting between Little-endian and Big-endian formats, users can input values in hexadecimal or decimal formats and observe how these values are arranged in various memory regions such as the stack, heap, and data segments. Additionally, the application provides corresponding C language code examples with syntax highlighting to illustrate how variables are stored in different memory areas.

## Features

- **Endian Configuration:** Switch between Little-endian and Big-endian architectures.
- **Input Methods:** Support for both hexadecimal (Hex) and decimal (Dec) input formats.
- **Memory Region Selection:** Choose between Stack, Heap, and Data segments to visualize data storage.
- **Real-time Memory Visualization:** Dynamic table representation of memory structure based on selected settings.
- **Code Examples:** Automatically generated and syntax-highlighted C code snippets corresponding to the selected memory region.
- **Responsive Design:** Optimized for various devices to ensure a seamless user experience.

## Demo

[Live Demo](https://your-demo-link.com)

## Technology Stack

- **Frontend:**
    - [React](https://reactjs.org/)
    - [Tailwind CSS](https://tailwindcss.com/)
    - [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

- **Package Manager:**
    - [pnpm](https://pnpm.io/)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/endian-memory-visualizer.git
   cd endian-memory-visualizer
   ```
2. **Install Dependencies:**
    ```bash
    pnpm install
    ```
3. **Start the Development Server:**
    ```bash
    pnpm start
    ```
4. Open your browser and navigate to http://localhost:3000 to view the application.

## Usage
1. Configure Endian Settings:
- Use the dropdown menu to select Little-endian or Big-endian architecture.

2. Select Input Method:
- Choose between Hexadecimal (0x...) or Decimal input formats.
3. Choose Memory Region:
- Select Stack, Heap, or Data to determine where the input value will be stored.

4. Enter Value:
- Input a value within the range 0 to 4,294,967,295 based on the selected input method.

5. View Memory Visualization:
- The memory structure updates in real-time, displaying how the value is stored in the selected memory region.

6. Explore Code Examples:
- Review the automatically generated C code snippets that demonstrate how variables are stored in different memory areas.

## Contributing
Contributions are welcome! Whether it's reporting bugs, suggesting features, or submitting code, your input is valuable.

1. Fork the Repository:
- Click the "Fork" button on the repository page.

2. Create a New Branch:
- ```bash
  git checkout -b feature/YourFeatureName
  ```
  
3. Make Your Changes:
- Implement your feature or fix.

4. Commit Your Changes:
- ```bash
  git commit -m "Add Your Feature"
  ```

5. Push to Your Fork:
- ```bash
    git push origin feature/YourFeatureName
  ```
6. Submit a Pull Request:
- Navigate to the original repository and create a pull request.


© 2024 Endian Memory Visualizer. All rights reserved.