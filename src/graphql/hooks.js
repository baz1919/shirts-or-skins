import { useQuery } from "@apollo/client";
import { MATCHES_QUERY } from "./queries";
// import { getAccessToken } from "../utils/auth";

export const useMatches = () => {
  const { data } = useQuery(MATCHES_QUERY, {
    context: {
      //   headers: { Authorization: "Bearer " + getAccessToken() },
    },
  });

  console.log(data);
  return {
    matches: data?.matches ?? [],
  };
};
