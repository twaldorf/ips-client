import { createContext } from "preact";

export const UserContext = createContext({
  user: undefined,
  setUser: undefined
});