// const users = [
//   { id: 1, name: "Hermès", age: 17 },
//   { id: 2, name: "Alice", age: 25 },
// ];

// let newUsers = users.map((user) => {
//   return {
//     id: user.id,
//     name: user.name,
//     isAdult: user.age >= 18 ? true : false,
//   };
// });

// console.log(newUsers);

// let newproporties = users.map((user) => {
//   return {
//     id: user.id,
//     name: user.name,
//     isAdult: user.age >= 18 ? true : false,
//     email: `${user.name.toLowerCase()}@gmail.com`,
//   };
// });

// console.log(newproporties);

// const scores = [45, 60, 85, 30];

// let state = scores.map((score) => {
//   return score >= 60 ? "Pass" : "Fail";
// });

// console.log(state);

// const fruits = ["Pomme", "Banane", "Orange"];

// let fruitsResult = fruits.map((fruit, index) => {
//   return `${index}. ${fruit}`;
// });

function listeNames() {
  const names = ["Hermès", "Alice", "Jean"];
  let namesList = names.map((name, index) => {
    return `<li i="${index}">${name}</li>`;
  });
}
