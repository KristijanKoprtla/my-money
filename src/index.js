import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvodider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvodider>
      <App />
    </AuthContextProvodider>
  </React.StrictMode>,
  document.getElementById('root')
);
