/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { socketContext } from "../context/contextSocket";
import { UserContext } from "../context/mainContext";

const Chat = () => {
  const { setRequest, socketResponse } = useContext(socketContext);
  const { selectedFriend } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [convers, setConvers] = useState([]);

  const handleMessage = (e) => {
    setMessage(e);
  };

  const sendMessage = () => {
    let name = localStorage.getItem("name");
    if (name) {
      setRequest({
        request: "sendMessage",
        fields: { owner: name, friend: selectedFriend, message: message },
      });
    }
  };

  useEffect(() => {
    let name = localStorage.getItem("name");
    if (name) {
      setRequest({
        request: "openRoom",
        fields: { owner: name, friend: selectedFriend },
      });
    }
  }, []);

  useEffect(() => {

    if(socketResponse?.con){
      setConvers(socketResponse.con);
    }
  }, [socketResponse]);

  useEffect(()=>{
    var scrollContainer = document.getElementById('box-chat');
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  },[convers])

  return (
    <div className="page-chat">
      <div id="box-chat" className="box-chat">
        {convers &&
          convers.map((e, index) => (
            <div className={e[0]==selectedFriend?'friend-message':'my-message'} key={index}>
              <p>{e[1]}</p>
            </div>
          ))}
      </div>
      <div className="input-chat">
        <input id="input-chat" onChange={(e) => handleMessage(e.target.value)} type="text" />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
