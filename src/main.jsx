import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { PageProvider } from "./context/PageProvider";
import { TranslationProvider } from "./context/TranslationProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { StylesProvider } from "./context/StylesProvider";
import "./tailwind.css";

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root")).render(
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
  </HashRouter>,
);
