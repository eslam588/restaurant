import React,{useState,useEffect} from 'react'
import website from "../../website.json"
import { useTranslation,Trans } from 'react-i18next';

const LandingPage = () => {

  const [t,i18n] = useTranslation()
  const [websitnamenum , setWebsiteNameNum] =useState(0)
  const [websitnamelang , setWebsiteNamelang] =useState("en")
  
  useEffect(()=> {
    determineLanguage()
  },[i18n.language])
  const determineLanguage = () =>{
    if(i18n.language == 'en'){
      setWebsiteNameNum(0)
      setWebsiteNamelang("en")
    }
    else{
      setWebsiteNameNum(1)
      setWebsiteNamelang("ar")
    }

  }
 
  return (
    <>
    <div className="outlet_cover" style={{backgroundImage: `url(${website.image})`}}></div>
        <div className="outlet_info shadow bg-white border-b-2 border-black-100 p-4">
          <div className="outlet">
            <div className="outletLogo pr-4 rounded-md">
              <img src={website.logo} className="rounded-md" width="64px"  height="58px"  />
            </div>
            <div className="outletDetails">
              <h1 className="outletName pt-4">{website.name[websitnamenum][websitnamelang]}</h1>
              <small className="outletCategory text-black-300 text-xs line-normal block">
                {
                  website.business_types.map(business => (<span key={business[websitnamenum][websitnamelang]} >{business[websitnamenum][websitnamelang]} . </span>))
                }
              </small>
            </div>
          </div>  
          <p className="outletAddress pt-4">
              {website.address[websitnamenum][websitnamelang]}
          </p>
        </div>
    </>
  )
}

export default LandingPage
