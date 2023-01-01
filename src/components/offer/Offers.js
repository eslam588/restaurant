import React from 'react'
import offers from "../../offer.json"
import Offer from './Offer'


const Offers = () => {
  
  return (
    <div className="offers-container flex bg-black-100 overflow-auto w-full py-4 px-2">
        {
            offers.map(offer => ( <Offer offer={offer} key={offer._id} />))
        }
    </div>
  )
}

export default Offers

