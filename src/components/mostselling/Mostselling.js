import React from 'react'
import products from  "../../product.json"
import Product from './Product'


const Mostselling = () => {
  return (
    <>
      <h2 className="pt-4 pb-2 px-4 text-xl line-normal font-extrabold mb-1">most selling</h2>
      <div className="most-selling-container flex bg-black-100 overflow-auto w-full py-2 px-2">
        {
            products.map(product => (<Product product={product} key={product._id} />))
        }
    </div>
    </>
  )
}

export default Mostselling

