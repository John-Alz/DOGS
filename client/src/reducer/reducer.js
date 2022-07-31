import { CASES } from "../actions/types"


let initialState = {
    dogs: [],
    allDogsCp: [],
    temperaments: [],
    detail: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CASES.GET_ALL:
            return {
                ...state,
                dogs: action.payload,
                allDogsCp: action.payload
            }
        case CASES.GET_NAME:
            return {
                ...state,
                dogs: action.payload,
            }
        case CASES.GET_DETAIL_ID:
            return {
                ...state,
                detail: action.payload,
            }
        case CASES.GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload,
            }

            case CASES.BY_ORDER:
            console.log(action.payload);           
            const orderDogs = action.payload === "asc" ?
            state.dogs.sort(function (a, b){
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.dogs.sort(function(a, b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }
                return 0;
            })
            console.log(orderDogs);
            return{
                ...state,
                dogs: orderDogs
            }

        case CASES.BY_TEMPERAMENT:
            const otra = [...state.allDogsCp]
            const tempFilter = action.payload === 'All' ? otra : 
            otra.filter(dog => {
                if(!dog.temperament) return undefined;
                return dog.temperament.includes(action.payload)
            })
            return{
                ...state,
                dogs: tempFilter
            }
        case CASES.BY_CREATED:
            const allDogs2 = state.allDogsCp;
            const createdFilter = action.payload === "created" ? 
            allDogs2.filter(el => el.createdInDb) : allDogs2.filter(el => !el.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'All' ? state.allDogsCp : createdFilter
            }
        
            case CASES.BY_ORDER_WEIGHT:
                const orderWeight = action.payload === 'min_weight' ?
                state.dogs.sort(function(a, b){
                    if(parseInt(a.weight[1]) > parseInt(b.weight[1])){
                        return 1
                    }
                    if(parseInt(b.weight[1]) > parseInt(a.weight[1])){
                        return -1
                    }
                    return 0
                }) :
                state.dogs.sort(function(a, b){
                    if(parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                        return -1
                    }
                    if(parseInt(b.weight[1]) > parseInt(a.weight[1])){
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    dogs: orderWeight
                }
        default:
            return {...state};
    }
}