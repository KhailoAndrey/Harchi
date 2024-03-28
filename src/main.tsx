import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ContextProvider} from './utils/context/Context.jsx';
import App from './App';
import './index.css';

const intialTitle = document.title;
window.onblur = () => {
  document.title = 'Harchi чекають на тебе!'
}
window.onfocus = () => {
  document.title = intialTitle;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Harchi">
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
