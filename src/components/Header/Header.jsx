import React, {useState} from 'react'
import css from './Header.module.scss'
import {BiPhoneCall, BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {headerVariants, getMenuStyles} from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import { NavLink } from 'react-router-dom'

const values = [
    { id : 1, text : "Home", link: "/"},
    { id : 2, text : "Courses", link: "/courses"},
    { id : 3, text : "Admission", link: "/admission"},
    { id : 5, text : "Students", link: "/student"},
    { id : 6, text : "About us", link: "/about"},
    { id : 7, text : "Contact us", link: "/contact"},
  ]


const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const headerShadow = useHeaderShadow()

    return (
        <motion.div 
          initial="hidden"
          whileInView="show"
          variants = {headerVariants}
          viewport = {{once: false, amount: 0.25}}
          className={`paddings ${css.wrapper}`}
          style={{boxShadow: headerShadow}}
        >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                     {/* Aeroland Aviation Associate */}
                     <a href='/'><img src="./aaa-logo.png" alt='' width={250}/></a>
                </div> 

                <ul
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}
                >
          
                    {values.map((value, i) => (
                         <>
                         
                        <li key = {i} >
                             <NavLink to={value.link} style={({ isActive }) => ({
                               backgroundColor: isActive &&  "#F26440",
                               textDecoration:"none",
                               display:"flex",
                               alignItems:"center",
                               justifyContent:"center",
                               width:"100%",
                               height:"100%",
                               borderRadius:"5px",
                               padding:"5px",
                               color: isActive ? "white" : "green"
                             })}>
                             {/* <value.iconName className='icon'/> */}
                             <span>{value.text}</span>
                             </NavLink>
                            
                           </li>
                        </>
                      
                      )
                     )
                  
                  }
                     <li className={`flexCenter ${css.phone}`}>
                        <p>+234 8168879084</p>
                        <BiPhoneCall size={"40px"} />
                    </li> 
                   </ul>
                {/* <ul 
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Admission</a></li>
                    <li><a href="">Students</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+234 8168879084</p>
                        <BiPhoneCall size={"40px"} />
                    </li>

                </ul> */}

                <div className={css.menuIcon}
                    onClick={()=>setMenuOpened(prev=>!prev)}
                >

                    <BiMenuAltRight size={30}/>
                </div>

            </div>     
        </motion.div>
    )
}

export default Header;