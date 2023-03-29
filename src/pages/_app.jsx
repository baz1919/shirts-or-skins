import * as React from "react";
import Head from "next/head";
import "./styles.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Shirts or Skins</title>
    </Head>
    <Component pageProps={pageProps} />
  </>
);

export default MyApp;
