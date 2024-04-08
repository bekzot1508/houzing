import React from 'react';
import ReactDOM from 'react-dom/client';
import RootContext from './context';
import './index.css';
import Root from './root/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootContext>
       <Root />
    </RootContext>
  </React.StrictMode>
);
