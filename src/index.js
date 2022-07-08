import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './root';
import './index.css';
// import App from "./state/app";
import 'antd/dist/antd.css';



  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <React.StrictMode>
        <Router>
            <Root/>
        </Router>
      </React.StrictMode>
  );


