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
  let {cartItemsnum , totalCount} = cartState; 
  const { setVisible, bindings } = useModal();

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


  return (
    <div className= {`bg-white shadow py-3 contacts-bottom ${scrollPosition> "460" ? "active" : ""}`}>
        <small className="basket-error mb-2 px-4 visually-hidden"></small>
        <div id="view-basket" className={`cart ${showbasket ? "active" : ""}`}> 
        <div flat="true" auto="true" onClick={() => setVisible(true)}>
            <div className="basket-txt"> {t('basket')}</div>
            <div className="basket">
              <span id="sum">{wesite.currency[lang]} {totalCount.toFixed(2)} </span>
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
        <CartModal setVisiblee={setVisible} />
      </Modal>

      {/* contacts icons */}

      <Contact />
      </div>
      
  )
}

export default Basket




 

    
