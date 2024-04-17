import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';

// const icono = document.querySelector('.bx-toggle-left');

// const handleDark = () => {
//   
//   icono.classList.toggle('bx-toggle-right');
  
// }


const HeaderNav = () => {
const body = document.querySelector('body');
const [ isActived, setIsActived ] = useState(false);
const handleDark = () => {
  setIsActived(!isActived)
  body.classList.toggle('dark');
};

  return (
    <div className='headerNav'>
        <h1><Link to='/'>e-commerce</Link></h1>
        <nav>
          <ul className='headerNav_list'>
            <li><Link to='/login'><i className='bx bx-user'></i></Link></li>
            <li><Link to='/purchases'><i className='bx bx-box'></i></Link></li>
            <li><Link to='/cart'><i className='bx bx-cart'></i></Link></li>
            <li><i onClick={handleDark} className={ isActived ? 'bx bx-toggle-left' : 'bx bx-toggle-right'}></i></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;