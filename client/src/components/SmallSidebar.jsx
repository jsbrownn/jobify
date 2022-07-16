import React from 'react';
import {Logo} from '../components'
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar.js';
import {useAppContext} from '../context/AppContext';
import {NavLinks} from '../components/'



function SmallSidebar() {

  const {showSidebar,toggleSidebar} = useAppContext()

  return (
    <Wrapper>
      <div className={showSidebar?"sidebar-container show-sidebar":"sidebar-container"}>
        <div className="content">
          <button className="close-btn"
                  onClick={()=>toggleSidebar()}>
            <FaTimes/>        
          </button>
          <header>
            <Logo/>
          </header>
         <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
