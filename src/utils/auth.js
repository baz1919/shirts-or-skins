import jwtDecode from "jwt-decode";

const PROTOCOL = "https://";
export const DOMAIN =
  "baz1919-bookish-cod-jj576p55r43p5xq-9000.preview.app.github.dev";

const ACCESS_TOKEN_KEY = "accessToken";
// const API_URL = "http://localhost:9000";

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getUser = () => {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
};

export const login = async (userId, password) => {
  const response = await fetch(`${PROTOCOL}${DOMAIN}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, password }),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return { id: userId };
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

const getUserFromToken = (token) => {
  const jwtPayload = jwtDecode(token);
  return { id: jwtPayload.sub };
};
