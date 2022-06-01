// const User = require('./models/user');

// User.hashPassword('Lou').then((hashedPassword) => {
//   console.log(hashedPassword);
// });

const User = require('./models/user');

User.verifyPassword(
 'wrongProut',
 '$argon2id$v=19$m=65536,t=5,p=1$2i+F1NVC9aAvECnNQD3pxA$qD6KGEVlzMt3oxrDI1cLqKZ+yC7LR99cpQ78htDEQF8'
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});