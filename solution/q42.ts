function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      great_magicians.push(`${magician} the Great`);
    }
  
    return great_magicians;
  }
  
  const magicians = ["Talha", "Mutti", "Ali"];
  const great_magicians = make_great(magicians);
  show_magicians(great_magicians);
  