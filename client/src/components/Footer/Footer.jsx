import React from 'react'
import styles from './Footer.module.css'
// import {DiReact, DiJavascript1, DiPostgresql, DiCss3Full} from 'react-icons/di'
import { SiReact, SiRedux, SiJavascript, SiPostgresql, SiCss3 } from 'react-icons/si'

export default function Footer() {
  return (
    <div className={styles.footer_container}>
          <h3>About the project</h3>
        <p>My first Full Stack project about a dog app. You can see the technologies.</p>
      <SiReact/>
      <SiRedux/>
      <SiJavascript/>
      <SiPostgresql/>
      <SiCss3/>
    </div>
  )
}
