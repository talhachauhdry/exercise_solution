function car_info(manufacturer: string, model: string, ...options: string[]): object {
    const car = {
      manufacturer: manufacturer,
      model: model,
    };
  
    for (const option of options) {
      const [key, value] = option.split(':');
      car[key] = value;
    }
  
    return car;
  }
  
  console.log(car_info('Toyota', 'Camry', 'color:blue', 'year:2022'));
  console.log(car_info('BMW', 'X5', 'color:black', 'year:2021', 'sunroof:true'));
  