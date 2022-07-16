import React from 'react';
import Wrapper from '../../assets/wrappers/SharedLayout';
import {useAppContext} from '../../context/AppContext.js';
import { Outlet} from 'react-router-dom';
import { SmallSidebar,BigSidebar,Navbar } from '../../components';

function SharedLayout() {
  const {user} = useAppContext()
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
