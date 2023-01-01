import React,{useState} from 'react'
import {CloseSvg,IconGridSvg,IconListSvg,SearchSvg} from "../SVG/NavigatorSvg"

const Navigatorbar = ({toggleShow,setToggleShow}) => {
   const [showsearch, setShowSearch]=useState(false)
   

  return (
    <div className="navigation-bar shadow">
            {
               showsearch ? (
                  <div className="filter  bg-white "><input type="text" id="product-filter"/>
                     <button className="close-icon" onClick={() => setShowSearch(false)}>
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
                        <a href="#category-3" className="nav-category_link">
                        <span className="nav-category_label">Hot Drinks</span>
                        </a>
                        <a href="#category-4" className="nav-category_link">
                        <span className="nav-category_label">Fresh Juice Medium</span>
                        </a>
                        <a href="#category-1" className="nav-category_link">
                        <span className="nav-category_label">Juicy Deals!</span>
                        </a>
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
