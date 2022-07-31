import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../images/dog.png'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.NabarContainer}>
        <div className={styles.Navbar}>

        <div className={styles.Navbar__Logo}>
                <NavLink to="/">
                    <img src={Logo} alt='imagen'/>
                </NavLink>
        </div>

        <div>
        <SearchBar/>
        </div>

        <div className={styles.Navbar__Lista}>
        <ul>
                    <NavLink to="/dogs" activeClassName={styles.Active}>
                        <li>
                            <span>INICIO</span>
                        </li>
                    </NavLink>
                    <NavLink to="/addDog" activeClassName={styles.Active}>
                        <li>
                            <span>CREAR DOG</span>
                        </li>
                    </NavLink>
                </ul>
        </div>
        </div>
    </div>
  )
}
