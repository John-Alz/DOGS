import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { filterByCreado, filterByTemperament, getDogs, getTemp, orderByName, orderByWeight } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import styles from './Home.module.css'
import Footer from "../Footer/Footer";


export default function Home() {

    const allTemperaments = useSelector(state => state.temperaments)
    const estadoDogs = useSelector((state) => state.dogs)
    const dispatch = useDispatch()

    const [pagina, setPagina] = useState(1)
    const [porPagina] = useState(8)

    const maximo = (estadoDogs.length / porPagina)

    const [orden, setOrden] = useState('');

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemp())
    }, [dispatch])

    function handleTemp(e) {
        dispatch(filterByTemperament(e.target.value))
    }

    function handleCreated(e) {
        dispatch(filterByCreado(e.target.value))
    }

    function orderNameHandler(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
        console.log(orden);
    }

    function orderWeightHandler(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setOrden(`Ordenado ${e.target.value}`)
        console.log(orden);
    }


    return (
        <>
        <div className={styles.bodyPage}>
        <div className={styles.encabezado}>
            <div>
                {/* <h1>PI dogs soy henry</h1>
                <p>
                    Proyecto desarrolado en el bootcamp de soy henry
                </p> */}
            </div>
        </div>
        <div className={styles.container_filters}>
        <h3>Filtros</h3>
        <select className={styles.Filter_name} onChange={e => orderNameHandler(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        {/* ----------------------------------------------------- */}
            <select className={styles.Filter_creado} onChange={e => handleCreated(e)}>
                <option value="All">Todos</option>
                <option value="api">Existente</option>
                <option value="created">Creados</option>
            </select>
        {/* ----------------------------------------------------- */}
            <select className={styles.Filter_weight} onChange={e => orderWeightHandler(e)}>
            <option value='min-weight'> Min-weight</option>
            <option value='max-weight'> Max-weight</option>
        </select>
        {/* ----------------------------------------------------- */}
        <select className={styles.Filter_temp} onChange={e => handleTemp(e)}>
            <option value='All'>All temps</option>
            {
                allTemperaments && allTemperaments.map((temp) => (
                    <option value={temp.name} key={temp.id}>{temp.name}</option>
                ))
            }
            </select>
            </div>
            
        {/* ----------------------------------------------------- */}
        <div className="Cards">
            {estadoDogs.length > 0 ? estadoDogs
            .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina)
            .map(
                (dog) => (
                    <Link className={styles.link} to={`/detail/${dog.id}`} key={dog.id} >
                    <Card
                    key={dog.id}
                    image={dog.image}
                    name={dog.name}
                    temperament={Array.isArray(dog.temperaments) ? dog.temperaments.map(dog => dog.name + (', ')) : dog.temperament}
                    // dog.temperament
                    /* dog.temperaments[0].name ? dog.temperaments.map(dog => dog.name) : dog.temperament */
                    weight={dog.weight}
                    />
                    </Link>
                )
            ) : <h2>Caragando...</h2>
            }
        </div>
        <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        
        <Footer/>
        </div>
        </>
    )
}