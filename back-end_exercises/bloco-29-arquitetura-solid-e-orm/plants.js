let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
    waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

const getPlantById = (id) => {
return defaultPlants.filter((plant) => plant.id === parseInt(id));
};

const removePlantById = (id) => {
defaultPlants = defaultPlants.filter((plant) => plant.id !== parseInt(id));
return defaultPlants;
};

const editPlant = (id, newPlant) => {
return defaultPlants.map((plant) => {
    if (plant.id === parseInt(id)) {
    return newPlant;
    }
    return plant;
});
};

const calculateWaterFrequency = (needsSun, size, origin) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  return waterFrequency;
};

let createdPlants = defaultPlants.length;

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
    waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const createNewPlant = (plant) => {
  createdPlants++
  const newPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(newPlant);
  return defaultPlants;
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    return plant.needsSun && plant.id === parseInt(id);
  });
  return filteredPlants;
};

module.exports = {
  defaultPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId
};
    