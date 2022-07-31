import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getByName, getDogs } from '../../actions/actions';
import styles from './SearchBar.module.css'

export default function SearchBar() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const onClickHandler = () => {
        dispatch(getByName(input))
    }

    const homeHandler = () => {
        dispatch(getDogs())
    }

  return (
    <div className={styles.searchBar}>
        <button className={styles.button1} onClick={() => onClickHandler()}>Search</button>
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
