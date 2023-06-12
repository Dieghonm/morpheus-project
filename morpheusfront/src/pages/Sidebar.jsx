import React, { useContext } from 'react';
import MyContext from '../helpers/context/MyContext';

import LoginForm from '../components/LoginForm';
import SidebarButtons from '../components/SidebarButtons';

const Sidebar = () => {
  const {loggedIn} = useContext(MyContext)

  return (
    <div className="sidebar">
      {loggedIn.name === '' ? <LoginForm /> : <SidebarButtons /> }
    </div>
  );
};

export default Sidebar;
