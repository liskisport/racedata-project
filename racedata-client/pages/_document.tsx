import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ru-Ru">
        <Head>
          <meta charSet="utf-8" />
          <title>racedata-project</title>
        </Head>
        <body className="racedata-project">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
