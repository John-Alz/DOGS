import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={styles.bodyContainer}>
        <div className={styles.about}>
            <Link className={styles.linkAbout} to='/dogs'>X</Link>
            <h3>JJ</h3>
            <h2>contact</h2>
            <h1>Hello, my name is John, <br /> I am a <u>web developer</u> passionate about what I do. 
            </h1>
            <Link><h4>jairoanngelll@gmail.com</h4></Link>
            <h4>github</h4>
            <h4>Linkedin</h4>
        </div>
    </div>
  )
}
