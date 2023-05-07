const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
const result1 = createArray<string, string>("Bangladesh", "Ilmc");
const result2 = createArray<boolean, [string]>(true, ["usa"]);

function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}
