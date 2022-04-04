// style
import './index.css';

// init imports
import './fb';
import './env';
import './api/axios';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// app
import App from './App';
import { AuthCtxProvider } from './fb/auth/auth.provider';

ReactDOM.render(
  <React.StrictMode>
    <AuthCtxProvider>
      <App />
    </AuthCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
