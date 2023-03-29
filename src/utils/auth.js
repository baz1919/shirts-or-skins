import { getCookie, setCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

export const DOMAIN = "localhost";
const PORT = 9000;

export const ACCESS_TOKEN_KEY = "accessToken";
const API_URL = `http://${DOMAIN}:${PORT}`;

export const getAccessToken = () => getCookie(ACCESS_TOKEN_KEY);

const getUserFromToken = (token) => {
  const jwtPayload = jwtDecode(token);
  return { id: jwtPayload.sub };
};

export const getUser = (initialToken = null) => {
  const token = initialToken || getAccessToken();
  if (!token) {
    return null;
  }

  return getUserFromToken(token);
};

export const login = async (userId, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    setCookie(ACCESS_TOKEN_KEY, token);
    return { id: userId };
  }

  return null;
};

export const logout = () => {
  deleteCookie(ACCESS_TOKEN_KEY);
};
