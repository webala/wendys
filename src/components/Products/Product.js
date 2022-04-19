import React from 'react'
import PlaceholderImg from '../../assets/product-placeholder.jpg';
import {MdAddShoppingCart} from 'react-icons/md';
import {AiOutlineComment} from 'react-icons/ai';
import {FcLike} from 'react-icons/fc';
import './product.css';

function Product() {
  return (
    <div class='product'>
        <img src={PlaceholderImg} class='product-img' alt='product-image'/>
        <h1>Brown wig</h1>
        <div class='product-action'>
            <a href='#'><MdAddShoppingCart /></a>
            <a href='#'><AiOutlineComment /></a>
            <a href='#'><FcLike /></a>
        </div>
    </div>
  )
}

export default Product