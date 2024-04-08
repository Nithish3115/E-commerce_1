import React from 'react'
import "../carditems/CardItems.css"
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icom from "../Assests/cart_cross_icon.png"
// import {getTotalCartAmount} from "../../Context/ShopContext"

const CardItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='carditem'>
      <div className="carditem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) =>{
        if(cartItems[e.id]>0){
            return (<div>
            <div className="carditem-format carditem-format-main">
                <img className="carticon-product-icon " src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className="cartitem-remove-icon" onClick={() =>{removeFromCart(e.id)}} src={remove_icom} alt="" />
            </div>
            <hr />
          </div>)
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>1
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardItems 
