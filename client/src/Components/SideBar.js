import React, { useState } from 'react'
import "./style.css"
import ConversationItem from './ConversationItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SideBar = ({conversation}) => {
    // console.log(props);
    return (
        <div className='sideBar'>
            <div className='sideHeader'>
                <div className='sideUser'>
                    <AccountCircleIcon/>
                </div>
                <div className='sideExtras'>
                    <GroupIcon />
                    <PersonAddAltRoundedIcon/>
                    <NightlightRoundRoundedIcon/>
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
