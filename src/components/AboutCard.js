import React from 'react'
import classes from './style/aboutCard.module.css'
const AboutCard = (props) => {
  return (
    <div className={classes.card}>
        <div className={classes.imgContainer}>
            <img src={props.img}/> 
        </div>
        <div className={classes.infoContainer}>
            <h1>{props.name}</h1>
            <h2>{props.position}</h2>
        </div>
    </div>
  )
}

export default AboutCard