import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Racedata project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
