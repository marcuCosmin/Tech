import { configureStore } from '@reduxjs/toolkit';
import email from './slices/email';

export const store = configureStore({
  reducer: { email: email },
});

export type RootState = ReturnType<typeof store.getState>;
