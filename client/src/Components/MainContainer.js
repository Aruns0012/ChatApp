import React from 'react'

import "./style.css"
import SideBar from './SideBar'
import Workarea from './Workarea'
import Chatarea from './Chatarea'
import { useState } from 'react'
import Welcome from './Welcome'
import Creategroup from './Creategroup'


const MainContainer = () => {

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

const bella = "this is bella chao";
  return (
    <div className='Main-Container'>
      <SideBar conversation={conversation} />
      {/* <Workarea/> */}
      <Chatarea props={conversation}/>
      {/* <Welcome/> */}
      {/* <Creategroup/> */}
    </div>
  )
}

export default MainContainer
