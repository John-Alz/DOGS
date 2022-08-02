import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getTemp, postDog } from '../../actions/actions';
import styles from './AddDog.module.css'


function valdate(input){
  let errors ={}
  if(!input.name) {
    errors.name = "Se requiere incluir un nombre"
  }
  else if(!input.min_height){
    errors.min_height = "Se requiere incluir altura minima"
  }
  else if(!input.max_height) {
    errors.max_height = 'Se requiere incluir altura maxima'
  }
  else if(!input.min_weight) {
    errors.min_weight = "Se requiere incluir peso minimo"
  }
  else if(!input.max_weight) {
    errors.max_weight = 'Se requiere incluir peso maximo'
  }
  else if(!input.life_span) {
    errors.life_span = "Se requiere incluir esperanza de vida"
  }
  else if(!input.image){
    errors.image = "Se requiere una imagen"
  } 
  return errors;
}

export default function AddDog() {

  const dispatch = useDispatch();
  const allTemperaments = useSelector(state => state.temperaments)

  const [errors, setErrors] = useState({});
  

  const [input, setInput] = useState ({
    name: '',
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span:  "",
    image: "",
    temperaments: []
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(valdate({
      ...input,
      [e.target.name]: e.target.value
    }));
    console.log(input);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperaments: [...input.temperaments, e.target.value]
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postDog(input))
    alert('Perro creado!!')

    setInput({
      name: '',
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      life_span:  "",
      image: "",
      temperaments: []
    })
  }

  // function onClickSubmit (){
  //   if(!input.name || !input.min_height || !input.max_height || !input.min_weight || !input.max_weight || !input.life_span || !input.image || !input.temperaments){
  //     alert('Debes completar cada uno de los campos')
  //   }else {
  //     alert('Perro creado!!')
  //   }
  // } 

  function handleDelete(el){
    setInput({
      ...input,
      temperaments: input.temperaments.filter(temp => temp !== el)
    })
  }

  useEffect(() => {
    dispatch(getTemp())
  }, [dispatch])

  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <Link className={styles.LinkAdd} to='/dogs'>X</Link>
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png' alt='img'/>
      <form  onSubmit={handleSubmit}>
        <h1>Crea tu perro!!  🐶🦴</h1> 
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="text" 
          value={input.name}
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          />
          <br />
          {
            errors.name && (
              <small className={styles.error}>{errors.name}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="number"
          min='1'
          value={input.min_height}
          name='min_height'
          placeholder='Min height'
          onChange={handleChange}
          />
          <br />
          {
            errors.min_height && (
              <small className={styles.error}>{errors.min_height}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="number"
          min='1'
          value={input.max_height}
          name='max_height'
          placeholder='Max height'
          onChange={handleChange}
          />
          <br />
          {
            errors.max_height && (
              <small className={styles.error}>{errors.max_height}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="number"
          min='1'
          value={input.min_weight}
          name='min_weight'
          placeholder='Min weight'
          onChange={handleChange}
          />
          <br />
          {
            errors.min_weight && (
              <small className={styles.error}>{errors.min_weight}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="number"
          min='1'
          value={input.max_weight}
          name='max_weight'
          placeholder='Max weight'
          onChange={handleChange}
          />
          <br />
          {
            errors.max_weight && (
              <small className={styles.error}>{errors.max_weight}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="number"
          min='1'
          value={input.life_span}
          name='life_span'
          placeholder='Life span'
          onChange={handleChange}
          />
          <br />
          {
            errors.life_span && (
              <small className={styles.error}>{errors.life_span}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <input 
          type="url"
          value={input.image}
          name='image'
          placeholder='Image URL'
          onChange={handleChange}
          />
          <br />
          {
            errors.image && (
              <small className={styles.error}>{errors.image}</small>
            )
          }
        </div>
  {/* ----------------------------------------------------- */}
        <div>
          <select onChange={handleSelect}>
          <option disabled selected>Selecciona temperamentos</option>
            {allTemperaments.map((temp) => (
              <option value={temp.name} >{temp.name}</option>
            ))}
          </select>
          {/* <ul><li>{input.temperaments.map(el => el + " ,")}</li></ul> */}
        </div>
  {/* ----------------------------------------------------- */}
        <button type='submit' disabled={
        errors.name || errors.min_height || errors.max_height
        || errors.min_weight || errors.max_weight || errors.life_span
        || errors.image
          ? true : false}>Crear Dog</button>
      </form>
      {
        input.temperaments.map(el =>
          <div className={styles.lista_temp}>
            <ul>{el}<button className='buttonX' onClick={() => handleDelete(el)}>X</button></ul>
            
          </div>
          )
      }
      </div>
      
  {/* ----------------------------------------------------- */}
    
    </div>
  )
}
