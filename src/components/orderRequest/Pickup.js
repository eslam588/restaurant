import React from 'react'
import website from "../../website.json";
import { useTranslation} from 'react-i18next';
import { useNavigate } from 'react-router-dom';



const Pickup = ({setActivePage,activepage}) => {
  
  const {i18n}  = useTranslation()
  const lang = i18n.language 
  const navigate = useNavigate();
  let selectbranch = (value) => {
    setActivePage(true)
    sessionStorage.setItem("branch",JSON.stringify(value));
  }

  return (
    <div className='pickup-comp'>
      <h2>pickup from?</h2>
      {
        website.branches.map((branch) => <p className='pichup-branch'onClick={()=>selectbranch(branch[lang])}><img src='/images/right-arrow-next-svgrepo-com.svg'/><span>{branch[lang]}</span></p>)
      }
    </div>
  )
}

export default Pickup
