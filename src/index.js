import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import 'react-datepicker/dist/react-datepicker.css';

import './index.css';
import i18n from './i18n';

import App from './App';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root'),
);
