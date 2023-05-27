import { createRoot } from 'react-dom/client';
import App from '$components/App';
import '$styles/app.scss';

// Say something
console.log('[EVite] : renderer executed');

// Render application
createRoot(document.getElementById('app') as HTMLElement).render(<App />);
