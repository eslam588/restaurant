import React from 'react'
import { useTranslation} from 'react-i18next';

const Footer = () => {

  const [t,i18n]  = useTranslation()
  
  return (

    <>
         <div className="p-4 text-sm line-normal bg-white">
              {t('Vat')}
          </div>
          <div className="powered-by">
              <a href="https://www.zmatjar.com/?utm_content=powered-by&utm_source=business-storefront&utm_medium=business-partner&utm_campaign=demo" target="_blank" rel="noopener noreferrer" className="powered-by_link">
              <span className="powered-by_text">{t('Powerby')}</span>
              </a>
          </div>
    </>
  )
}

export default Footer
