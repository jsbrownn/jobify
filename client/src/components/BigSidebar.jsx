import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar'
import { NavLinks } from '../components';
import { useAppContext } from '../context/AppContext'
import { Logo } from '../components';


function BigSidebar() {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar ? "show-sidebar sidebar-container" : "sidebar-container"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
