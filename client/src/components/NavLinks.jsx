import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAppContext} from '../context/AppContext'
import links from '../utils/links'

const NavLinks = () => {
  const {toggleSidebar}  = useAppContext()
  return (
    <div className="nav-links">
    {links.map(link=>{
      const {id,text,path,icon} = link
      return (
        <NavLink  to={path} 
                  key={id}
                  className ={({isActive})=>isActive?'nav-link active':'nav-link'}
                  onClick={toggleSidebar}>
        <span className="icon">
          {icon}
        </span>
        {text}
      </NavLink> )
}       )}
  </div>
  )
}

export default NavLinks
