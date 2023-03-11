import { gql } from "@apollo/client";

export const MATCHES_QUERY = gql`
  query MatchesQuery {
    matches {
      date
      id
      players {
        unassigned {
          displayName
        }
        team1 {
          displayName
        }
        team2 {
          displayName
        }
      }
      status
    }
  }
`;

export default {
  MATCHES_QUERY,
};
