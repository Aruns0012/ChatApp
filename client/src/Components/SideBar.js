import React, { useState } from 'react'
import "./style.css"
import ConversationItem from './ConversationItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [conversation, setConversation] = useState([
        {
            name: "Test1",
            lastMessage: "hello this is working",
            time: "Today"
        },
        {
            name: "Aest1",
            lastMessage: "hello this is the second message",
            time: "Today"
        },
        {
            name: "Best1",
            lastMessage: "hello this is the third message",
            time: "Today"
        },
    ])

    const navigate = useNavigate();
    return (
        <div className='sideBar'>
            <div className='sideHeader'>
                <div className='sideUser'>
                    <AccountCircleIcon onClick={()=>{navigate("welcome")}} className='toHover'/>
                </div>
                <div className='sideExtras'>
                    <GroupIcon onClick={()=>{navigate("groups")}}  className='toHover'/>
                    <PersonAddAltRoundedIcon onClick={()=>{navigate("chat")}} className='toHover'/>
                    <NightlightRoundRoundedIcon className='toHover'/>
                </div>
            </div>

            <div className='sideSearch'>
                <SearchRoundedIcon/>
                <input type="text" name="search-box" className='inputField' placeholder='Search' />
            </div>

            <div className='sideConvers'>
                {conversation.map((conversation) => {
                    return <ConversationItem props={conversation} key={conversation.name}/>
                })}
            </div>

        </div>
    )
}

export default SideBar
