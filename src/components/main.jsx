/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useContext }from "react";
import axios from "axios";
import Nav from "./nav";
import Chat from "./chat";
import Friend from "./friend";
import AddFriend from "./addFriend";
import Register from './register'
import { UserContext } from "../context/mainContext";
import { socketContext } from "../context/contextSocket";


const Main = () =>{

    const {site,setSite,reload,setReload,setListFriends,listFriends} = useContext(UserContext)
    const {setRequest,socketResponse} = useContext(socketContext)


    const getFriends = async ()=>{

        let name = localStorage.getItem('name');
        if(name){ 
            let response = await axios.post('http://localhost:8000/api/userinfo',{owner:name})
            setListFriends(response.data)

        }
    }

    const registerConnection = ()=>{

        let name = localStorage.getItem('name');
        if(name){
            setRequest({'request':'setConnection','fields':{'owner':name}})
        }
    }

    useEffect(()=>{
        
        let name = localStorage.getItem('name');
        
        name? setSite('main') : setSite('register');
        
    },[])

useEffect(()=>{
getFriends()
},[site,socketResponse])



if(site == 'main'){
    if(reload){
        getFriends()
        registerConnection()
        setReload(false)
    }
    return (
        <div className="container-main">

                <Nav/>
                <div className="cuerpo-main">
                { listFriends.map(e=><Friend value={e} key={'friend-'+listFriends.indexOf(e)}/>)}
                </div>
            </div>
        )
    }
    else if(site == 'register'){
        return (
            <div className="container-main">
                <Nav/>
                <div>
                {<Register />}
                </div>
            </div>
        )
    }

    else if(site == 'chat'){
        return (
            <div className="container-main">
                <Nav/>
             
                {<Chat/>}
            </div>
        )
    }

    else if(site == 'addfriend'){
        return (
            <div className="container-main">
                <Nav/>
         
                {<AddFriend />}

            </div>
        )
    }
    
}

// friends.map(e=><Friend value={e} key={'friend-'+friends.indexOf(e)}/>)

export default Main