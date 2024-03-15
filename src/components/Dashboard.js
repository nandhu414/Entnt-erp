

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import OrdersManagement from './OrdersManagement';
import ProductsManagement from './ProductsManagement';
import OrdersCalendar from './OrdersCalendar';
import Header from './Header';
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="bannerBox">
    <img src="assets/maxresdefault.jpg" alt="banner"/>
  </div> 
   
  );
}

export default Dashboard;