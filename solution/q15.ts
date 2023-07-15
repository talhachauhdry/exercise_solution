let guests: string[] = ["Talha", "Mutti", "Ali"];
let unableToAttend: string = guests.pop();
let newGuest: string = "Irfan";
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}
console.log(`${unableToAttend} can't make it to dinner.`);
guests.push(newGuest);
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}
