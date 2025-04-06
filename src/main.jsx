import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { PageProvider } from './context/PageContext.jsx';
import { TranslationProvider } from './context/TranslationContext';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { StylesProvider } from './context/StylesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <PageProvider>
      <TranslationProvider>
        <StylesProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StylesProvider>
      </TranslationProvider>
    </PageProvider>
  </HashRouter>
);
