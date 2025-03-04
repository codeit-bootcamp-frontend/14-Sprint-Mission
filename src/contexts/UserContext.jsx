import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      try {
        setUser(JSON.parse(data));
      } catch (e) {
        setUser();
        console.log("유저 정보를 불러올 수 없습니다.", e);
        localStorage.removeItem("user");
      }
    }
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}

export function useSetUser() {
  const { setUser } = useContext(UserContext);
  function onSetUser(value) {
    setUser(value);
    localStorage.setItem("user", JSON.stringify(value));
  }
  return onSetUser;
}
