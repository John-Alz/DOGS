import React from 'react'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.page}>
  <div className={styles.card}>
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3>PI dogs.</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Let's discover <br /> the dogs.</h1>
          <p>Dogs are not everything in our <br /> lives but they make it complete.</p>
          <a href="/dogs">Let's go !</a>
        </div>  
      </div>
    </div>
    <div className={styles.photo}></div>
  </div>
</div>
  )
}