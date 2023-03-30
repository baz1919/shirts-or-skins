import { useMutation, useQuery } from "@apollo/client";
import { getAccessToken } from "utils/auth";
import { MATCHES_QUERY } from "graphql/queries";
import { CREATE_MATCH, JOIN_MATCH } from "graphql/mutations";

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
      const {
        data: {
          match: { id },
        },
      } = await mutate({
        variables: { matchDate: date },
        context: {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        },
      });

      return id;
    },
  };
};

export const useJoinMatch = () => {
  const [mutate, { error }] = useMutation(JOIN_MATCH);

  return {
    joinMatch: async (matchId) => {
      const { data } = await mutate({
        variables: { matchId },
        context: {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        },
      });

      return data;
    },
    error,
  };
};

export default {
  useMatches,
  useCreateMatch,
};
