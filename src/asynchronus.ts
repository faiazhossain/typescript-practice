// //Mocking

// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetched data!");
//     }
//   });
// };
// const getPromiseData = async () => {
//   const data = await makePromise();
// };
// const result = makePromise();

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const getTodo = async (): Promise<ITodo> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await response.json();
// };

// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };

// getTodoData();
