import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import gourmetReducer from './modules/Gourmet';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

const rootReducer = {
  app: appReducer,
  gourmet: gourmetReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
