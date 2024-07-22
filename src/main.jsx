import ReactDOM from 'react-dom/client';
import { TranslationProvider } from './i18n/TranslationContext';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
