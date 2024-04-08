import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png" 
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}= props;
     const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdislay-right-price-old">${product.old_price}</div>
            <div className="productdislay-right-price-new">${product.new_price}</div>

        </div>
        <div className="productdislay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugit repellendus aperiam impedit odio qui sit non quam recusandae dignissimos.

        </div>
        <div className="productdislay-right-size">
            <h1>Select Size</h1>
            <div className="productdislay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdislay-right-category">
            <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdislay-right-category">
            <span>Tags :</span>Moder, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay 
