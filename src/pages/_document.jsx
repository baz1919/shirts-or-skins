import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en" data-theme="dark">
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
