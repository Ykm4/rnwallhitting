import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { DefaultLayout } from './src/components/templates/DefaultLayout/DefaultLayout';

export default function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  );
}
