const myVehicle = {
    brand: 'Audi',
    model: 'Audi Q4 e-tron',
    color: 'Silver'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'Black'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle);