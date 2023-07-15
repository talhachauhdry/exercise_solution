function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      great_magicians.push(`${magician} the Great`);
    }
  
    return great_magicians;
  }
  
  const magicians = ["Talha", "Mutti", "Ali"];
  const unchanged_magicians = magicians.slice();
  const great_magicians = make_great(unchanged_magicians);
  
  console.log('Original Magicians:');
  show_magicians(magicians);
  
  console.log('Great Magicians:');
  show_magicians(great_magicians);
  