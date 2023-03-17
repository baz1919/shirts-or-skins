import { gql } from "@apollo/client";

export const CREATE_MATCH = gql`
mutation CreateMatch($matchDate: String!) {
  match: createMatch(matchDate: $matchDate) {
    id
  }
}
`;

export default {
  CREATE_MATCH,
};
