import React from 'react'
import "./style.css"
import SideBar from './SideBar'
import Workarea from './Workarea'
import Chatarea from './Chatarea'
import { useState } from 'react'
import Welcome from './Welcome'
import Creategroup from './Creategroup'
import { Outlet } from 'react-router-dom'


const MainContainer = () => {
  return (
    <div className='Main-Container'>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default MainContainer
