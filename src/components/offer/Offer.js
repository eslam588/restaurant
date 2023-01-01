import React from 'react'
import {Offersvg} from "../SVG/IconSvg";

const Offer = ({offer}) => {

  return (
      <div className="offer-item">
          <div className="offer-item_box shadow">
            <div className="px-2">
                <div className="offer-item_icon">
                     <Offersvg />
                </div>
            </div>
            <div className="px-2">
                <span className="offer-item_title">{offer.title[0]["en"]}</span>
                <span className="offer-item_message">{offer.description[0]["en"]}</span>
                <small className="text-black-300 text-xs line-normal block">T&C apply</small>
            </div>
          </div>
        </div>
  )
}

export default Offer
