/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext} from "react";

import { UserContext } from "../context/mainContext";
// import { socketContext } from "../context/contextSocket";

const Friend = (props) =>{

    const {setSite,setSelectedFriend} = useContext(UserContext) 
    // const { setRequest, socketResponse } = useContext(socketContext);
    // const [alert,setAlert] = useState(false)
    

   const openChat = (value)=>{
        setSelectedFriend(value[0])
        setSite('chat')
    }


    return (
        <div id={`box-friend-${props.value[0]}`} className={`box-friend-${props.value[1]}`} onClick={()=>{openChat(props.value)}}>
            <div className="img-friend"></div>
            <div className="name-friend">
                <p> {props.value}</p>
            </div>
        </div>
        )

}

export default Friend;