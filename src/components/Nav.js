import React from 'react'
import classes from './style/nav.module.css'
import img from '../img/logo.jpg'
import{NavLink , Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

const Nav = () => {
    const [active,setActive] = useState("sleepOptions")

    const navHandeler =()=>{
        if(active==='optionsActive'){
            setActive('sleepOptions');
        }else{
            setActive('optionsActive')
        }
    }
  return (

    <nav className={classes.nav}>
        <div className={classes.logoContainer}>
            
            <div className={classes.imgContainer}>
            <Link to = '/' >
            <img src={img} alt="logo"/>
            </Link>
               
            </div>
            
            <h1>montu</h1>
            
        </div>    


        <div className={classes.navOptions}>
            <div className={`${classes[active]} ${classes.options}`}>
            <ul className={classes.links}>
                <li onClick={navHandeler}>
                <NavLink activeClassName={classes.activeLink} to="/" exact> Home</NavLink>
                </li>
                <li onClick={navHandeler}>
                <NavLink  activeClassName={classes.activeLink} to="/about"> Our Team</NavLink>
                </li>
                <li onClick={navHandeler}>
                <NavLink  activeClassName={classes.activeLink} to="/contact"> contact us</NavLink>
                </li>
            </ul>
            </div>
           
        </div> 

        <div className={classes.bur} onClick={navHandeler}>
            {active==='sleepOptions'? <MenuIcon style={{ fontSize: 30 }} /> : <ClearIcon style={{ fontSize: 30 }}/>}
                
        </div>
    </nav>
  )
}

export default Nav