# HyperCode Theme for Visual Studio Code

HyperCode is a sleek, versatile, and developer-centric VSCode theme designed to amplify your coding experience. Inspired by the mysteries of Dark Matter and the boundless energy of the cosmos, HyperCode offers three meticulously crafted modes: Dark, Light, and Nord.

## Features

- 🌓 Three distinct themes: Dark, Light, and Nord
- 🎨 Carefully selected color palette for optimal readability
- 💻 Enhanced syntax highlighting for better code comprehension
- 🔍 Clear distinction between different code elements
- ⚡ Optimized for long coding sessions
- 📁 Beautiful file and folder icons
- 🎯 Specialized icons for popular frameworks and tools

## Installation

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "HyperCode Theme"
4. Click Install
5. Select the theme through Command Palette (Ctrl+Shift+P / Cmd+Shift+P):
   - For color theme: "Preferences: Color Theme" > HyperCode (Dark/Light/Nord)
   - For file icons: "Preferences: File Icon Theme" > HyperCode Icons

## Available Themes

### Color Themes

- HyperCode Dark: A sophisticated dark theme with carefully balanced contrast
- HyperCode Light: A clean, bright theme for daylight coding
- HyperCode Nord: Coming soon

### Icon Theme

- HyperCode Icons: A comprehensive icon set with support for:
  - Popular programming languages (TypeScript, JavaScript, Python, etc.)
  - Frameworks and libraries (React, Vue, Angular, etc.)
  - Configuration files (JSON, YAML, etc.)
  - Version control (Git)
  - Package managers (npm, yarn)
  - And many more!

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup

```bash
# Clone the repository
git clone https://github.com/ignorantrahul/HyperCode-Theme.git

# Install dependencies
npm install

# Generate themes
npm run generate:themes

# Generate icons
npm run generate:icons

# Package extension
npm run package
```

### Project Structure

```
hypercode-theme/
├── src/
│   ├── builders/      # Theme and icon builder implementations
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── themes/
│   ├── icons/         # SVG icon files
│   └── *.json         # Generated theme files
├── package.json       # Project configuration
└── tsconfig.json      # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern design principles and developer needs
- Built with TypeScript for reliability and maintainability
- Special thanks to the VSCode theme development community

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/ignorantrahul/HyperCode-Theme/issues) on GitHub.
