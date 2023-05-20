/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState,useEffect} from "react";
import { UserContext } from "../context/mainContext";
import { socketContext } from "../context/contextSocket";

const Nav = () => {
    const {setRequest,socketResponse} = useContext(socketContext)
    const {site,setSite,selectedFriend} = useContext(UserContext)
    const [name,setName] = useState('')
    const [friendConected,setFriendConected] = useState(false)

    const handleSite = (e)=>{
        let name = localStorage.getItem('name')
        if(e==='main'){
            setRequest({request:"exitChat",fields:{owner:name,friend:selectedFriend}})
        }
        setSite(e)
    }
    useEffect(()=>{
        console.log(socketResponse)
        if(site == 'chat' && socketResponse?.inroom){
            if(socketResponse.inroom == selectedFriend || socketResponse.on){
                setFriendConected(true)
            }else{
                setFriendConected(false)
            }
        }else if(site == 'chat' && socketResponse?.friendDisconected){
            setFriendConected(false)
        }
    },[socketResponse])

    useEffect(()=>{
        let name = localStorage.getItem('name')

        if(name){
            if(site == 'chat'){
               name = selectedFriend.charAt(0).toUpperCase() + selectedFriend.slice(1);
               setName(name) 
            }else{
                name = name.charAt(0).toUpperCase() + name.slice(1);
                setName(name)
            }
        }else{
            setName('Nobody')
        }

    },[site])

    return (
        <div className="nav">
            <div className="img-nav">
                <div className="img-nav">
                <img  src="./src/assets/user.png" alt="" />
                </div>
            </div>
            <div className={friendConected && site == 'chat'?"name-nav-true":"name-nav-false"}>
                {name}
            </div>
            <div className="button-div">
            {
            site==='main'?
            <button id="addfriend" onClick={(e)=>{handleSite(e.target.id)}}>
                Add-Friend</button>
            :
            site !=='register'?
            <button id="main" onClick={(e)=>{handleSite(e.target.id)}}>Back</button>
            :''
            }
            </div>
        </div>
    )
}

export default Nav;