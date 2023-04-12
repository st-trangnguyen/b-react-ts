import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@app/core/services/i18n.service';
import { RouterOutlet } from '@core/modules/custom-router-dom';
import { Footer, Header } from '@shared/components/layout/index';
import { store } from './store';

import appRoutes from './app.routes';
import AppSuspense from './AppSuspense';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppSuspense fallback={<></>}>
        <Header />
      </AppSuspense>
      <AppSuspense fallback={<></>}>
        <RouterOutlet routes={appRoutes} />
      </AppSuspense>
      <AppSuspense fallback={<></>}>
        <Footer />
      </AppSuspense>
    </BrowserRouter>
  </Provider>
);
