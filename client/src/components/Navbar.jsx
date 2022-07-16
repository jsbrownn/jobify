import React,{useState,useEffect} from 'react';
import Wrapper from '../assets/wrappers/Navbar'
import {Logo} from '../components';
import {FaAlignLeft,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import {useAppContext} from '../context/AppContext.js'


function Navbar() {

  const [showLogout,setShowLogout] = useState(false)
  const {user,toggleSidebar,logoutUser} = useAppContext() 

  
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" 
                type="button"
                onClick={toggleSidebar}>
          <FaAlignLeft/>
        </button>
        <div>
          <Logo/>
          <h3 className="logo-text">
            dashboard
          </h3>
        </div>
        <div className="btn-container">
          <button className="btn" 
                  type="button" 
                  onClick={()=>{setShowLogout(!showLogout)}}>
            <FaUserCircle/>
            {user.name}
            <FaCaretDown/>
          </button>
          <div className={!showLogout?`dropdown`:`dropdown show-dropdown`}>
            <button className="dropdown-btn" 
                    type="button"
                    onClick={logoutUser}>Logout</button>
          </div>

        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
