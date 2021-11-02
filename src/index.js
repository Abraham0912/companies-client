import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import './assets/styles/general.sass'
import './assets/styles/normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);