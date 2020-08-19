import React from 'react';
import { AppProps, AppContext } from 'next/app';
import Head from 'next/head';

import { getUserData } from '../src/api/userApi';
import { wrapper } from '../src/store/store';
import Header from '../src/components/Header/Header';
import '../styles/index.pcss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="racedata-project">
      <Head>
        <title>Racedata project</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const { store } = ctx;
  const response = await getUserData({ login: 'Login', password: 'Password' });
  store.dispatch({ type: 'USER', payload: response });
};

export default wrapper.withRedux(App);
