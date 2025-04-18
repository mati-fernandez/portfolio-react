import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { PageProvider } from './context/PageProvider.jsx';
import { TranslationProvider } from './context/TranslationProvider.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { StylesProvider } from './context/StylesProvider.jsx';

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
