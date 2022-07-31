const  axios  = require("axios");
const { Dog, Temperament} = require('./db');
const { API_KEY } = process.env;


/* INFO DE LA API */


const getDataApi = async () => {
    const infoApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const dataApi = await infoApi.data.map(elemento => {
        return {
            id: elemento.id,
            name: elemento.name,
            height: elemento.height.imperial,
            weight: elemento.weight.imperial,
            temperament: elemento.temperament,
            life_span: elemento.life_span,
            image: elemento.image.url
        }
    })
    return dataApi
}

/* INFO DE LA DB */

const getDataBase = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

/* UNIR/CONCATENAR LOS DATOS API Y DATOS */

const getAllDogs = async () => {
    const dataApi = await getDataApi()
    const dataBase = await getDataBase()
    const dataJoin = [...dataApi, ...dataBase];
    return dataJoin;
}


module.exports ={ getAllDogs, getDataApi, getDataBase }