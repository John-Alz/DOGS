import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getDetail } from '../../actions/actions';
import styles from './DogDetail.module.css'

export default function DogId({props}) {

    const dispatch = useDispatch();

    let { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    const dogDetail = useSelector((state) => state.detail)


    let nameDog, imageDog, temperamentDog = [], heightDog, weightDog, lifeSpanDog;

    if(dogDetail[0]){
      nameDog = dogDetail[0].name;
      imageDog = dogDetail[0].image;
      heightDog = dogDetail[0].height;
      weightDog = dogDetail[0].weight;
      lifeSpanDog = dogDetail[0].life_span;

      if(!dogDetail[0].createdInDb) {
        temperamentDog = dogDetail[0].temperament
      }

      if(dogDetail[0].createdInDb) {
        temperamentDog = dogDetail[0].temperaments.map(temp =>  temp.name + (', '))
      }
    }


  return (
    <div className={styles.bodyDog}>
    <div className={styles.dogdetail}>
      <Link className={styles.linkDet} to='/dogs'>X</Link>
       <div>
        <img src={imageDog} alt="algo" />
       </div>
       <div>
        <h1>{nameDog}</h1>
        <h4>Height:</h4>
        <p>{` ${heightDog} IN`}</p>
        <h4>Weight:</h4>
        <p>{`${weightDog} Pounds`}</p>
        <h4>Life span:</h4>
        <p>{lifeSpanDog}</p>
        <h4>Temperaments:</h4>
        <p>{temperamentDog}</p>
       </div>
    </div>
    </div>
  )
}

/* 
{!dogDetail[0].createdInDb ? dogDetail[0].temperament + ' ' : 
dogDetail[0].temperaments.map(el => el.name + (' '))}
*/