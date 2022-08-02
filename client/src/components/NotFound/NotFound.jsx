import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
return (
  <div>
  <div className={styles.main}>
      <h1>404</h1>
      <h2> Oh! The page cannot be found...</h2>
      <h3>The link might be incorect...</h3>
      <h4>or the page was deleted</h4>
        <Link to='/'><button>go back</button> </Link>
    </div>
</div>
)
}
