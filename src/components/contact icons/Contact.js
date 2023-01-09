import React from 'react'
import website from "../../website.json"
import { Callsvg,Locationsvg,Watsappsvg} from './../SVG/IconSvg';
import { t} from 'i18next';
import "./contact.css"


const Contact = () => {
 

 return (
        
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
  )
}

export default Contact
