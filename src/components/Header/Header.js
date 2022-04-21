import React from 'react'
import './header.css'
import Logo from '../../logo.svg';

function Header() {

  

    return (
      <header class='header'>
        <nav>
          <a href='/dash'><img class='logo' src={Logo} alt='logo'/></a>
          <div class='nav-items'>
            <ul>
              <li>
                <a href='#products'>Products</a>
              </li>
  
              <li>
                <a href='#about'>About</a>
              </li>
  
              <li>
                <a href='#testimonials' >Testimonials</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }


  export default Header