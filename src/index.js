import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import App from "./App";

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
