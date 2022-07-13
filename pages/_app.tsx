import type { AppProps } from 'next/app';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

import Header from '../components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
