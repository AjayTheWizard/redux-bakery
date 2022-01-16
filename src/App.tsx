import React from 'react';
import Index from './pages/Index';
import { Routes, Route } from "react-router-dom"
import BuyCake from "./pages/BuyCake"
import Navbar from './components/Navbar';
import BuyIceCream from './pages/BuyIceCream';
import Wallet from './components/Wallet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="cakes" element={<BuyCake/>}/>
        <Route path="icecreams" element={<BuyIceCream/>}/>
      </Routes>
      <Wallet/>
    </div>
  );
}

export default App;
