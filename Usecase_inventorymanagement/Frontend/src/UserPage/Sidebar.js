import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Dashboard.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <> 
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
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
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <br></br>
      <div class="container-sm" style= {{marginLeft: "300px"}}>
      <div class="row">
  <div class="col-sm-4">
    <div class="card text-white bg-danger mb-3">
      <div class="card-body">
        <h5 class="card-title">Inward Stock</h5>
        <p class="card-text"></p>
        <a href="/stock/inward" class="btn btn-primary">Go </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card text-white bg-warning mb-3">
      <div class="card-body">
        <h5 class="card-title">Outward Stock</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Go </a>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="row">
  <div class="col-sm-4">
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Approve Inward</h5>
        <p class="card-text"></p>
        <a href="/stock/inward/approve" class="btn btn-primary">Go </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card text-white bg-success mb-3">
      <div class="card-body">
        <h5 class="card-title">Approve Outward</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Go </a>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Sidebar;