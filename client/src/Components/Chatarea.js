import React from 'react'
import MessageS from './MessageS'
import MessageO from './MessageO'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseIcon from '@mui/icons-material/Close';


const Chatarea = ({ conversation }) => {

    
    return (
        <div className='chatArea'>
            <div className="chatHeader chatElements">

                <div>
                    <p className='convLogo'>A</p>
                </div>
                <div className='convInfo'>
                    <p className='convTitle'>abcd</p>
                    <CloseIcon/>               </div>

            </div>
            <div className="chatMessages chatElements">
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
                <MessageO />
                <MessageS />
            </div>
            <div className="chatText chatElements">
                <div>
                    <input type="text" className="entertext inputField" placeholder='Type a message' />
                </div>
                <div className="enterBtn">
                    <SendRoundedIcon/>
                    </div>
            </div>
        </div>
    )
}

export default Chatarea
