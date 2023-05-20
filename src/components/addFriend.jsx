import Message from "./message-box";
import { useState} from "react";
import axios from "axios";


const AddFriend = () =>{

    const [text,setText] = useState('')
    const [message,setMessage] = useState({})
    
    const handleText = (e)=>{
        setText(e)
    }
    
    const sendFriend =async ()=>{
        let owner = localStorage.getItem('name')
        if(owner){
            let response =await axios.post('http://localhost:8000/api/addfriend',{owner:owner,nombre:text})
            if(response.data){
                console.log(response.data)
                setMessage(response.data)
            }
        }
       
    }
    
    if('error' in message){
        setTimeout(()=>{
            setMessage({})
        },3000)
    }

return(
    <div className="add-friend-box">
        <div className="info-app">
            <h1>Add Friends</h1>
            <div className="imagen-add-friend">
            <img  src="./src/assets/user.png" alt="" />
            </div>
        </div>
        <div className="input-display">
            <input type="text" onChange={(e)=>{handleText(e.target.value)}} />
            <button onClick={()=>{sendFriend()}}>accept</button>
        </div>
        <div className="add-friend-message">
            {'error' in message?<Message value={message}/>:''}
        </div>

    </div>
)

}

export default AddFriend;