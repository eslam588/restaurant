import React from 'react'
import products from  "../../product.json"
import Cardproduct from '../Card/Cardproduct'

const ProductsCategory = ({filteredproucts,toggleShow,filteredall,catname}) => {

  return (

    <div className="products-container">
        <div data-drupal-messages-fallback className="hidden"></div>		
            <section id="category-4" className="product-section border-b-10 border-black-100 pb-2">
                <h2 className="pt-3 pb-2 px-4 text-xl line-normal font-extrabold mb-1">
                  {
                    filteredproucts?.length > 0 ? "" :  catname?.type[0]["en"]
                  }
                  </h2>
                <div className={toggleShow ? "flex flex-wrap mx-1" : "flex flex-wrap"}>
                  {
                    filteredproucts?.length > 0 ? filteredproucts?.map(product => (<Cardproduct product={product} key={product._id} toggleShow={toggleShow} />)):
                    (filteredall?.map(product => (<Cardproduct product={product} key={product._id} toggleShow={toggleShow} />)))
                  }
                </div>
          </section>
      </div>
  )
}

export default ProductsCategory
