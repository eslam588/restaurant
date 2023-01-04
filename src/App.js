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
  const [t,i18n] = useTranslation()
  document.documentElement.lang = i18n.language
  if(i18n.language == "en"){
    document.documentElement.dir="ltr"
  }
  else if(i18n.language == "ar"){
    document.documentElement.dir="rtl"
  }
  

  // const aaaa =() => {
  //   if(document.documentElement.dir="ltr"){
  //     import './indexltr.css'
  //   }

  //  else{
  //     import './indexrtl.css'
  //  }

  // }
    
  
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
