import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Dashboard.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import Logout from './Logout';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}/>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{"z-index":"100"}}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon} 
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }
            )}
            <Logout/>

          </ul>
        </nav>
  
    </>
  );
}

export default Sidebar;