import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// => Provider:
// This package it given by react-redux.
// we have to import and use this package to wrap our top level in hierarchy of our react-application (index.js, app.js)
// so that all our components can have access of the store and interact with the our global-state
// using react-redux hooks like useSelector & useDispatch
import { Provider } from "react-redux";
import { store } from "./session-9/react-redux-toolkit/redux/store.js"; // imported store to give access trough-out our component

// session-6: we are importing  BrowserRouter component from react-router-dom package
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // i commented <React.StrictMode> beacuse componentDidMount() executing twice
  // <React.StrictMode>

  // This will provide access of store trough-out the web-app 
  <Provider store={store}>  

    {/* // BrowserRouter -> enables routing functionality to entire app (react-app)
    & also sync browser history to react-app */}
    <BrowserRouter>
  
      <App />
  
    </BrowserRouter>
  
  </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
