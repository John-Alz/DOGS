import { CASES } from "./types";
import axios from 'axios';





export function getDogs(){
    return async function(dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs")
            dispatch({
                type: CASES.GET_ALL,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export function getByName(name){
    return async function(dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs?name=" +  name)
            dispatch({
                type: CASES.GET_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id){
    return async function(dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/dogs/" + id)
            dispatch({
                type: CASES.GET_DETAIL_ID,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//clear detail

export function clearDetail() {
    return {
        type: CASES.CLEAR_DETAIL
    }
}

/* ------------------------------------------- */

export function getTemp(){
    return async function(dispatch) {
        try {
            const res = await axios.get("http://localhost:3001/temperament")
            dispatch({
                type: CASES.GET_TEMPERAMENT,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function postDog(payload) {
    return async function() {
        try {
            const res = await axios.post("http://localhost:3001/dog", payload)
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderByName(payload) {
    console.log(payload);
    return{
        type:CASES.BY_ORDER,
        payload
    }
}

export function filterByTemperament(payload) {
    console.log(payload);
    return{
        type: CASES.BY_TEMPERAMENT,
        payload
    }
}

export function filterByCreado(payload) {
    return{
        type: CASES.BY_CREATED,
        payload
    }
}


export function orderByWeight(payload) {
    console.log(payload);
    return{
        type: CASES.BY_ORDER_WEIGHT,
        payload
    }
}
