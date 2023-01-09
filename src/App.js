import React,{useEffect} from 'react';
import Home from './pages/homepage/Home';
import {Routes , Route,Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation} from 'react-i18next';
import Location from './pages/Location/Location';
import Persondetails from "./pages/persondetails/Persondetails"
import cookies from "js-cookie"
import "./styles/reset.css";
import "./styles/appltr.css"
import website from "./website.json"
import { detectionLang } from './redux/productSlice';


function App() {
  
  const cartState = useSelector((state) => state.cart);
  let {showbasket} = cartState; 
  const [t,i18n] = useTranslation()
  let languages= website.languages
  const dispatch= useDispatch()


  const currentLanguageCode = cookies.get('i18next') || "en"

  const currentLanguage = website.languages.find(l => l.code == currentLanguageCode)
 
   useEffect(() => {
    if (currentLanguage.code === "ar") {
        document.body.dir = 'rtl'
    }
    else{
        document.body.dir = 'ltr'
    }
    
    document.getElementsByTagName("html")[0].setAttribute("lang",currentLanguage.code)
    dispatch(detectionLang(currentLanguage.code))
  },[currentLanguage.code])
 

  return (
    
    
    <div style={showbasket ? {marginBottom :"120px"} : {marginBottom :"60px"}}>
      <Routes>
               <Route exact path="/" element={ <Navigate to={`/${currentLanguage.code}`} />}/>
               <Route  path={`/${currentLanguage.code}`} element={<Home langs={languages} currentLanguage={currentLanguage}  />} />
               <Route path="/location" element={ <Location />} />
               <Route path="/persondetails" element={ <Persondetails />} />
      </Routes>
    </div>
  );
}

export default App;
