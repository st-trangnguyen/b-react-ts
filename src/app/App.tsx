import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@app/core/services/i18n.service';
import { RouterOutlet } from '@core/modules/custom-router-dom';
import { Footer, Header } from '@shared/components/layout/index';

import appRoutes from './app.routes';
import AppSuspense from './AppSuspense';

const root = createRoot(document.getElementById('root'));
root.render(
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
);
