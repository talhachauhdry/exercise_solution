let guests: string[] = ["Talha", "Mutti", "Ali","Irfan", "Warisha", "Anfal"];
console.log("I'm sorry, but we can only invite two people for dinner.");
while (guests.length > 2) {
  let removedGuest: string = guests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let guest of guests) {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
}
guests.length = 0; // Empty the list
console.log(guests); // Print an empty list
