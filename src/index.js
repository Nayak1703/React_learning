import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// session-6: we are importing  BrowserRouter component from react-router-dom package
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // i commented <React.StrictMode> beacuse componentDidMount() executing twice
  // <React.StrictMode>

  // BrowserRouter -> enables routing functionality to entire app (react-app) & also sync browser history to react-app
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
