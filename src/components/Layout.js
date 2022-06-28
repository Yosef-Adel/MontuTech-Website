import React from 'react'
import classes from './style/layout.module.css'
import { Link } from 'react-router-dom'
const Layout = (props) => {
 
  return (
    <div className={classes.fix}>
   
    <div className={classes.layout}>
       <div className={classes.textBox}>
       <h1 className={classes.layoutTitle}>
            <span className={classes.layoutTitleMain}>montu</span>
            <span className={classes.layoutTitlesub}>Create your professional website or online store</span>

        </h1>
        <Link to="#" className={classes.btn} onClick={props.clickHandeler}>discover our work</Link>
       </div>
    </div>
    </div>
  )
}

export default Layout
