import React from 'react'
import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';

function Dashboard() {
  return (
    <div className='pageWrapper'>
        <Header></Header>
        <div className='pageDivider'>
            <SideBar></SideBar>
        </div>
    </div>
  )
}

export default Dashboard