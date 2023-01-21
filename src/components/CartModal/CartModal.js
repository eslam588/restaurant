import React ,{useState,useEffect} from 'react'
import {CloseIcon,RemoveIcon,AddIcon} from "../../components/SVG/CartIconSvg"
import {useSelector,useDispatch} from 'react-redux';
import website from "../../website.json"
import products from "../../product.json"
import {incrementCart,decrementCart} from '../../redux/cartSlice';
import { useTranslation,Trans } from 'react-i18next';
import { Modal, useModal} from "@nextui-org/react";
import Location from '../Location/Location';
import "./cartmodal.css"
import Persondetails from './../persondetails/Persondetails';


const CartModal = ({setVisiblee}) => {

    const cartState = useSelector((state) => state.cart);
    let {cartItemsnum,totalCount,itemsInCart,showCartPage,Deliverycharges,minOrder} = cartState; 
   
    console.log(Deliverycharges);
    const dispatch = useDispatch();
    const increment = (product) => {
        dispatch(incrementCart(product))
    }
    const decrement = (product) => {
        dispatch(decrementCart(product))  
    }

    const [t,i18n] = useTranslation()
    const lang = i18n.language

    const {hiddencart}= useSelector((state) => state.lang);
    const [ordbasketerr , setOrdBasketErr]=useState(false)
    const [checktotal,setCheckTotal] = useState(false);
  
   
  // filter product
  let productName = (id,products) => {
      let product = products.find((prod)=> prod._id === id)
      return(
        <span className="title">{product.name[lang]}</span>
      )
    }

  const { setVisible, bindings } = useModal();

  let handlesubmit = () => {
    if(totalCount < minOrder){
      setVisible(false)
      setCheckTotal(true)
  }
  else{
     setVisible(true)
     setCheckTotal(false)
  }  
   
 }

 useEffect(()=> {
  if(checktotal && totalCount < minOrder){
      setOrdBasketErr(true)
  }
  else{
      setOrdBasketErr(false)
  }
},[checktotal,totalCount])
  
  return (
    <>
    {
      !hiddencart && showCartPage?
      (<div className="basket-screen overflow-auto">  
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
                          <span className="price w-full"><span>{website.currency[lang]}</span>{prod?.price?.toFixed(2)}</span>
                          <div className="basket-item-counter">
                            <div className="removeItem" onClick={()=> decrement(prod)}>
                              <RemoveIcon  />
                            </div>
                            <span className="counter">{prod?.quantity}</span>
                            <div className="addItem" onClick={()=> increment(prod)}>
                                <AddIcon />
                            </div>
                           </div>
                          <span className="itemTotal min-w-24"><span>{website.currency[lang]}</span>{(prod?.price*prod?.quantity)?.toFixed(2)}</span>
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
              <div id="subtotal-sum" className="text-right min-w-28"><span>{website.currency[lang]}</span>{totalCount?.toFixed(2)}</div>
            </div>
            <div className="flex pb-2">
              <div className="w-full">{t('charges')}
              </div>
              <div className="text-right charges">{website.currency[lang]}<span>{Deliverycharges}</span></div>
            </div>
            <div className="flex pt-3 pb-2">
              <div className="w-full">{t('Total')}
                <small> ({t('cartVat')})</small>
              </div>
              <div id="total-sum" className="text-right min-w-28"><span>{website.currency[lang]}</span>
              {(totalCount + Deliverycharges)}</div>
            </div>
          </div>
          <div className="placeOrder bg-white w-full">
            {
              ordbasketerr &&  <small className="placeOrder-error mb-2 px-4 ">Sorry, minimum order can not be less than {minOrder}</small>
            }
           
           <div onClick={handlesubmit}>
               <span className="placeOrder-txt">{t('Checkout')}</span>
           </div>
           {/* <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
             >
            <Location setVisiblee={setVisible} />
           </Modal> */}
            <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
            >
              <Persondetails setVisiblee={setVisible} />
            </Modal>
          </div>
      </div>
      </div>) : (setVisiblee(false))
     }
    </>
    
  )
}

export default CartModal
