import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Config } from '../utils/Config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
        <Head />
        <body>
          <div className="GamfiBody">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
