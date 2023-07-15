function make_sandwich(...ingredients: string[]): void {
    console.log('Sandwich Summary:');
    console.log('Bread');
  
    for (const ingredient of ingredients) {
      console.log(ingredient);
    }
  
    console.log('Bread');
  }
  
  make_sandwich('Ham', 'Cheese', 'Lettuce');
  make_sandwich('Turkey', 'Swiss Cheese', 'Tomato', 'Mayonnaise');
  make_sandwich('Peanut Butter', 'Jelly');
  