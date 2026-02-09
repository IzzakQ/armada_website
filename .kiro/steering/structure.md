# Project Structure

## Directory Organization

```
src/
├── components/     # React components (one per file)
├── assets/         # Static assets (images, icons)
├── App.jsx         # Root application component
├── main.jsx        # Application entry point
└── index.css       # Global styles (Tailwind imports)
```

## Component Architecture

- **Functional components only** - No class components
- **Default exports** - Each component uses `export default`
- **Component file naming** - PascalCase (e.g., `Header.jsx`, `LeadForm.jsx`)
- **Single component per file** - Each file contains one main component

## Component Patterns

- Use React hooks (`useState`, etc.) for state management
- Inline Tailwind classes for styling
- Semantic HTML with accessibility in mind
- Mobile-first responsive design with Tailwind breakpoints (`md:`, `lg:`)

## Styling Conventions

- **Tailwind utility classes** - Primary styling method
- **Responsive design** - Mobile-first with `md:` and `lg:` breakpoints
- **Color palette** - Slate (neutral), Blue (primary), White/Black
- **Spacing** - Consistent use of Tailwind spacing scale
- **Typography** - Font weights: medium, semibold, bold, extrabold

## Code Style

- **Imports** - React import at top, then component imports
- **String literals** - Single quotes for JSX attributes, either for JS
- **Formatting** - 2-space indentation (standard React/Vite setup)
- **Russian content** - UI text in Russian (Cyrillic)
