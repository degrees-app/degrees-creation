import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shared/ui/globalStyles.css'

createRoot(document.getElementById('root')!).render(
    <App />
);
