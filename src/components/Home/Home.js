import React from 'react'
import './home.css';
import Logo from '../../logo.svg';
import OverviewImage from '../../assets/home-img.jpg';
import Product from '../Products/Product';
import Testimonial from '../Testimonials/Testimonial';
import {BsArrowBarDown, BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'

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
      <section class='overview'>
        <img class='overview-img' src={OverviewImage} alt='overview-img' />
        <div class='overview-text'>
          <h2>
            We'll style <br/> You'll Smile
          </h2>
          <a class='btn' href='#'>Products <span><BsArrowBarDown class='btn-icon'/></span></a>
        </div>
      </section>
      <section class='products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>

      <section class='about'>
        <h2>About</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero ducimus nam beatae impedit, soluta assumenda dignissimos sapiente blanditiis repudiandae, eius iusto, exercitationem id quis. Rerum iste facere necessitatibus fuga? Beatae ea, adipisci repudiandae earum quos quibusdam neque quasi doloremque aliquam suscipit non, similique obcaecati! Voluptates vero culpa quo reprehenderit nobis asperiores quas debitis incidunt, eveniet saepe. Fuga excepturi quibusdam soluta ab molestiae. Maiores, obcaecati ut labore, ipsam, quia placeat expedita aut asperiores sint vel numquam alias autem voluptate nobis saepe dolore quas quo corrupti reprehenderit quidem earum quaerat ipsum. Fuga tempora amet dolorem eaque aspernatur ullam rem, deleniti sapiente?
        </p>

        <div class='socials'>
          <a href='#'><BsInstagram /></a>
          <a href='#'><FiTwitter /></a>
          <a href='#'><FaTiktok /></a>
          <a href='#'><BiMailSend /></a>
        </div>
      </section>

      <section id='testimonials'>
        <div class='testimonials'>
          <Testimonial user='@alice' testimony='This is the wig desivner'/>
          <Testimonial user='@JK' testimony='I love your designs'/>
          <Testimonial user='@wendy' testimony='The wig i bought here last me two years. How do you do it?'/>
          <Testimonial user='@ashley' testimony="Nobody could take their eyes off me on my mothers wedding."/>
          <Testimonial user='@james' testimony='I could not beleive that you had wigs for men. It was a worthy investment.'/>
          <Testimonial user='@kimberly' testimony='Wow. Just wow.'/>
        </div>
       
        <form class='add-testimony'>
          <textarea placeholder='Do you have a  Testimony'></textarea>
          <button type='submit'>Testify</button>
        </form>
      </section>
    </div>
  )
}

export default Home