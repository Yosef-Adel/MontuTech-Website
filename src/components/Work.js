import React from 'react'
import classes from './style/work.module.css'
import classes2 from './style/service.module.css'
import img1 from '../img/ex4.jpg'
import img2 from '../img/work4.jpg'
import img3 from '../img/ex5.jpg'
import img4 from '../img/ex3.jpg'
import img5 from '../img/ex7.jpg'
import img7 from '../img/img7.png'


const Work = () => {
    const clickHandeler = ()=>{
        alert("This Website is'nt currently deployed")
    }
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
                    <a href='https://clothes-store-omega.vercel.app/'>
                        <div className={classes.cardimg}>
                            <img src={img7} alt = 'https://clothes-store-omega.vercel.app/'/>
                        </div>
                    </a>

                </div>

                <div className={classes.card}>
                    <a href='https://manukahealthegypt.netlify.app/'>
                        <div className={classes.cardimg}>
                            <img src={img1} alt = 'https://manukahealthegypt.netlify.app/'/>
                        </div>
                    </a>

                </div>
              
                <div className={classes.card}>
                    <a href='https://netflix-clone-2eee8.web.app/'>
                        <div className={classes.cardimg}>
                            <img src={img2} alt = 'https://netflix-clone-2eee8.web.app/'/>
                        </div>
                    </a>

                </div>
                <div className={classes.card} onClick={clickHandeler}>
                        <div className={classes.cardimg}>
                            <img src={img3} alt = 'website'/>
                        </div>
                </div>
                <div className={classes.card} onClick={clickHandeler}>
                        <div className={classes.cardimg}>
                            <img src={img4} alt = 'website'/>
                        </div>
                </div>
                <div className={classes.card} onClick={clickHandeler}>
                        <div className={classes.cardimg}>
                            <img src={img5} alt = 'website'/>
                        </div>
                </div>
               
            </div>
         </div>
         <div className={classes.bannerFade}></div>
    </div>
  )
}

export default Work