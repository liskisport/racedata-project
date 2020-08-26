import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

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

export default wrapper.withRedux(App);
