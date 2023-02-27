import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./redux/store";
import LanguageContextProvider from "./localization/languageContext";
import "./index.css";

let { store, persistor } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
