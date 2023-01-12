import React,{useEffect,useState} from 'react'
import "./productPopup.css"
import website from "../../website.json"
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import {CloseIcon} from "../../components/SVG/CartIconSvg"

const ProductPopup = ({setVisible,product,increment,decrement,addtocart,quan,showquan}) => {


const [t,i18n] = useTranslation()
const lang = i18n.language

let closepopup = () => {
    setVisible(false)
    document.title = website.title[lang];
}

useEffect(() => {
        document.title = product.url_alias;    
  }, [product]);
  
    
return (
    <div className='product-popup'>
        <div>
            <Link to={`/${lang}`} onClick={closepopup}>
                <CloseIcon  />
            </Link>
        </div>
        <div className="product-cover" style={{backgroundImage: `url(${product.image})`}}></div>
        <div className='product-popup-details'>
             <h3 className="product-popup-name">{product.name[lang]}</h3>
            <p className="product-popup-description">{product.description[lang]}</p>
            <div className="product-popup-price">
                <span><span>{website.currency[lang]}</span>{product.price}</span>
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
  )
}

export default ProductPopup
