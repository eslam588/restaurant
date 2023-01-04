import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css";
import './indexltr.css';
// import "./indexrtl.css"
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/index'
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>      
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

