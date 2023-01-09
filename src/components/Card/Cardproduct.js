import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart,incrementCart,decrementCart } from '../../redux/cartSlice';
import website from "../../website.json"
import {showBasket} from '../../redux/cartSlice';
import { useTranslation} from 'react-i18next';

const Cardproduct = ({product,toggleShow}) => {

 const [showquan,SetShowQuan] = useState(false)
 const cartState = useSelector((state) => state.cart);
 const dispatch = useDispatch();
 let productsCart = cartState.itemsInCart;
 

let prodcart =  productsCart.find((item) => item._id === product._id)
let quan=prodcart?.quantity


useEffect(() => {
    checkquantity()
},[quan])

let checkquantity = () => {
    if( quan > 0){
        SetShowQuan(true)
     }
    else{
      SetShowQuan(false)
    }
}

 const addtocart = (product) => {
    dispatch(addToCart(product))
 }

 const increment = (product) => {
    dispatch(incrementCart(product))
 }

 const decrement = () => {
    dispatch(decrementCart(product))
    
 }

 useEffect(() => {
    dispatch(showBasket())
  },[dispatch,addtocart,increment,decrement])


  const [t,i18n] = useTranslation()
  const lang = i18n.language


  

  return (
    <div id="item-14" className={`${showquan ? "added-to-card" : "added-to-card-none"} ${toggleShow ? "product-item product-item-grid mx-2" : "product-item"}`}
     data-title="عصير أفوكادو متوسط الحجم" data-price="23.80" data-id="14">
        <div className="product-item_content">
            <div className={toggleShow ? "product-item_wrapper" : "product-item_wrapper flex-shrink"}>
            <h3 className="mt-0 mb-2 truncate-line-2 text-base leading-6">{product.name[lang]}</h3>
            <p className="product-item_description truncate-line-2">{product.description[lang]}</p>
            <div className="price">
                <span>{website.currency[lang]} {product.price}</span>
            </div>
            </div>
            <div className= {toggleShow ? "product-item_photo mb-2":"product-item_photo flex-shrink-0"}>
            <div className={toggleShow ? "product-item_photo-image rounded-md w-full h-full": "product-item_photo-image rounded-md w-full"}>
                <img src={product.image} className="rounded-md w-26 ls-is-cached" loading="lazy" alt="عصير أفوكادو متوسط الحجم " />
                {
                        !showquan ? (
                        <div className='add-item' onClick={()=> addtocart(product)}>
                            {t('add')} +
                        </div>
                        ):(
                            <div className='order-item-counter'>
                                <div className='removeItem' onClick={()=> decrement(product)} >
                                    <img src='https://demo.zmatjar.com/themes/menu/assets/images/remove-icon.svg' />
                                </div>
                                <span className='counter'>{quan}</span>
                                <div className='addItem' onClick={()=> increment(product)} >
                                    <img src='https://demo.zmatjar.com/themes/menu/assets/images/add-icon.svg' />
                                </div>
                         </div>
                        )
                }
            </div>
            </div>
        </div>
   </div>
  )
}

export default Cardproduct


