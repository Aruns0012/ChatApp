import React from 'react'
import "./style.css"
import SideBar from './SideBar'
import Workarea from './Workarea'


const MainContainer = () => {
  return (
    <div className='Main-Container'>
      <SideBar/>
      <Workarea/>
    </div>
  )
}

export default MainContainer
