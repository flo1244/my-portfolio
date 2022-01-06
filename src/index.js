import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import "./components/introduction/index.css";
import { ThemeProvider } from './context.js';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> 
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
