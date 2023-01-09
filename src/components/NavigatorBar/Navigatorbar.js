import React,{useState,useEffect} from 'react'
import {CloseSvg,IconGridSvg,IconListSvg,SearchSvg} from "../SVG/NavigatorSvg"
import {useDispatch} from 'react-redux';
import {filterbyName} from "../../redux/productSlice"
import categories from "../../Categories.json"
import { useTranslation} from 'react-i18next';




const Navigatorbar = ({toggleShow,setToggleShow}) => {

   const [showsearch, setShowSearch]=useState(false)
   const[keyword,setKeyword]=useState("")
    const dispatch = useDispatch();
    const [t,i18n] = useTranslation()
    const lang = i18n.language
   
   useEffect(()=> {
       dispatch(filterbyName(keyword))
   },[keyword])

   let closeSearch = () => {
      setShowSearch(false)
      setKeyword("")
   }

   const [isActive, setIsActive] = useState(false);

   let handleItemClick=(index) =>{
      setIsActive(index);
  }
   



  return (
    <div className="navigation-bar shadow">
            {
               showsearch ? (
                  <div className="filter  bg-white">
                     <input type="text" id="product-filter" onKeyUp={(e) => setKeyword(e.target.value)}/>
                     <button className="close-icon" onClick={closeSearch}>
                        <CloseSvg  />
                     </button>
                 </div>

               ):(
                  <nav className="nav-category px-2 active">
                     <button className="grid mx-1 ">
                        <IconGridSvg className={toggleShow? "icon-grid atom-icon nav-category_icon active":"icon-grid atom-icon nav-category_icon" }
                           onClick={()=> setToggleShow(true)}  />
                     </button>
                     <button className="list mx-2 ">
                        <IconListSvg className={toggleShow? "icon-grid atom-icon nav-category_icon":"icon-grid atom-icon nav-category_icon active" }
                            onClick={()=> setToggleShow(false)} />
                     </button>
                     <div className="flex overflow-auto w-full">
                        {
                           categories.map((cat,i)=> {
                              return (
                                 <a href={`#${cat._id}`} className={`nav-category_link ${isActive === i ? "active" : "" }`} onClick={()=>handleItemClick(i)}>
                                   <span className="nav-category_label">{cat.type[lang]}</span>
                                 </a>
                              )
                           })
                        }
                     </div>
                     <button className="search-icon" onClick={()=>setShowSearch(true)}>
                        <SearchSvg  />
                     </button>
                  </nav>
               )
            }
       </div>
  )
}

export default Navigatorbar
