import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Projetos from './Pages/Projetos/Projetos';
import Comunidade from './Pages/Comunidade/Comunidade';


export default function AppRouter() {
 return(
  <Router>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sobre' element={<Sobre />} />
    <Route path='/projetos' element={<Projetos />} />
    <Route path='/comunidade' element={<Comunidade />} />
   </Routes>
   <Footer />
  </Router>
 );
}