const express = require('express');

const app = express();

const plantsModule = require('./plants');

app.use(express.json());

app.get('/plants', (_req, res) => {
  res.json(plantsModule.defaultPlants);
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

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  res.json(plantsModule.getPlantsThatNeedsSunWithId(id));
})

app.listen(3000, () => {
  console.log('Refatorando aplicação com o princípio SOLID, na porta 3000');
})
