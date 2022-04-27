import React, {useState, useEffect}  from 'react'
import './home.css';
import Header from '../Header/Header';
import OverviewImage from '../../assets/home-img.jpg';
import Product from '../Products/Product';
import Testimonial from '../Testimonials/Testimonial';
import {BsArrowBarDown, BsInstagram, BsArrowBarRight} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase'




function Home() {
  
  const [products, setProducts] = useState([])
  const productsCollectionRef = collection(db, 'Products')

  useEffect (() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getProducts()
  }, [])

  const handleScroll = () => {
    const header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scroll > 0)
  }

  console.log(products)

  return (
    <div class='Home' onScroll={handleScroll}>
      <Header />
      <section class='overview'>
        <img class='overview-img' src={OverviewImage} alt='overview-img' />
        <div class='overview-text'>
          <h2>
            We'll style <br/> You'll Smile
          </h2>
          <a class='btn' href='#products'>Products <span><BsArrowBarDown class='btn-icon'/></span></a>
        </div>
      </section>
      <section id='products'>
        <div class='products'>

          {products.map((product) => {
            return <Product name={product["name"]} />
          })}

        </div>
        <Link to='/products' class='link'>More Items<BsArrowBarRight class='link-icon'/></Link>
      </section>

      <section class='about' id='about'>
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
        <h2>Testimonies</h2>
        <div class='testimonials'>
          <Testimonial user='@alice' testimony="The customer service was what impressed me most with Wendy's"/>
          <Testimonial user='@JK' testimony='I love your designs'/>
          <Testimonial user='@wendy' testimony='The wig i bought here last me two years. How do you do it?'/>
          <Testimonial user='@ashley' testimony="Nobody could take their eyes off me on my mothers wedding."/>
          <Testimonial user='@james' testimony='I could not beleive that you had wigs for men. It was a worthy investment.'/>
          <Testimonial user='@kimberly' testimony='Wow. Just wow.'/>
        </div>
       
        <form class='add-testimony'>
          <textarea placeholder='Do you have a  Testimony about Wendys?'></textarea>
          <button type='submit'>Testify</button>
        </form>
      </section>
    </div>
  )
}

export default Home