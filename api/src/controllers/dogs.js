
const { Dog, Temperament} = require('../db');
const { v4: uuidv4 } = require("uuid");
const { getAllDogs } = require('../infodbapi');

async function getAllPerros(req, res) {
    const { name } = req.query
    const allDogs = await getAllDogs();

    if(name){
        const byName = allDogs.filter(dog => dog.name.toLowerCase().startsWith(name.toLowerCase()))
        byName.length ? res.json(byName) : res.status(404).send({ 'msg': 'No fuciona' })
    } else {
        res.json(allDogs)
    }
}


async function getDogId(req, res) {
    const { idRaza } = req.params
    const allDogs = await getAllDogs()
    try {
        const dog = allDogs.filter(elemento => elemento.id == idRaza)
        res.json(dog)
    } catch (error) {
        res.status(404).send("no funciona")
    }
}

async function newDog(req, res, next) {
    const { name, min_height, max_height, min_weight,  max_weight, life_span, image, temperaments} = req.body
    if(!name || !min_height || !max_height || !min_weight || !max_weight || !life_span || !image || !temperaments)
    res.status(400).json({ msg: "Faltan datos" });
    

    const ide = uuidv4()

    const totalHeight = []
    const minHeight = min_height;
    const maxHeight = max_height;
    totalHeight.push(minHeight, maxHeight)

    const totalWeight = []
    const minWeight = min_weight;
    const maxWeight = max_weight;
    totalWeight.push(minWeight, maxWeight);

    try {
        let NewDog = await Dog.create({
            id: ide,
            name,
            height: totalHeight,
            weight: totalWeight,
            life_span,
            image
        })
        for (const temp of temperaments) {
            const findTemp = await Temperament.findOne({
                where: { name: temp},
            });
        if(!findTemp){
            return res.status(400).send("temp no encontrado");
        }
            await NewDog.addTemperament(findTemp)
            await findTemp.addDog(NewDog)
        }
        res.status(200).send("creado");
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllPerros, getDogId, newDog}