import React from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Layout from '../components/Layout'
import Service from '../components/Service'
import Work from '../components/Work'
import { useRef } from 'react'
const Home = () => {
  const work = useRef(null); 
  const clickHandeler = ()=>{
    window.scrollTo({
      top: work.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div>
        <Layout clickHandeler= {clickHandeler}/>
        <Service/>
        <About/>
        <Features/>
        <div ref={work}>
        <Work/>
        </div>
        
    </div>
  )
}

export default Home
