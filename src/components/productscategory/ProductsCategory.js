import React,{useEffect} from 'react'
import Cardproduct from '../Card/Cardproduct'
import { useTranslation} from 'react-i18next';

const ProductsCategory = ({filteredproucts,toggleShow,filteredall,catname}) => {


  const [t,i18n] = useTranslation()
  const lang = i18n.language

  const handleScroll = () => {
    const scrollposition = document.documentElement.scrollTop;
    const scroll = document.getElementById("3")?.offsetTop;
    if(scrollposition >= scroll && scrollposition < scroll + scroll.offsetHeight) {
      console.log("eslam");
    }
    
 
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  
  return (

    <div className="products-container" id={catname?._id}>
        <div data-drupal-messages-fallback className="hidden"></div>		
            <section className="product-section border-b-10 border-black-100 pb-2">
                <h2 className="pt-3 pb-2 px-4 text-xl line-normal font-extrabold mb-1">
                  {
                    filteredproucts?.length > 0 ? "" :  catname?.type[lang]
                  }
                  </h2>
                <div className={toggleShow ? "flex flex-wrap mx-1" : "flex flex-wrap"}>
                  {
                    filteredproucts?.length > 0 ? filteredproucts?.map(product => (<Cardproduct product={product} key={product._id} toggleShow={toggleShow} />)):
                    (filteredall?.map(product => (<Cardproduct  product={product} key={product._id} toggleShow={toggleShow} />)))
                  }
                </div>
          </section>
      </div>
  )
}

export default ProductsCategory
