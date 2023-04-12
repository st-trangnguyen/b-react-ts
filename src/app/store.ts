import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import authReducers from '@core/auth/auth.slices';

export const store = configureStore({
  reducer: {
    auth: authReducers
  },
  middleware:
    (getDefaultMiddleware) => process.env.NODE_ENV !== 'production'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
