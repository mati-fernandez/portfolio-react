import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TranslationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TranslationProvider>
  </BrowserRouter>
);
