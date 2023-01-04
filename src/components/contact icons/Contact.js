import React,{useState,useEffect} from 'react'
import website from "../../website.json"
import { Callsvg,Locationsvg,Watsappsvg} from './../SVG/IconSvg';
import { useTranslation,Trans } from 'react-i18next';

const Contact = () => {
 
    const [t,i18n] = useTranslation()

  
 return (
        <div className ="contacts bg-white shadow py-3">
                <div className="contacts-container">
                    <a href={website.location} rel="noreferrer" target="_blank" className="location cta">
                        <div>
                            <Locationsvg  />
                        </div>
                        <span>{t('location')}</span>
                    </a>
                    <a href={website.whatsapp} target="_blank" rel="noreferrer" className="location cta">
                        <div>
                            <Watsappsvg  />
                        </div>
                        <span>{t('WhatsApp')}</span>
                    </a>
                    <a href={website.call} target="_blank" rel="noreferrer" className="location cta">
                        <div>
                            <Callsvg  />
                        </div>
                        <span>{t('Call')}</span>
                    </a>
                </div>
            </div>     
  )
}

export default Contact
