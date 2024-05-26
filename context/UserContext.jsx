"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [prod, setProd] = useState([]);
  useEffect(() => {
    if (!user) {
      axios.get("").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready, prod, setProd }}>
      {children}
    </UserContext.Provider>
  );
}
