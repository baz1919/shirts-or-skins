import { useMutation, useQuery } from "@apollo/client";
import { MATCHES_QUERY } from "./queries";
import { getAccessToken } from "../utils/auth";
import { CREATE_MATCH } from "./mutations";

export const useMatches = () => {
  const { data } = useQuery(MATCHES_QUERY, {
    context: {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    },
  });

  return {
    matches: data?.matches ?? [],
  };
};

export const useCreateMatch = () => {
  const [mutate] = useMutation(CREATE_MATCH);

  return {
    createMatch: async (date) => {
      const { data: { match: { id } } } = await mutate({
        variables: { matchDate: date },
        context: {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        },
      });

      return id;
    },
  };
};

export default useMatches;
