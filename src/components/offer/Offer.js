import React,{useState,useEffect} from 'react'
import {Offersvg} from "../SVG/IconSvg";
import { useTranslation} from 'react-i18next';

const Offer = ({offer}) => {
  
  const [t,i18n] = useTranslation()
  const [offernum , setOffereNum] =useState(0)
  const [offerlang , setOfferLang] =useState("en")

  useEffect(()=> {
    determineLanguage()
  },[i18n.language])
  const determineLanguage = () =>{
    if(i18n.language == 'en'){
      setOffereNum(0)
      setOfferLang("en")
    }
    else{
      setOffereNum(1)
      setOfferLang("ar")
    }

  }

  return (
      <div className="offer-item">
          <div className="offer-item_box shadow">
            <div className="px-2">
                <div className="offer-item_icon">
                     <Offersvg />
                </div>
            </div>
            <div className="px-2">
                <span className="offer-item_title">{offer.title[offernum][offerlang]}</span>
                <span className="offer-item_message">{offer.description[offernum][offerlang]}</span>
                <small className="text-black-300 text-xs line-normal block">T&C apply</small>
            </div>
          </div>
        </div>
  )
}

export default Offer
