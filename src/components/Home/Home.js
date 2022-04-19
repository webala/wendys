import React from 'react'
import './home.css';
import Logo from '../../logo.svg';

function Header() {
  return (
    <header class='header'>
      <nav>
        <img class='logo' src={Logo} alt='logo'/>
        <div class='nav-items'>
          <ul>
            <li>
              <a href='#' >Products</a>
            </li>

            <li>
              <a href='#' >About</a>
            </li>

            <li>
              <a href='#' >Testimonials</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


function Home() {
  return (
    <div class='Home'>
      <Header />
    </div>
  )
}

export default Home