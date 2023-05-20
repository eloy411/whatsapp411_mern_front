/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useContext} from "react";
import Message from "./message-box";
import axios from "axios";
import { UserContext } from "../context/mainContext";

const Register = () =>{

    const [message,setMessage] = useState({})
    const {setSite} = useContext(UserContext)

const [text,setText] = useState('')


const handleText = (e)=>{
    setText(e)
}


const sendUser =  async ()=>{

    let response = await axios.post('http://localhost:8000/api/register',{nombre:text});
    if('error' in response.data){
        localStorage.setItem('name',text),
        setMessage(response.data)
    }
}

if('error' in message){

    if(message.error == 0){

        setTimeout(()=>{
            setSite('main')
        },4000)
    }else{
        setTimeout(()=>{
            setMessage({})
        },4000)
    }
}

return(
    <div className="add-friend-box">
      <div className="info-app">
            <h1>Register</h1>
            <div className="imagen-add-friend">
            <img  src="./src/assets/user.png" alt="" />
            </div>
        </div>
        <div className="input-display">
            <input type="text" onChange={(e)=>{handleText(e.target.value)}} />
            <button onClick={()=>{sendUser()}}>accept</button>
        </div>
        <div className="add-friend-message">
            {'error' in message?<Message value={message}/>:''}
        </div>
    </div>
)

}

export default Register;