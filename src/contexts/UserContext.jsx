import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}

export function useSetUser() {
  const { setUser } = useContext(UserContext);
  return setUser;
}
