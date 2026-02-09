# Technology Stack

## Core Technologies

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **JavaScript (JSX)** - No TypeScript

## Build System

- **Vite** with React plugin and Tailwind CSS plugin
- **ESLint** for code linting with React Hooks and React Refresh plugins
- **PostCSS** with Autoprefixer for CSS processing

## Common Commands

```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Module System

- ES Modules (`"type": "module"` in package.json)
- All imports use ES6 syntax

## Development Notes

- Fast Refresh enabled via @vitejs/plugin-react
- ESLint configured for browser globals and JSX
- Unused variables starting with uppercase or underscore are allowed
