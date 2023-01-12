import React,{useEffect,useState} from 'react';
import Home from './pages/homepage/Home';
import {Routes , Route,Navigate, useLocation,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation} from 'react-i18next';
import cookies from "js-cookie"
import "./styles/reset.css";
import "./styles/appltr.css"
import website from "./website.json"
import { detectionLang } from './redux/productSlice';
import NotFoundpage from './pages/Notfoundpage/NotFoundpage';




function App() {
  
  const cartState = useSelector((state) => state.cart);
  const [locationpath , setLocationPath] = useState("")
  let {showbasket} = cartState; 
  const [t,i18n] = useTranslation()
  let languages= website.languages
  const dispatch= useDispatch()
  const location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    let pathname = location?.pathname
    let pathn = pathname.split('/')[1]
    setLocationPath(pathn)
  }, [location])



  let currentLanguageCode = cookies.get('i18next') || "en"
  if(locationpath){
    currentLanguageCode = locationpath
  }
  
   const currentLanguage = website.languages.find(l => l.code === currentLanguageCode)
   const [nolang , setNoLang] = useState(true)
   if(!currentLanguage){
      setNoLang(false)
   }

   useEffect(() => {
    if(nolang){
      if (currentLanguage.code === "ar") {
        document.body.dir = 'rtl'
      }
      else{
          document.body.dir = 'ltr'
      }
      document.getElementsByTagName("html")[0].setAttribute("lang",currentLanguage?.code)
      dispatch(detectionLang(currentLanguage?.code))
      i18n.changeLanguage(currentLanguage?.code)
      document.title = website.title[currentLanguage?.code]
    }

  },[currentLanguage?.code])
 
  return (
    
    
    <div style={showbasket ? {marginBottom :"120px"} : {marginBottom :"60px"}}>
      <Routes>
              <Route path="/" element={ <Navigate to={`/${currentLanguage.code}`} />}/>
              <Route path={`/${currentLanguage.code}`} element={<Home langs={languages} currentLanguage={currentLanguage} />} />
              <Route path={`/${currentLanguage.code}/:products`} element={<Home langs={languages} 
              currentLanguage={currentLanguage} />} />
              <Route  path="*" element={ <NotFoundpage /> } />
      </Routes>
    </div>
  );
}

export default App;
