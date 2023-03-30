import * as React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import Layout from "components/common/Layout";
import { UserProvider } from "context/User/UserContext";
import { client } from "graphql/client";

import "./styles.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Shirts or Skins</title>
    </Head>
    <ApolloProvider client={client}>
      <UserProvider>
        <Layout initialUser={pageProps.user}>
          <Component pageProps={pageProps} />
        </Layout>
      </UserProvider>
    </ApolloProvider>
  </>
);

export default MyApp;
