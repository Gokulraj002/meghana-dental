// Re-export from centralised cache layer. Single import keeps existing
// `import { getSettings } from '@/lib/settings'` paths working across the app.
export { getSettings } from './content';
