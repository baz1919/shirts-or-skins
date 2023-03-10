import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind, OperationTypeNode } from "graphql";
import { createClient as createWsClient } from "graphql-ws";

const PORT = 9000;
const GRAPHQL_URL = `localhost:${PORT}/graphql`;
const TEST_URL =
  "baz1919-bookish-cod-jj576p55r43p5xq-9000.preview.app.github.dev/graphql";

const httpLink = new HttpLink({
  uri: `https://${TEST_URL || GRAPHQL_URL}`,
});

const wsLink = new GraphQLWsLink(
  createWsClient({
    url: `ws://${TEST_URL || GRAPHQL_URL}`,
    connectionParams: () => ({
      // TO DO
      accessToken: null,
    }),
  })
);

const isSubscription = ({ query }) => {
  const { kind, operation } = getMainDefinition(query);
  return (
    kind === Kind.OPERATION_DEFINITION &&
    operation === OperationTypeNode.SUBSCRIPTION
  );
};

export const client = new ApolloClient({
  link: split(isSubscription, wsLink, httpLink),
  cache: new InMemoryCache(),
});
