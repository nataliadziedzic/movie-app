import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main/App';
import GlobalStyle from "./components/Main/GlobalStyle/GlobalStyle"
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);