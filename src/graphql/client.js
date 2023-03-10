import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind, OperationTypeNode } from "graphql";
import { createClient as createWsClient } from "graphql-ws";
import { DOMAIN } from "../utils/auth";

// const PORT = 9000;
const GRAPHQL_URL = `${DOMAIN}:/graphql`;

const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_URL}`,
});

const wsLink = new GraphQLWsLink(
  createWsClient({
    url: `ws://${GRAPHQL_URL}`,
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
