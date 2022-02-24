import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
serviceWorkerRegistration.register();
