// type GenericArray<T> = Array<T>;
// const rollNumber: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
// const rollNumbers3: GenericArray<boolean> = [true, false];
// const userNameAndRollNumbers: GenericArray<{ name: string; roll: number }> = [
//   {
//     name: "Mr. Faiaz",
//     roll: 1,
//   },
//   {
//     name: "Mr. Y",
//     roll: 2,
//   },
// ];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];
const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Persian",
    salary: 100000,
  },
  "kate Winslet",
];
