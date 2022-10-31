import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Logo';

import { Link } from 'react-router-dom';
import { List, X } from 'phosphor-react';

const Navbar = () => {
 const [Mobile, setMobile] = useState(false);
 return(
  <nav className='section-navbar'>
   <div className='logo-navbar'>
    <Logo />
   </div>

   <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
    <Link to='/'><li>Home</li></Link>
    <Link to='/sobre'><li>Sobre</li></Link>
    <Link to='/projetos'><li>Projetos</li></Link>
    <Link to='/comunidade'><li>Comunidade</li></Link>
   </ul>
   <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
   {Mobile ? <X size={32} /> : <List size={32} />}
   </button>
  </nav>
 );
}

export default Navbar;