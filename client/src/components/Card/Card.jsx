import React from "react";
import styles from './Card.module.css'

export default function Card(props) {
    return(
        <div className={styles.Card}>
                <img className={styles.img} src={props.image} alt="Dog" />
                <h3>{props.name}</h3>
                <h4>Temperaments:</h4>
                <p>{props.temperament}</p>
                <h4>Weight: {props.weight} Pounds</h4>
        </div>
    )
}