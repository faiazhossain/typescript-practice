type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "interface",
  age: 200,
};

interface IExtendedUser extends IUser {
  role: string;
}

const user: extendedUser = {
  name: "Faiaz",
  age: 24,
  role: "frontend",
};

interface IAddNumbers {
  (num1: number, num2: number): number;
}
const addNumbers: IAddNumbers = (num1, number2) => num1 + number2;

console.log(addNumbers);

type rollNumbersType = number[]; // type alias

interface IRollNumbers {
  [index: number]: number;
}
const rollNumbers: IRollNumbers = [1, 4, 5];
