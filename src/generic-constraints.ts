// const addMeInMyCrushMind = <
//   T extends { name: string; age: number; salary: number }
// >(
//   myInfo: T
// ) => {
//   const crush = "kate winslet";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// type MyInfoType = {
//   name: string;
//   age: number;
//   salary: number;
// };
// const myInfo: MyInfoType = {
//   name: "Persian",
//   age: 100,
//   salary: 10000000,
// };

// const result5 = addMeInMyCrushMind(myInfo);

// // KeyOf

// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };

// type newType = "name" | "age" | "address"; // manually
// type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "age";
// const b: newType = "address";

// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//   obj[key];
// }

// const property = getProperty({ name: "Mr.X", age: 100 }, "age");
// // {name: 'Mr.X', age:100},

// const a = {
//   name: "Mr.X",
//   age: 100,
// };
