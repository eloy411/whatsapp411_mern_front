/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { socketContext } from "../context/contextSocket";

export function Socket() {

  const { socket, request,setSocketResponse} = useContext(socketContext);


  useEffect(() => {
    addSocketListeners();
  }, []);

  useEffect(() => {
    if (request != {}) socket.emit(request.request, { fields: request.fields });
  }, [request]);

  function addSocketListeners() {
   
    socket.on('convers',(data)=>{
      setSocketResponse(data)
    })

    socket.on('message',(data)=>{
      setSocketResponse(data)
    })

    socket.on('friend-disconected',(data)=>{
      setSocketResponse(data)
    })

  }

}