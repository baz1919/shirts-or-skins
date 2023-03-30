import * as React from "react";

const defaultState = { user: null };

const UserContext = React.createContext(defaultState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, defaultState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default { UserProvider, useUserContext };
