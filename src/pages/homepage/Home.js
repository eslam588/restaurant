import React,{useState,useEffect}from 'react'
import DropDownLang from '../../components/DropDownLang/DropDownLang';
import Contact from '../../components/contact icons/Contact'
import Mostselling from './../../components/mostselling/Mostselling';
import ProductsCategory from '../../components/productscategory/ProductsCategory';
import Offers from './../../components/offer/Offers';
import Navigatorbar from "./../../components/NavigatorBar/Navigatorbar"
import LandingPage from '../../components/Landingpage/LandingPage';
import Basket from '../../components/Basket/Basket';
import {useSelector} from 'react-redux';
import { useTranslation} from 'react-i18next';
import categories from "../../Categories.json"
import allproducts from "../../product.json"
import Footer from '../../components/footer/Footer';;





const Home = ({langs,currentLanguage}) => {

  const cartState = useSelector((state) => state.cart);
  let {Deliverycharges,minOrder} = cartState
  const productState = useSelector((state) => state.product);
  let filteredproucts = productState.filteredproductbyname
  const {i18n}  = useTranslation()

  let {showbasket} = cartState; 
  const [toggleShow , setToggleShow] = useState(false);
  const [position,setPosition] = useState([]);
  
 
  
  // const [top,setTop]=useState(0);
  const [positionn,setPositionn] = useState({});
  
  // useEffect(() => {
  //    console.log(window.pageYOffset);
  //    console.log(positionn);

  // },[positionn])

  const [isActive, setIsActive] = useState(1);

  

  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        window.scrollTo(0,0)
    }, []);

    useEffect(() => {
      Object.entries(positionn).map(([key,value]) => {
        if(offset > value-80 ){
         setIsActive(key)
     }
   })
    }, [offset]);



  return (

        <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas> 
        <div className="container">  
           <DropDownLang langs={langs}  currentLanguage={currentLanguage} />
           <LandingPage/>
          <div className ="contacts bg-white shadow py-3">
           <Contact />
          </div>
          <Basket showbasket={showbasket} />
          <Offers />
          <Navigatorbar toggleShow={toggleShow} setToggleShow={setToggleShow} isActive={isActive} setIsActive={setIsActive} />
          {
            productState.showmostselling && (
              <>
                 <Mostselling />
                 {
                  categories.map(cat => {
                      let filteredall= allproducts.filter(pro => {
                        if(Array.isArray(pro.category_id)){
                             return pro.category_id.find(id => id === cat._id)  
                        }
                        else{
                           if(pro.category_id === cat._id){
                            return (pro)
                           }
                        }
                      })
                      return (
                         <ProductsCategory toggleShow={toggleShow} filteredall={filteredall} catname={cat} setPositionn={setPositionn} />
                      ) 
                     }
                   )
                 }
              </>
            )
          }
          {
            filteredproucts?.length > 0 ? <ProductsCategory filteredproucts={filteredproucts} toggleShow={toggleShow} />: ""
          }
          <Footer />
      </div>
    </div>
  )
}

export default Home














