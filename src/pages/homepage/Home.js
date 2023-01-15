import React,{useState,useEffect}from 'react'
import Contact from '../../components/contact icons/Contact'
import Mostselling from './../../components/mostselling/Mostselling';
import ProductsCategory from '../../components/productscategory/ProductsCategory';
import Offers from './../../components/offer/Offers';
import Navigatorbar from "./../../components/NavigatorBar/Navigatorbar"
import LandingPage from '../../components/Landingpage/LandingPage';
import Basket from '../../components/Basket/Basket';
import {useSelector} from 'react-redux';
import { useTranslation} from 'react-i18next';
import { Link} from 'react-router-dom';
import categories from "../../Categories.json"
import allproducts from "../../product.json"
import Footer from '../../components/footer/Footer';
import { Grid, Dropdown, Radio } from "@nextui-org/react";
import location from "../../location.json"



const Home = ({langs,currentLanguage}) => {


  const cartState = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.product);
  let filteredproucts = productState.filteredproductbyname
  const {i18n}  = useTranslation()

  let {showbasket} = cartState; 
  const [toggleShow , setToggleShow] = useState(false);
  const [position,setPosition] = useState([]);
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [areaname , setAreaName]= useState("")
  const lang = i18n.language
 
  // get coordinates for user ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
  }
   
  function showPosition(position) {
      setPosition([position.coords.latitude,position.coords.longitude])
  }

  useEffect(() => {
    getLocation()
  },[])
   
  // check coordinates in polygon or no ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

  let contains =(point,location,polygon) => {
    var len = polygon.length
    let polyname = ""
    if(polygon[0] != polygon[len-1])
        polygon[len] = polygon[0];
        let j = 0;
        let exist = false;
        let x = point[0];
        let y = point[1];
        for (let i = 0; i < len; i++)
        {
            j++;
            if (j == len)
            {
                j = 0;
            }
            if (((polygon[i][0] < y) && (polygon[j][0] >= y)) || ((polygon[j][0] < y) && (polygon[i][0] >=
                y)))
            {
                if (polygon[i][1] + (y - polygon[i][0]) / (polygon[j][0] - polygon[i][0]) * (polygon[j][1] -
                  polygon[i][1]) < x)
                {
                    exist = !exist;
                }
            }
        }
        if(exist){
          polyname=location.name
          setAreaName(polyname)
        }
  }

  // convert string coordinates to array of coordinates ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

 let  getarraypolygon = (location) => {
    let coor = location.coords 
    let coord = coor.split(",");
    let newarray = []
    coord.map(coor => {
      let coo = coor.split(" ").map(Number)
      newarray.push(coo)
    }) 
    return newarray
  }


 // get areaname if found ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

  let getAreaName = (location,position) => {
          let result=""
          location.map(loc => {
             let newcoords = getarraypolygon(loc)
             contains(position,loc,newcoords)
          })
  }

  useEffect(() => {
    if(position.length > 0){
      getAreaName(location,position)
    } 
  },[position])

  
  console.log(areaname);

  return (
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas> 
        <div className="container">  
          {
            langs.length > 2 ? (
              
                  <Grid.Container gap={1.5} justify="flex-start">
                    <Grid xs={12}>
                      <Grid>
                        <Dropdown>
                          <Dropdown.Button color={selectedColor}>
                              {currentLanguage.name}
                          </Dropdown.Button>
                          <Dropdown.Menu
                            color={selectedColor}
                            variant="shadow"
                            aria-label="Actions"
                          >
                            {
                              langs.map((lang,i)=> {
                                return (
                                      <Dropdown.Item key={i} className={lang.name == currentLanguage.name ? "nextui-c-kpzpMf-hXNyUb-cv" :""}  > 
                                         <Link to={`/${lang.code}`} onClick={()=> i18n.changeLanguage(lang.code)}>
                                          <p className='dropdown-p' >{lang.name}</p>
                                        </Link>
                                        
                                      </Dropdown.Item>
                                )
                              })
                            }
                          </Dropdown.Menu>
                        </Dropdown>
                      </Grid>
                    </Grid>
                  </Grid.Container>
            ):(
             <ul className="links">
            {
              langs.map((lag,i)=> {
                return(
                  <li key={i} className={lag.code !== currentLanguage.code ? "" : "is-active"}  >
                   <Link to={`/${lag.code}`} onClick={()=> i18n.changeLanguage(lag.code)}  className={lag.code !== currentLanguage.code ? "language-link" : "language-link session-active is-active" }
                      >{lag.name}</Link>
                 </li>
                )
                
              })
            }
          </ul>
          )
          }
          <LandingPage/>
          <div className ="contacts bg-white shadow py-3">
           <Contact />
          </div>
          <Basket showbasket={showbasket} />
          <Offers />
          <Navigatorbar toggleShow={toggleShow} setToggleShow={setToggleShow} />
          {
            productState.showmostselling && (
              <>
                 <Mostselling />
                 {
                  categories.map(cat => {
                      let filteredall= allproducts.filter(pro => {
                        if(Array.isArray(pro.category_id)){
                             return pro.category_id.find(id => id === cat._id)  
                        }
                        else{
                           if(pro.category_id === cat._id){
                            return (pro)
                           }
                        }
                      })
                      return (
                         <ProductsCategory toggleShow={toggleShow} filteredall={filteredall} catname={cat} />
                      ) 
                     }
                   )
                 }
              </>
            )
          }
          {
            filteredproucts?.length > 0 ? <ProductsCategory filteredproucts={filteredproucts} toggleShow={toggleShow} />: ""
          }
          <Footer />
      </div>
    </div>

  )
}

export default Home



















// function contains(point,location,polygon){
//   let poly = polygon.coords
//   var len = poly.length
//   let polyname = ""
//   if(poly[0] != poly[len-1])
//       poly[len] = poly[0];
//       let j = 0;
//       let exist = false;
//       let x = point[0];
//       let y = point[1];
//       for (let i = 0; i < len; i++)
//       {
//           j++;
//           if (j == len)
//           {
//               j = 0;
//           }
//           if (((poly[i][0] < y) && (poly[j][0] >= y)) || ((poly[j][0] < y) && (poly[i][0] >=
//               y)))
//           {
//               if (poly[i][1] + (y - poly[i][0]) / (poly[j][0] - poly[i][0]) * (poly[j][1] -
//                 poly[i][1]) < x)
//               {
//                   exist = !exist;
//               }
//           }
//       }
//       if(exist){
//         polyname=polygon.name
//         return polyname
//       }
// }

// let  getarraypolygon = (location) => {
//   let coor = location.coords 
//   let coord = coor.split(",");
//   let newarray = []
//   coord.map(coor => {
//     let coo = coor.split(" ").map(Number)
//     newarray.push(coo)
//   }) 
//   return newarray
// }



// let getAreaName = (location,position) => {
//         let result=""
//         location.map(loc => {
//            let newcoords = getarraypolygon(loc)
//            result = contains(position,loc,newcoords)
//            if(result) {
//             setAreaName(result)
//            }
//         })
// }

// useEffect(() => {
//   getLocation()
// },[])


// useEffect(() => {
//   if(position.length > 0){
//     getAreaName(location,position)
//   } 
// },[position])

