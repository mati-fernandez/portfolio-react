import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { TooltipProvider } from './context/TooltipContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <TranslationProvider>
      <ThemeProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ThemeProvider>
    </TranslationProvider>
  </HashRouter>
);
