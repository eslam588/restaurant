import React,{useState,useEffect}from 'react'
import {CloseIcon,RemoveIcon,AddIcon} from "../../components/SVG/CartIconSvg"
import {useSelector,useDispatch} from 'react-redux';
import website from "../../website.json"
import products from "../../product.json"
import {incrementCart,decrementCart} from '../../redux/cartSlice';
import { Link} from 'react-router-dom';
import { useTranslation,Trans } from 'react-i18next';


const CartModal = ({setVisible}) => {

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
  const [num , setNum] =useState(0)
  const [lang , setLang] =useState("en")
  
  useEffect(()=> {
    determineLanguage()
  },[i18n.language])


  const determineLanguage = () =>{
    if(i18n.language == 'en'){
      setNum(0)
      setLang("en")
    }
    else{
      setNum(1)
      setLang("ar")
    }
  }
   
  // filter product
  let productName = (id,products) => {
      let product = products.find((prod)=> prod._id === id)
      return(
        <span className="title">{product.name[num][lang]}</span>
      )
    }
    

  return (
    <>
    {
      showCartPage ?
      (<div className="basket-screen overflow-auto">
      <div className="container bg-white">
          <h4 className="header w-full bg-white shadow">
              {t('cartbasket')}
              <span className="close" onClick={() => setVisible(false)}>
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
                          <span className="price w-full">{website.currency[num][lang]} {prod?.price?.toFixed(2)}</span>
                          <div className="basket-item-counter">
                            <div className="removeItem" onClick={()=> decrement(prod)}>
                              <RemoveIcon  />
                            </div>
                            <span className="counter">{prod?.quantity}</span>
                            <div className="addItem" onClick={()=> increment(prod)}>
                                <AddIcon />
                            </div>
                           </div>
                          <span className="itemTotal min-w-24">{website.currency[num][lang]} {(prod?.price*prod?.quantity)?.toFixed(2)}</span>
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
              <div id="subtotal-sum" className="text-right min-w-28">{website.currency[num][lang]} {totalCount?.toFixed(2)}</div>
            </div>
            <div className="flex pb-2">
              <div className="w-full">{t('charges')}
              </div>
              <div className="text-right">{t('Total')}</div>
            </div>
            <div className="flex pt-3 pb-2">
              <div className="w-full">{t('Total')}
                <small> ({t('cartVat')})</small>
              </div>
              <div id="total-sum" className="text-right min-w-28">{website.currency[num][lang]} {totalCount?.toFixed(2)}</div>
            </div>
          </div>
          <div className="placeOrder bg-white w-full">
            <small className="placeOrder-error mb-2 px-4 visually-hidden"></small>
            <Link to="/location" >
               <span className="placeOrder-txt" >{t('Checkout')}</span>
            </Link>
          </div>
      </div>
      </div>) : (setVisible(false))
     }
    </>
    
  )
}

export default CartModal
