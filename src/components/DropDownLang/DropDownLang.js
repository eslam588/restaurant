import React,{useState} from 'react'
import { Grid, Dropdown} from "@nextui-org/react";
import { Link} from 'react-router-dom';
import { useTranslation} from 'react-i18next';

const DropDownLang = ({langs,currentLanguage}) => {

const {i18n}  = useTranslation()
const [selectedColor, setSelectedColor] = React.useState("default");
const lang = i18n.language

return (
    <>
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
      
    </> 
  )
}

export default DropDownLang
