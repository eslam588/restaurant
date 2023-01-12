import React from 'react'
import "./landingpage.css"
import website from "../../website.json"
import { useTranslation} from 'react-i18next';


const LandingPage = () => {

  const [t,i18n] = useTranslation()
  const lang = i18n.language
  
   
  return (
    <>
    <div className="outlet_cover" style={{backgroundImage: `url(${website.image})`}}></div>
        <div className="outlet_info shadow bg-white border-b-2 border-black-100 p-4">
          <div className="outlet">
            <div className="outletLogo rounded-md">
              <img src={website.logo} className="rounded-md" width="64px"  height="58px"  />
            </div>
            <div className="outletDetails">
              <h1 className="outletName pt-4">{website.name[lang]}</h1>
              <small className="outletCategory text-black-300 text-xs line-normal block">
                {
                  website.business_types.map((business,i) => {
                    return <span className={business[i]}>
                      {business[lang]}
                      {
                        website.business_types.indexOf(business) == website.business_types.length-1 ? "" : " . "
                      }
                     </span>
                  })
                }
              </small>
            </div>
          </div>  
          <p className="outletAddress pt-4">
              {website.address[lang]}
          </p>
        </div>
    </>
  )
}

export default LandingPage
