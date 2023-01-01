import Home from './pages/homepage/Home';
import "./App.css"
import {Routes , Route} from 'react-router-dom';
import Cart from "./pages/cart/Cart"
import {useSelector,useDispatch} from 'react-redux';
import { useTranslation,Trans } from 'react-i18next';


function App() {
  const cartState = useSelector((state) => state.cart);
  let {showbasket} = cartState; 

  const [t] =useTranslation()
  return (

    <div style={showbasket ? {marginBottom :"120px"} : {marginBottom :"60px"}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
