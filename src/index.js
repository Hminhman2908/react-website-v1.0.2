import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router basename="/react-website-v1.0.2"> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);