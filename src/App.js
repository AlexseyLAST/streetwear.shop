import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './pages/Store';
import {Routes, Route} from "react-router-dom";
import CareRules from './pages/CareRules';
import Contacts from './pages/Contacts';
import Delivery from './pages/Delivery';
import Products from './pages/Products';
function App() {
    return (
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/CareRules" element={<CareRules />} />
        <Route path="/Contacts" element={<Contacts />} /> 
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Products" element={<Products />} />     
      </Routes>
      <Footer/>
      </>
    )
}

export default App;
