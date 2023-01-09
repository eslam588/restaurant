import React from 'react'
import website from "../../website.json"
import { useTranslation} from 'react-i18next';





const Product = ({product}) => {
  
  const [t,i18n] = useTranslation()
  const lang = i18n.language
  
  return (
       <>
            <div className="product-item-selling shadow mx-2">
              <div className="product-item_content pb-2">
                <div className="product-item_wrapper">
                  <div className="product-item_photo-image rounded-x w-full" style={{backgroundImage: `url(${product.image})`}}></div>
                  <div>
                    <a href="#item-14" className="item">{t('learn')}</a>
                  </div>
                  <h3 className="mt-0 mb-2 pt-3 px-2 truncate-line-2 text-base leading-6">{product.name[lang]}</h3>
                  <p className="product-item_description px-2 truncate-line-2">{product.description[lang]}</p>
                  <div className="price px-2">
                    <span><span>{website.currency[lang]}</span> {product.price}</span>
                  </div>
                </div>
              </div>
            </div>
        
    </>
  )
}

export default Product

