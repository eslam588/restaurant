import React,{useState,useEffect} from 'react';
import Home from './pages/homepage/Home';
import "./App.css"
import {Routes , Route,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useTranslation} from 'react-i18next';
import Location from './pages/Location/Location';
import Persondetails from "./pages/persondetails/Persondetails"

function App() {
  
  const cartState = useSelector((state) => state.cart);
  let {showbasket} = cartState; 
  // let [lang,setLang] =useState(true)
  // let [lazylang,setLazylang]=useState(null)
  const [t,i18n] = useTranslation()


  if(i18n.language == "en"){
    document.documentElement.dir="ltr"
    // const {default:Lang}= await  import ('./components/translation/Englishlanguage')
    // setLazylang(<Lang/>)
    // setLang(true)
  }
  else if(i18n.language == "ar"){
    document.documentElement.dir="rtl"
    // const {default:Lang}= await  import ('./components/translation/Arabiclanguage')
    // setLazylang(<Lang/>)
    // setLang(false)
  }
  
  
  


  
  return (
    
    <div style={showbasket ? {marginBottom :"120px"} : {marginBottom :"60px"}}>
      <Routes>
               <Route path="/" element={<Navigate to='/en' />}/>
               <Route path='/en' element={<Home />} />
               <Route path='/ar' element={<Home />} />
               <Route path="/location" element={ <Location />} />
               <Route path="/persondetails" element={ <Persondetails />} />
      </Routes>
    </div>
  );
}

export default App;
