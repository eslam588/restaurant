import React,{useEffect,useState} from 'react'
import { Callsvg,Locationsvg,Watsappsvg,Cartsvg} from '../SVG/IconSvg';
import {useSelector} from 'react-redux';
import { Modal, useModal} from "@nextui-org/react";
import CartModal from '../CartModal/CartModal';
import wesite from "../../website.json"
import "./basket.css"

const Basket = ({showbasket}) => {

  const cartState = useSelector((state) => state.cart);
  let {cartItemsnum , totalCount} = cartState; 
  const { setVisible, bindings } = useModal();

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
            <div className="basket-txt">View basket</div>
            <div className="basket">
              <span id="sum">{wesite.currency[0]["en"]} {totalCount} </span>
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
        <CartModal setVisible={setVisible} />
      </Modal>
  

        <div className="contacts-container">
          <a href="https://goo.gl/maps/6Tyrp8ooZFfQZhL39" target="_blank" className="location cta">
            <div>
               <Locationsvg />
            </div>
            <span>Location</span>
          </a>
          <a href="https://wa.me/971502385613" target="_blank" className="whatsapp cta">
            <div>
               <Watsappsvg />
            </div>
            <span>WhatsApp</span>
          </a>
          <a href="tel:0502385613" target="_blank" className="call cta">
            <div>
              <Callsvg />
            </div>
            <span>Call</span>
          </a>
        </div>
      </div>
      
  )
}

export default Basket




 

    
