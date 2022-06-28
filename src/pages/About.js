import React from 'react'
import AboutCard from '../components/AboutCard'
import classes from './style/about.module.css'
import img from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <AboutCard name = 'Yosef Adel' position = 'Full Stack Developer' img = {img} />
      <AboutCard name = 'Omar Alaa' position = 'Front end Developer' img = {img2} />
      <AboutCard name = 'Oamr Nashat' position = 'Devops' img = {img3} />
      <AboutCard name = 'Abdelrahman Ezzat' position = 'back end Developer' img = {img4} />
      <AboutCard name = 'Farah Mohammed' position = 'back end Developer' img = {img5} />




    </div>
  )
}

export default About
