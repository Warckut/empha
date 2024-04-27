import ReactDOM from "react-dom/client";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/at-work">
      <App />
    </BrowserRouter>
  </Provider>
);
