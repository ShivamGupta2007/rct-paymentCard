import React from 'react'
import CaseStudy from './CaseStudy'
import Date from './Date'
import Heading from './Heading'
import Logo from './Logo'
import styles from "./parent.module.css"
import Subheading from "./Subheading"
import Device from "./Device"

function ParentCard() {
  const imgs = "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"

 const date = "28/10/2022"
 const head = "Amazon Gift"
 const subHead = "Pay"
 const device = "DeskTop - Mobile"
  return (
    <div className={styles.bodyCol} >
      <div className={styles.topCont}>
        <div className={styles.dateCont}>
      <Date date={date}/>
      <CaseStudy/>
      </div > 
     <Logo imgs={imgs} style={{marginTop:"27px"}}/>
     </div>
     <Heading head={head}/>
     <Subheading subHead={subHead}/>
     <Device device={device}/>
    </div>
  )
}

export default ParentCard
