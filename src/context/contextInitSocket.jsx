/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { io } from "socket.io-client";

export const socketInitContext = createContext();

export function InitSocketProvider({children}) {
  const [socket, setSocket] = useState(
    io('http://localhost:8000')
  );
  return (
    <socketInitContext.Provider value={{ socket, setSocket }}>
      {children}
    </socketInitContext.Provider>
  );
}