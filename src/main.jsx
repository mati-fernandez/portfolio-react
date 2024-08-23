import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </HashRouter>
);
