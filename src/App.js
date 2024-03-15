import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendar from './components/OrdersCalendar';
import Header from './components/Header';
import './App.css' 
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Routes>
        <Header/>
        <Switch>
        <Route path="/products">
            <ProductsManagement />
          </Route>
          <Route path="/orders">
            <OrdersManagement />
          </Route>
          <Route path="/calendar">
            <OrdersCalendar />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>  
    </Routes>
  );
}



export default App;