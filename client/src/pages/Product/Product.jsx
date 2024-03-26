import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt='' onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImage]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => ( prev === 1 ? 1 : prev - 1))}>-</button>
            {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> Add to Wishlist
          </div>
          <div className='item'>
            <BalanceIcon /> Add to Compare
          </div>
        </div>
        <div className='info'>
          <span>Vendor: Polo</span>
          <span>Product type: t-Shirt</span>
          <span>Tag: t-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='details'>
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;