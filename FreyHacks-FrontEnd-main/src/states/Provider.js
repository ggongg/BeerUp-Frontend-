import { createContext, useReducer } from "react";
import reducer from "./reducer";
import PropTypes from "prop-types";

const defaultState = { userData: {}, isLoggedIn: false };
// look here
const initialState = JSON.parse(
  localStorage.getItem("state") || JSON.stringify(defaultState)
);

export const Context = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
};
