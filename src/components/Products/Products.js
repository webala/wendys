import React from 'react'
import Product from './Product'
import {BsArrowBarLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Products() {
  return (
    <div class='catalogue'>
        <Link to='/' class='link'> <BsArrowBarLeft class='link-icon'/>Back Home</Link>
        <div className='all-products'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>

    </div>
  )
}

export default Products