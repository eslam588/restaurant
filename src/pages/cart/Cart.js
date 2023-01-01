import React from 'react'
import {CloseIcon,RemoveIcon,AddIcon} from "../../components/SVG/CartIconSvg"
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import website from "../../website.json"
import {addToCart,incrementCart,decrementCart,showBasket} from '../../redux/cartSlice';




const Cart = () => {

  const cartState = useSelector((state) => state.cart);
  let {cartItemsnum,totalCount,itemsInCart} = cartState; 
  const dispatch = useDispatch();
  const increment = (product) => {
      dispatch(incrementCart(product))
  }

  const decrement = (product) => {
      dispatch(decrementCart(product))
      
  }

  

  return (
    <div className="basket-screen overflow-auto">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
              Your basket
                <span className="close">
                  <Link to="/">
                     <CloseIcon />
                  </Link>
                </span>
            </h4>
            <div id="order-basket" className="border-b-5 border-black-100 view-order pt-20 px-4">
               {
                cartItemsnum > 0 && itemsInCart.map(prod => {
                    return (
                      <div id="7" className="mb-5 product-separator" data-title="Cafe Latte" data-price="18.9">
                          <span className="title">{prod.name[0]["en"]}</span>
                          <div className="basketItem">
                            <span className="price w-full">{website.currency[0]["en"]}{prod.price}</span>
                            <div className="basket-item-counter">
                              <div className="removeItem" onClick={()=> decrement(prod)}>
                                <RemoveIcon  />
                              </div>
                              <span className="counter">{prod.quantity}</span>
                              <div className="addItem" onClick={()=> increment(prod)}>
                                  <AddIcon />
                              </div>
                             </div>
                            <span className="itemTotal min-w-24">{prod.price*prod.quantity}</span>
                          </div>
                     </div>

                    )
                }

                ) 
               }
            </div>
            <div className="px-4 pt-4 border-b-5 border-black-100 view-order">
              <div className="flex pb-2">
                <div className="w-full">
                  <textarea autocomplete="off" name="check-instructions" rows="5" cols="60" placeholder="Instructions"></textarea>
                </div>
              </div>
            </div>
            <div className="basket-total px-4 pt-4 pb-20">
              <div className="flex pb-2">
                <div className="w-full">Subtotal
                  <small>(Inclusive of VAT)</small>
                </div>
                <div id="subtotal-sum" className="text-right">{totalCount}</div>
              </div>
              <div className="flex pb-2">
                <div className="w-full">Delivery charges
                </div>
                <div className="text-right">Free</div>
              </div>
              <div className="flex pt-3 pb-2">
                <div className="w-full">Total
                  <small>(Inclusive of VAT)</small>
                </div>
                <div id="total-sum" className="text-right min-w-28">{totalCount}</div>
              </div>
            </div>
            <div className="placeOrder bg-white w-full">
              <small className="placeOrder-error mb-2 px-4 visually-hidden"></small>
              <span className="placeOrder-txt">Checkout</span>
            </div>
        </div>
    </div>
  )
}

export default Cart
