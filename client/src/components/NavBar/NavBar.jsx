import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../images/dog.png'
import styles from './NavBar.module.css'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../actions/actions'

export default function NavBar() {

    const dispatch = useDispatch()

    const homeHandler = () => {
        dispatch(getDogs())
    }

  return (
    <div className={styles.NabarContainer}>
        <div className={styles.Navbar}>

        <div className={styles.Navbar__Logo}>
                <NavLink to="/">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LdS8pqQpDdVnY1NmcJOGBDAe6bUAJzFRhItJcbhACWAI8g2yvtzm_0CwfIbvs2vQ5jo&usqp=CAU' alt='imagen'/>
                </NavLink>
        </div>

        <div>
        <SearchBar/>
        </div>

        <div className={styles.Navbar__Lista}>
        <ul>
                    <NavLink to="/dogs" activeClassName={styles.Active}>
                        <li>
                            <span>HOME</span>
                        </li>
                    </NavLink>
                    <NavLink to="/addDog" activeClassName={styles.Active}>
                        <li>
                            <span>CREATE DOG</span>
                        </li>
                    </NavLink>
                    <NavLink to="/addDog" activeClassName={styles.Active}>
                        <li>
                            <span>ABOUT ME</span>
                        </li>
                    </NavLink>
                    
                    <li>
                        <button className={styles.boton} onClick={homeHandler}>RESET</button>
                    </li>
                    
                </ul>
        </div>
        </div>
    </div>
  )
}
