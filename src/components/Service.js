import React from 'react'
import Card from './Card'
import classes from './style/service.module.css'
const Service = () => {
  return (
    <div className={classes.serviceSection}>
       <div className={classes.sectionTitel}>
            <h2 className={classes.titleSecondary}>
                Our services
            </h2>
       </div>

       <div className={classes.row}>

       <Card/>
        
       </div>
    </div>
  )
}

export default Service