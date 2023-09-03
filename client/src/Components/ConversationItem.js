import React from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';

const ConversationItem = ({props}) => {
  const navigate = useNavigate();
  return (
    <div className='conversationItem' onClick={()=>{navigate("chat")}}>
        <p className='convLogo'>{props.name[0]}</p>
        <p className='convTitle'>{props.name}</p>
        <p className='convLastM'>{props.lastMessage}</p>
        <p className='convTime'>{props.time}</p>
    </div>
  )
}

export default ConversationItem
