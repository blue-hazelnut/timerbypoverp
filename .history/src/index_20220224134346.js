import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
serviceWorkerRegistration.register();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
