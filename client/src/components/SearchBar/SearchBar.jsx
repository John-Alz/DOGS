import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getByName, getDogs } from '../../actions/actions';
import styles from './SearchBar.module.css'

export default function SearchBar() {

    const [dogs, setDogs] = useState("");
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setDogs(e.target.value);
    }

    const onClickHandler = (e) => {
        e.preventDefault();
            dispatch(getByName(dogs));
            setDogs("");
    }

    const homeHandler = () => {
        dispatch(getDogs())
    }

  return (
    <div className={styles.searchBar}>
        <button className={styles.button1} onClick={(e) => onClickHandler(e)} >Search</button>
        <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search by name"
            name='input'
            autoComplete='off'
            onChange={(e) => inputHandler(e)}
        />
    <div>
        <button className={styles.button2} onClick={() => homeHandler()}>Reset</button>
        
    </div>
    </div>
  )
}
