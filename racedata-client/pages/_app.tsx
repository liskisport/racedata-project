import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../src/components/Header/Header';
import '../styles/index.pcss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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

export default MyApp;
