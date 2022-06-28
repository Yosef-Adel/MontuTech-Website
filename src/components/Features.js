import React from 'react'
import classes from './style/feature.module.css'
import classes2 from './style/service.module.css'
import img1 from '../img/ex1.jpg'
import img2 from '../img/ex2.jpg'
import img3 from '../img/ex3.jpg'

const Features = () => {
  return (
    <div   className={classes.features}>
      
        <div className={classes2.sectionTitel}>
            <h2 className={classes2.titleSecondary}>
               features
            </h2>
         </div>
       
       <div className={classes.row}>
            <div className={classes.col}>
                <h3 className={classes.headinngTertiary}>Built to catch your eye</h3>
                <p className={classes.paragraph}>
                The screen animation, layouts and colors are all synchronized to let you have the best experience
                </p>
                <h3 className={classes.headinngTertiary}>The most(fastest?) reactive websites</h3>
                <p className={classes.paragraph}>
                Websites are designed to be very up to date, with the most advanced techniques to adjust the rendering time
                </p>

            </div>
            <div className={classes.col}>
                
                <div className={classes.composition}>
                    <img src={img1} className={`${classes.compositionphoto} ${classes.compositionphotop1}`}/>
                    <img src={img2} className={`${classes.compositionphoto} ${classes.compositionphotop2}`}/>
                    <img src={img3} className={`${classes.compositionphoto} ${classes.compositionphotop3}`}/>


                
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default Features