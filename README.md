# Electron File Viewer

This repository contains a simple Electron application for Windows (and other desktop platforms) built with Node.js. The app features two buttons:

- **Select File** – opens a native file dialog so you can choose a file from disk.
- **Display File Content** – loads the selected file contents into a read-only text box.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Electron development environment:
   ```bash
   npm start
   ```

When the window opens, click **Select File** to pick a file, then click **Display File Content** to show it in the text box. If you cancel the dialog or encounter an error, status messages will guide you.

## Packaging for Windows

To produce a Windows distributable you can integrate a packaging tool such as `electron-builder` or `electron-forge`. This sample focuses on the core functionality; you can extend it further depending on your deployment needs.
