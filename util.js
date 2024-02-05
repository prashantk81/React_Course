// const userInfo = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("hello! good morning");
//   },
// };
// console.log(userInfo.name);
// userInfo.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("hello");
//   }
// }
// const user1 = new User("manual", 23);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "cooking", "reading"];
// hobbies.push("working");
// console.log(hobbies);
// const idx = hobbies.findIndex((item) => item === "reading");
// console.log(idx);
// const temp = hobbies.map((item) => item + "!");
// console.log(temp);

// const userData = ["prashant", "kumar"];
// const firstName = userData[0];
// const lastName = userData[1];
// console.log(firstName);
// console.log(lastName);
// const [firstName, lastName] = ["prashant", "kumar"];
// console.log(firstName);
// console.log(lastName);

// const hobbies = ["sports", "cooking"];
// const newHobbies = ["reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const hobbies = ["sports", "cooking"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

function greet(greetFun) {
  greetFun();
}
greet(() => console.log("hi"));
