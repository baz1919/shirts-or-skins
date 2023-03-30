import { gql } from "@apollo/client";

export const CREATE_MATCH = gql`
  mutation CreateMatch($matchDate: String!) {
    match: createMatch(matchDate: $matchDate) {
      id
    }
  }
`;

export const JOIN_MATCH = gql`
  mutation Mutation($matchId: ID!) {
    addPlayer(matchId: $matchId) {
      date
      status
    }
  }
`;

export default {
  CREATE_MATCH,
  JOIN_MATCH,
};
