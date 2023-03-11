import jwtDecode from "jwt-decode";

export const DOMAIN = "localhost";
const PORT = 9000;

const ACCESS_TOKEN_KEY = "accessToken";
const API_URL = `http://${DOMAIN}:${PORT}`;

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

const getUserFromToken = (token) => {
  const jwtPayload = jwtDecode(token);
  return { id: jwtPayload.sub };
};

export const getUser = () => {
  const token = getAccessToken();
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
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return { id: userId };
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
