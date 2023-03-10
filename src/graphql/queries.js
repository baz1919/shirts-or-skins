import { gql } from "@apollo/client";

export const MATCHES_QUERY = gql`
  query MatchesQuery {
    matches {
      id
      team1
      team2
      date
    }
  }
`;
