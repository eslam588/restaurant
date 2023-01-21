import React,{useState} from 'react'
import "./orderrequest.css"
import { useTranslation} from 'react-i18next';
import { Link} from 'react-router-dom';
import Delivery from '../../components/orderRequest/Delivery';
import Pickup from '../../components/orderRequest/Pickup';
import { Modal, useModal} from "@nextui-org/react";
import Location from './../../components/Location/Location';
import DropDownLang from '../../components/DropDownLang/DropDownLang';


const OrderRequest = ({langs,currentLanguage,setActivePage,activepage}) => {

const {i18n}  = useTranslation()
const lang = i18n.language
const [show,setShow]=useState(false)
const [active, setActive] = useState(null)
const [showdeliveryerr,setShowDeliveryErr]=useState(false)

let submitdelivery = () => {
    setShow(true)
    setActive(true)
    setVisible(true)
}

let submitpickup = () => {
    setShow(true)
    setActive(false)  
    setShowDeliveryErr(false) 
}

const { setVisible, bindings } = useModal();


  return (
    <div className='order-request'>
        <div className='container'>
            <div className='order-header'>
                <DropDownLang langs={langs} currentLanguage={currentLanguage}  />  
                <img src='https://demo.zmatjar.com/files/zmatjar-logo.jpg' style={{width:"75px" ,height:"75px"}}/>         
            </div>
            <h1>lets go </h1>
            <p>Our  platform is built to help you to request order!</p>
            <div className='orders-buttons'>
                <button className={`delivery ${show && active && "btn-active"}`} onClick={submitdelivery}>Delivery</button>
                <button className={`pickup ${show && !active && "btn-active"}`} onClick={submitpickup}>Pickup</button>
            </div>
            <div className='order-options'>
              {  
                show && (  
                     active  ? "" :<Pickup setActivePage={setActivePage} activepage={activepage}/>       
                )

              }
            </div>
            {
              showdeliveryerr && <p className='no-delivery'>Sorry, we don't delivery to this area!</p>
            }
            <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
             >
            <Location setVisiblee={setVisible} setActivePage={setActivePage} activepage={activepage} setShowDeliveryErr={setShowDeliveryErr} />
           </Modal>
              
        </div>
      
    </div>
  )
}

export default OrderRequest
