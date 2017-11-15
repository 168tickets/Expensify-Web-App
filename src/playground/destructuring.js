// const person = {
//   name: 'Joe',
//   age: 49,
//   location: {
//     city: 'Fort Mill',
//     temp: 48
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person; // equivalent to the two lines above
// // = 'Anonymous' is used if no name parameter is provided
// console.log(`${firstName} is ${age} years old!`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// array destructuring

// const address = [
//   '1299 South Jupiter', 'Fort Mill', 'SC', '29715'
// ];

// //const [adress, city, state, zip] = address;
// const [, city, state ] = address; // skip item 1 and 4
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (iced)', '$2.00', '$3.20', '$4.00'];
const [name, , medium] = item;

console.log(`${name} costs ${medium}`);