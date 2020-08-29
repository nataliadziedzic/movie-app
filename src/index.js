import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers/index";
import App from './components/Main/App';
import GlobalStyle from "./components/Main/GlobalStyle/GlobalStyle"

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);