const  axios  = require("axios");
const { Dog, Temperament} = require('../db');
const { API_KEY } = process.env;

async function getTemperament(req, res) {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temperaments = temperamentsApi.data.map(t => t.temperament);
    const temps = temperaments.toString().split(",");
    temps.forEach(el => {
        let i = el.trim()
        Temperament.findOrCreate({
            where: { name: i }
        })
    })

    const allTemp = await Temperament.findAll();    
    res.send(allTemp);
}

module.exports = { getTemperament }