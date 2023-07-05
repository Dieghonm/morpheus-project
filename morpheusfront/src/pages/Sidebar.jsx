import React, { useContext, useState } from 'react';
import MyContext from '../helpers/context/MyContext';

import SidebarButtons from '../components/sidebar/SidebarButtons';
import LoginForm from '../components/sidebar/LoginForm';

import './styles/Sidebar.css';

const Sidebar = () => {
  const { loggedIn , isSidebarOpen, setIsSidebarOpen } = useContext(MyContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      <div className='menuButton'>
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          <span className ="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
      {isSidebarOpen ? (
        <div className='sidebar'>
          { loggedIn.name === '' ? <LoginForm /> : <SidebarButtons />}
        </div>) : null
      }
    </>
  )
};

export default Sidebar;

