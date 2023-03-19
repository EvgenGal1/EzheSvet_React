import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./projects/App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

// import StoreTS from "./projects/client/src/store/storeTS";

// // inrf для полей контекста
// interface intrfStoreTS {
//   store: StoreTS;
// }

// // объ.экземпл.кл.
// const store = new StoreTS();

// // созд.Context для использ.store в комп.ч/з useContext
// export const Context = createContext<intrfStoreTS>({
//   store,
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Context.Provider value={{ store }}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Context.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
