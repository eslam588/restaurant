import React from 'react'
import {CloseIcon,RemoveIcon,AddIcon} from "../../components/SVG/CartIconSvg"
import {useSelector,useDispatch} from 'react-redux';
import website from "../../website.json"
import products from "../../product.json"
import {incrementCart,decrementCart} from '../../redux/cartSlice';
import { useTranslation,Trans } from 'react-i18next';
import { Modal, useModal} from "@nextui-org/react";
import Location from '../Location/Location';
import "./cartmodal.css"


const CartModal = ({setVisiblee}) => {

    const cartState = useSelector((state) => state.cart);
    let {cartItemsnum,totalCount,itemsInCart,showCartPage} = cartState; 

    const dispatch = useDispatch();
    const increment = (product) => {
        dispatch(incrementCart(product))
    }
    const decrement = (product) => {
        dispatch(decrementCart(product))  
    }

    const [t,i18n] = useTranslation()
    const lang = i18n.language
  
   
  // filter product
  let productName = (id,products) => {
      let product = products.find((prod)=> prod._id === id)
      return(
        <span className="title">{product.name[lang]}</span>
      )
    }

  const { setVisible, bindings } = useModal();
 
 console.log(bindings.open);
  return (
    <>
    {
      showCartPage ?
      (<div className={`basket-screen overflow-auto ${bindings.open ? "cart-hidden" : ""}`}>
      <div className="container bg-white">
          <h4 className="header w-full bg-white shadow">
              {t('cartbasket')}
              <span className="close" onClick={() => setVisiblee(false)}>
                   <CloseIcon />
              </span>
          </h4>
          <div id="order-basket" className="border-b-5 border-black-100 view-order pt-20 px-4">
             {
                cartItemsnum > 0 && itemsInCart.map(prod => {
                  return (
                    <div id="7" className="mb-5 product-separator" data-title="Cafe Latte" data-price="18.9">
                        {
                            productName(prod._id,products)
                        }
                        <div className="basketItem">
                          <span className="price w-full">{website.currency[lang]} {prod?.price?.toFixed(2)}</span>
                          <div className="basket-item-counter">
                            <div className="removeItem" onClick={()=> decrement(prod)}>
                              <RemoveIcon  />
                            </div>
                            <span className="counter">{prod?.quantity}</span>
                            <div className="addItem" onClick={()=> increment(prod)}>
                                <AddIcon />
                            </div>
                           </div>
                          <span className="itemTotal min-w-24">{website.currency[lang]} {(prod?.price*prod?.quantity)?.toFixed(2)}</span>
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
                <textarea autocomplete="off" name="check-instructions" rows="5" cols="60" placeholder={t('Instructions')}></textarea>
              </div>
            </div>
          </div>
          <div className="basket-total px-4 pt-4 pb-20">
            <div className="flex pb-2">
              <div className="w-full">{t('Subtotal')}
                <small> ({t('cartVat')})</small>
              </div>
              <div id="subtotal-sum" className="text-right min-w-28">{website.currency[lang]} {totalCount?.toFixed(2)}</div>
            </div>
            <div className="flex pb-2">
              <div className="w-full">{t('charges')}
              </div>
              <div className="text-right">{t('discount')}</div>
            </div>
            <div className="flex pt-3 pb-2">
              <div className="w-full">{t('Total')}
                <small> ({t('cartVat')})</small>
              </div>
              <div id="total-sum" className="text-right min-w-28">{website.currency[lang]} {totalCount?.toFixed(2)}</div>
            </div>
          </div>
          <div className="placeOrder bg-white w-full">
            <small className="placeOrder-error mb-2 px-4 "></small>
           <div onClick={() => setVisible(true)}>
               <span className="placeOrder-txt">{t('Checkout')}</span>
           </div>
           <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
             >
            <Location setVisiblee={setVisible} />
           </Modal>
          </div>
      </div>
      </div>) : (setVisiblee(false))
     }
    </>
    
  )
}

export default CartModal
