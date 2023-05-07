# **Basic**

---

---

---

## type

- String:
  - > `const course: string = "Next level web development";`
- Number:
  - > `const rollNumber: number = 123;`
- Boolean:
  - > `const isAdmin : boolean = true;`

`We can't give another type value to a particular type.`

### Example:

- rollNumber= 'abcd'; `//this will be wrong because we already called this as a number`

## Array Type

- > `const names:string[] = ['abul','kavul','babul'];`
- we can define any type by not calling any particular type name.
  - > `const names = ["abul", "kabul", "babul", 99, , true];`
- Tuple: (special type of array) Here we will define 2 type at a time.
  - > `const user: [number,string]=[412, "Faiaz"]`;
  - > `const couple: [string,string]=["Someone", "Faiaz"]`;

## Object Type

### we can ignore explicit type call

> Example:

````ts
const users={
  name: " Montu Mia",
  age: 52,
  isMarried: true,
  wife: "Bibi",
};```
````

### but good practice is to call type

> Example:

```ts
const users: {
  name: string;
  age: number;
  isMarried: boolean;
  wife: string;
} = {
  name: " Montu Mia",
  age: 52,
  isMarried: true,
  wife: "Bibi",
};
```

### we can optionally chain

- in above example we can optionally chain in type declaration
  - > ```ts
    > const users: {
    >  ...
    >   wife?: string,
    > }
    > ```
  - the `?` mark refers to optional chaining

### specific value call

- in above example we can optionally chain in type declaration

  - > ```ts
    > const users: {
    >   name: "Faiaz",
    >   age: number,
    >   ...
    > } = {
    >   name: "faiaz",
    >   age: 10,
    >   ...
    > };
    > ```

### `TypeScript gives us easy suggestions when we use `( . ) .` `

- > like:` users.(Here we will get all the suggestions)`

## Function

### `We use two types of functions in JS`

> Those are:

- Normal Function:
  - ```ts
    function add(num1: number, num2: number) {
      return num1 + num2;
    }
    ```
- Arrow Function:
  - ```ts
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    ```

> `Important`: we should keep "noImplicitAny": true in my tsconfig.json file otherwise it will ignore the function type call.

### \*If any function is used in an object we call that a `method`.

### we can use `default value in functions` like:

- ```ts
  const addArrows = (num1: number = 20, num2: number): number => num1 + num2;
  console.log(add);
  ```

### But here we have to call both the values like `addArrows(10,20)` we can't call `addArrows(10)` only. This will affect in only the first value if we call 2nd value like:

- ```ts
  const addArrows = (num1: number, num2: number = 20): number => num1 + num2;
  console.log(add);
  ```

### then we can call `addArrows(10)` so here the value will be `num1: 10 , num2:20`

---

## spread parameter

- ```ts
  const myFriends = ["chandler", "joey", "ross", "monica", "rachel", "pheobe"];
  const newFriends = ["monica", "rachel", "pheobe"];
  myFriends.push(...newFriends);
  ```

## rest parameter

```ts
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("faiaz", "rahi", "foysal", "wasi", "hiron");
```

## array and object destructuring.

```ts
const myBestFriend = {
  fullName: "Abul Bashar",
  age: 24,
};
const [bestfriend] = myFriends;
const { fullName: onnonam } = myBestFriend;
console.log(onnonam);
```

## type alias

```ts
type crushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};
const crush1: crushType = {
  name: "Moyna pakhi",
  age: 22,
  profession: "Web developer",
  address: "uganda",
};

const crush2: crushType = {
  name: "Tia pakhi",
  age: 22,
  profession: "Next level Web developer",
  address: "Nigeria",
};
```

## Union and Intersection type

### Union type

> we use | sign to show union type.

```ts
type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  expertise: "Javascript",
  experience: 1,
};
```

### Intersection type

> Here we will use & to use the previous type as well

```ts
type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  expertise: "Javascript",
  experience: 1,
};
```

## Nullable, unknown and Never

### Nullable

```ts
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching");
  }
};

searchName(null);
```

> result: `There is nothing to search`

### Unknown type

```ts
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`my speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`my speed is ${convertedSpeed}`);
  } else {
    console.log("There is wrong type");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);
```

### never

```ts
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Bhai bhai error khayagesi!");
```

## Ternary operator

```ts
const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
```

## Nullish coalescing operator

> it only works on null and undefined values.

```ts
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser ?? "Guest";
```

# **Advance type of typescript**

---

---

---

## type assertion

> Here when we know that the value will be any particular type we use `as` to refer the type. Example:

```ts
function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram("1000") as string;
```

## Interface

> it is for object type, function type and Array type

```ts
type addNumbersType = (num1: number, num2: number) => number; // this is Alias type

// now we are calling interface type
interface IAddNumbers {
  (num1: number, num2: number): number;
}
const addNumbers: IAddNumbers = (num1, number2) => num1 + number2;
```

```ts
type rollNumbersType = number[]; // type alias

interface IRollNumbers {
  [index: number]: number;
}
const rollNumbers: IRollNumbers = [1, 4, 5];
```

## generic type

```ts
type GenericArray<T> = Array<T>;
const rollNumber: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false];
const userNameAndRollNumbers: GenericArray<{ name: string; roll: number }> = [
  {
    name: "Mr. Faiaz",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];
```

> we can use tuple in generic type

```ts
type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];
const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Persian",
    salary: 100000,
  },
  "kate Winslet",
];
```

## Generic-interface

## Generic-Function

```ts
const createArray = <T>(param: T): T[] => {
  return [param];
};
const result1 = createArray<string>("Bangladesh");
const result2 = createArray<boolean>(true);
```

> we can use any tuple

```ts
const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
const result1 = createArray<string, string>("Bangladesh", "Ilmc");
const result2 = createArray<boolean, [string]>(true, ["usa"]);
```

## Generic-Constraints

```ts
const addMeInMyCrushMind = <
  T extends { name: string; age: number; salary: number }
>(
  myInfo: T
) => {
  const crush = "kate winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};
const myInfo: MyInfoType = {
  name: "Persian",
  age: 100,
  salary: 10000000,
};

const result5 = addMeInMyCrushMind(myInfo);
```

## asynchronous promise

```ts
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetched data!");
    }
  });
};
const getPromiseData = async () => {
  const data = await makePromise();
};
const result = makePromise();
```
