import { createRoot } from 'react-dom/client';
import { App } from './App';
import { SiteProvider } from './content/SiteContent';
import './styles/native.css';
import { LocaleProvider } from './i18n/Locale';

createRoot(document.getElementById('root')!).render(<SiteProvider><LocaleProvider><App /></LocaleProvider></SiteProvider>);
