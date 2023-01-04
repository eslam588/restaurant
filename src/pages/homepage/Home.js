import React,{useState,useEffect}from 'react'
import Contact from '../../components/contact icons/Contact'
import Mostselling from './../../components/mostselling/Mostselling';
import ProductsCategory from '../../components/productscategory/ProductsCategory';
import Offers from './../../components/offer/Offers';
import Navigatorbar from "./../../components/NavigatorBar/Navigatorbar"
import LandingPage from '../../components/Landingpage/LandingPage';
import Basket from '../../components/Basket/Basket';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import {getCategoriesIds} from "../../redux/productSlice"



const Home = () => {
  
  const cartState = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.product);
  let filteredproucts = productState.filteredproductbyname
  
  const dispatch=useDispatch()

  useEffect(()=> {
       dispatch(getCategoriesIds())
  },[])

  let {showbasket} = cartState; 
  const [toggleShow , setToggleShow] = useState(false);
  const [togglelang, setToggleLang] = useState(true)

  const langs = {
    en: {nativeName:'English'},
    ar : {nativeName : 'عربى'}
  }
  const [t,i18n] = useTranslation()
   
  

  return (
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas> 
        <div className="container">  
          <ul className="links">
            <li  className={togglelang && "is-active"} onClick={()=> setToggleLang(true)} >
                <Link  onClick={()=> i18n.changeLanguage("en")}  to='/en'
                 className={togglelang ? "language-link session-active is-active" : "language-link"}>{langs["en"].nativeName}</Link>
            </li>
            <li className={!togglelang && "is-active"} onClick={()=> setToggleLang(false)}>
                <Link  onClick={()=> i18n.changeLanguage("ar")} to='/ar'
                className={togglelang ? "language-link" : "language-link session-active is-active"} >{langs["ar"].nativeName}</Link>
            </li>
          </ul>
          <LandingPage/>
          <Contact />
          <Basket showbasket={showbasket} />
          <Offers />
          <Navigatorbar toggleShow={toggleShow} setToggleShow={setToggleShow} />
          {
            productState.showmostselling && (
              <>
                 <Mostselling />
                 {
                  
                 }
                 <ProductsCategory toggleShow={toggleShow} />
              </>
            )
          }
          {
            filteredproucts?.length > 0 ? <ProductsCategory filteredproucts={filteredproucts} toggleShow={toggleShow} />: ""
          }
         
          <div className="p-4 text-sm line-normal bg-white">
              {t('Vat')}
          </div>
          <div className="powered-by">
              <a href="https://www.zmatjar.com/?utm_content=powered-by&utm_source=business-storefront&utm_medium=business-partner&utm_campaign=demo" target="_blank" rel="noopener noreferrer" className="powered-by_link">
              <span className="powered-by_text">{t('Powerby')}</span>
              </a>
          </div>
      </div>
    </div>

  )
}

export default Home




    // <ul class="links">
    //   <li data-drupal-link-query="{&quot;language&quot;:&quot;en&quot;}" data-drupal-link-system-path="<front>" class="is-active">
    //      <a href="/en?language=en" class="language-link session-active is-active" data-drupal-link-query="{&quot;language&quot;:&   quot;en&quot;}" data-drupal-link-system-path="<front>">English</a>
    //    </li>
    //   <li data-drupal-link-query="{&quot;language&quot;:&quot;ar&quot;}" data-drupal-link-system-path="<front>"><a href="/ar?language=ar" class="language-link" data-drupal-link-query="{&quot;language&quot;:&quot;ar&quot;}" data-drupal-link-system-path="<front>">عربى</a>
    //       </li>
    //     </ul> 