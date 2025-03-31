# Remotion Project Guidelines

## Commands
- `npm run dev`: Start the Remotion studio for development
- `npm run build`: Bundle the Remotion video project
- `npm run lint`: Run ESLint and TypeScript type checking
- `npm run upgrade`: Upgrade Remotion dependencies

## Code Style
- **TypeScript**: Strict type checking enabled; no unused locals
- **React**: Use functional components with hooks
- **Imports**: Group by external libraries first, then internal modules
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Components**: One component per file, named after the file
- **Animation**: Use custom hooks like `useAnimationContext` for shared timing
- **Error Handling**: Use try/catch for async operations
- **File Structure**: Group related components in folders (e.g., Gant/, HelloWorld/)
- **Tailwind**: Use for styling via @remotion/tailwind-v4
- **Media**: Store images in public/images/, videos in public/videos/