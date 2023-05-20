/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { socketInitContext } from "./contextInitSocket";

export const socketContext = createContext();

export function SocketProvider({children}) {
  const [request, setRequest] = useState({});
  const { socket } = useContext(socketInitContext);
  const [socketResponse, setSocketResponse] = useState({});

  return (
    <socketContext.Provider
      value={{ socket, setRequest, request, socketResponse, setSocketResponse }}>

    {children}

    </socketContext.Provider>
  );
}