const express = require('express');

const app = express();

const plantsModule = require('./plants');

app.use(express.json());

app.get('/plants', (_req, res) => {
  res.status(200).json(plantsModule.defaultPlants);
})

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  res.json(plantsModule.getPlantById(id));
})

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  res.json(plantsModule.removePlantById(id));  
})

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = req.body;
  res.json(plantsModule.editPlant(id, plant));
})

app.post('/plant', (req, res) => {
  const plant = req.body;
  res.json(plantsModule.createNewPlant(plant));
})

app.listen(3000, () => {
  console.log('Aplicação tá on!');
})


// const savePlants = () => {
// const plants = JSON.stringify(defaultPlants);
// localStorage.setItem("plants", plants);
// };


// const getPlantsThatNeedsSunWithId = (id) => {
// const filteredPlants = defaultPlants.filter((plant) => {
//     if (plant.needsSun && plant.id === id) {
//     if (plant.specialCare.waterFrequency > 2) {
//         return plant;
//     }
//     }
// });
// localStorage.setItem("plants", JSON.stringify(filteredPlants));
// return filteredPlants;
// };

