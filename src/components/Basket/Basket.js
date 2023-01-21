import React,{useEffect,useState} from 'react'
import {Cartsvg} from '../SVG/IconSvg';
import {useSelector} from 'react-redux';
import { Modal, useModal} from "@nextui-org/react";
import CartModal from '../CartModal/CartModal';
import wesite from "../../website.json"
import "./basket.css"
import { useTranslation} from 'react-i18next';
import Contact from '../contact icons/Contact';

const Basket = ({showbasket}) => {

  const cartState = useSelector((state) => state.cart);
  const {hiddencart}= useSelector((state) => state.lang);
  let {cartItemsnum , totalCount,minOrder} = cartState; 
  const { setVisible, bindings } = useModal();
  const [ordbasketerr , setOrdBasketErr]=useState(false)
  const [checktotal,setCheckTotal] = useState(false);

  const [t,i18n] = useTranslation()
  const lang = i18n.language

   // to calculate scrolling
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  let handlebasket = () => {
    if(totalCount < minOrder){
        setVisible(false)
        setCheckTotal(true)
    }
    else{
       setVisible(true)
       setCheckTotal(false)
    }
   
  }


  useEffect(()=> {
    if(checktotal && totalCount < minOrder){
        setOrdBasketErr(true)
    }
    else{
        setOrdBasketErr(false)
    }
  },[checktotal,totalCount])


  return (
    <div className= {`bg-white shadow py-3 contacts-bottom ${scrollPosition> "460" ? "active" : ""}`}>
        {
            ordbasketerr && <small className="basket-error mb-2 px-4" >Sorry, minimum order can not be less than {minOrder}</small>
        }
        <div id="view-basket" className={`cart ${showbasket ? "active" : ""}`}> 
        <div flat="true" auto="true" onClick={handlebasket}>
            <div className="basket-txt"> {t('basket')}</div>
            <div className="basket">
              <span id="sum"><span>{wesite.currency[lang]}</span>{totalCount.toFixed(2)} </span>
              <Cartsvg />
              <span id="count">{cartItemsnum}</span>
          </div>
         </div>
         </div>
          
              <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings} 
              >
              <CartModal setVisiblee={setVisible}  />
              </Modal>
            
           
          

      {/* contacts icons */}

      <Contact />
      </div>
      
  )
}

export default Basket




 

    
