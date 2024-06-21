import React from 'react';
import './Navbar.css';
// import navlogo from './navlogo.svg'

const Navbar = (props) => {
  return (
    <>
        <div id='navbar'>
            <ul id='navUl'>
                <li className='navCl'><img src='https://cdn.prod.website-files.com/6630d85d73068bc09c7c436c/6630d85d73068bc09c7c4397_logo.d7c063a1.svg' height='51px' width='' /></li>
                <li className='navCl'>{props.l1}</li>
                <li className='navCl'>{props.l2}</li>
                <li className='navCl'>{props.l3}</li>
                <li className='navCl'>{props.l4}</li>
                <li className='navCl' id='search'><input type="text" placeholder="Search.."/></li>
                <li className='navCl' id='login'><button>Log In</button></li>
            </ul>
        </div>
    
    </>
  )
}

export default Navbar;