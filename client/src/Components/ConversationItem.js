import React from 'react';
import "./style.css"

const ConversationItem = ({props}) => {
  return (
    <div className='conversationItem'>
        <p className='convLogo'>{props.name[0]}</p>
        <p className='convTitle'>{props.name}</p>
        <p className='convLastM'>{props.lastMessage}</p>
        <p className='convTime'>{props.time}</p>
    </div>
  )
}

export default ConversationItem
