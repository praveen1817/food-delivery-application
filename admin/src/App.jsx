import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add.jsx';
import Order from './pages/Orders/Order.jsx';
import List from './pages/List/List.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;