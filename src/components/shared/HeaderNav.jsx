import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';
const body = document.querySelector('body');
const icono = document.querySelector('.bx-toggle-left');

const handleDark = () => {
  body.classList.toggle('dark');
  // icono.classList.toggle('bx-toggle-right');
  
}


const HeaderNav = () => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'>e-commerce</Link></h1>
        <nav>
          <ul className='headerNav_list'>
            <li><Link to='/login'><i className='bx bx-user'></i></Link></li>
            <li><Link to='/purchases'><i className='bx bx-box'></i></Link></li>
            <li><Link to='/cart'><i className='bx bx-cart'></i></Link></li>
            <li><i className='bx bx-toggle-left' onClick={handleDark}></i></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;