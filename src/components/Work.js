import React from 'react'
import classes from './style/work.module.css'
import classes2 from './style/service.module.css'
import img1 from '../img/ex4.jpg'
import img2 from '../img/work4.jpg'
import img3 from '../img/ex5.jpg'
import img4 from '../img/ex3.jpg'
import img6 from '../img/e8.jpg'
import img5 from '../img/ex7.jpg'

const Work = () => {
  return (
        <div className={classes.workSection}>
          <div className={classes2.sectionTitel}>
            <h2 className={classes.titleSecondary}>
               our work
            </h2>
         </div>
         <div  className={classes.work}>
            <div className={classes.content}>
                <div className={classes.card}>
                    <a href='https://manukahealthegypt.netlify.app/'>
                        <div className={classes.cardimg}>
                            <img src={img1}/>
                        </div>
                    </a>

                </div>
                <div className={classes.card}>
                    <a href='https://netflix-clone-2eee8.web.app/'>
                        <div className={classes.cardimg}>
                            <img src={img2}/>
                        </div>
                    </a>

                </div>
                <div className={classes.card}>
                        <div className={classes.cardimg}>
                            <img src={img3}/>
                        </div>
                </div>
                <div className={classes.card}>
                        <div className={classes.cardimg}>
                            <img src={img4}/>
                        </div>
                </div>
                <div className={classes.card}>
                        <div className={classes.cardimg}>
                            <img src={img5}/>
                        </div>
                </div>
                <div className={classes.card}>
                        <div className={classes.cardimg}>
                            <img src={img6}/>
                        </div>
                </div>
            </div>
         </div>
         <div className={classes.bannerFade}></div>
    </div>
  )
}

export default Work