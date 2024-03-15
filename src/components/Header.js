import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <header className="header">
      <div className='headerSection'>
        <div className="left">
        <div className="title">
          <h2>Mobile-hub</h2>
          
          </div> 
          <div className="center">
            <ul>
              <Link to="/">
              <li>Dashboard</li>
              </Link>
              <Link to="/products">
              <li>ProductsManagement</li>
              </Link>
              <Link to ="/orders">
              <li>OrdersManagement</li>
              </Link>
              <Link to="/calendar">
              <li>OrdersCalendar</li>
              </Link>
            </ul>
        
          </div>
          
        </div>
      </div>  
      

    </header>
      
    
  );
}

export default Header;