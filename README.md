# My App

This is a React application that uses Tailwind CSS for styling and displays a KPI Dashboard.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dennis-DW/Dashboard-Component.git
   cd my-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

## Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the application for production.
- `npm test`: Runs the test suite.
- `npm eject`: Ejects the configuration (use with caution).

## Configuration

### Tailwind CSS

Tailwind CSS is configured in the `tailwind.config.js` file. Ensure that the `content` paths include all necessary file extensions:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### PostCSS

PostCSS is configured in the `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Including Tailwind in CSS

Ensure that Tailwind CSS is included in your main CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-scripts`: 5.0.1
- `tailwindcss`: ^3.4.17
- `postcss`: ^8.0.0
- `autoprefixer`: ^10.0.0
- `lucide-react`: ^0.474.0

## License

This project is licensed under the MIT License.


