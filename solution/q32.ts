const current_users = ['Talha', 'Mutti', 'Ali', 'Irfan', 'Warisha'];
const new_users = ['Talha', 'Anfal', 'Ali', 'Izza', 'Samava'];

for (const new_user of new_users) {
  if (current_users.includes(new_user)) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
