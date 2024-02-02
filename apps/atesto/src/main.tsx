import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { ModalProvider } from './contexts/ModalContext';
import { UploadContextProvider } from './contexts/ThrowUploadContext/ThrowUploadContext';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLInputElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <UploadContextProvider>
            <App />
          </UploadContextProvider>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
