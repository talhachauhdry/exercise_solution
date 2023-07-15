let guests: string[] = ["Talha", "Mutti", "Ali"];
console.log("Good news! We found a bigger dinner table.");
let newGuests: string[] = ["Irfan", "Warisha", "Anfal"];
guests.unshift(...newGuests.slice(0, 1));
guests.splice(Math.floor(guests.length / 2), 0, ...newGuests.slice(1, 2));
guests.push(...newGuests.slice(2));
for (let guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}
