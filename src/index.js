import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css';
import App from './App';
import './index.css';
import i18n from './i18n';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root'),
);
// serviceWorker.unregister();
