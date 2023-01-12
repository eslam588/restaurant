import React from 'react'
import { CloseIcon } from '../SVG/CartIconSvg'
import { useDispatch , useSelector } from 'react-redux'
import {removeCart} from "../../redux/cartSlice"
import { useTranslation} from 'react-i18next';
import website from "../../website.json"


const CompleteOrder = ({setVisibleeee}) => {


    
  let dispatch = useDispatch()
  let {totalCount} = useSelector((state) => state.cart);
  let closemodalandclearcart = () => {
    setVisibleeee(false)
    dispatch(removeCart())
  }

  const [t,i18n] = useTranslation()
  const lang = i18n.language
  
  return (
    <div className='order-complete'>
      <h4 className="header w-full bg-white shadow">
                {t('order-details')}
                <div className="close" onClick={closemodalandclearcart} >
                    <span >
                        <CloseIcon />
                    </span>
                </div>
       </h4>
       <div className='order-details'>
          <h2>{(t('ordersuccess'))}</h2>
          <h2>{(t('ordernumber'))} 2</h2>
          <p><span> {(t('totalpaid'))} </span> {totalCount.toFixed(2)} {website.currency[lang]}</p>
          <p><span>{(t('transaction-date'))} </span> {new Date().toLocaleString()}</p>
       </div>
    </div>
  )
}

export default CompleteOrder
