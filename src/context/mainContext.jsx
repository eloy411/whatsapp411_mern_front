/* eslint-disable react/prop-types */
import React, { useState } from "react";


const UserContext = React.createContext()

const UserProvaider = ({children})=>{

    const [site,setSite]= useState('main')
    const [selectedFriend,setSelectedFriend] = useState('')
    const [reload,setReload] = useState(true)
    const [lastSite,setLastSite] = useState('main')
    const [listFriends,setListFriends] = useState([])


    return (
        <UserContext.Provider value={
            {site,
            selectedFriend,
            reload,
            lastSite,
            listFriends,
            setListFriends,
            setLastSite,
            setReload,
            setSite,
            setSelectedFriend}
        }>
            {children}
        </UserContext.Provider>

    )

}

export {UserProvaider,UserContext}