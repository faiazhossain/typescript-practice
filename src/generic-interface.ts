interface relationWithSalaryInterface {
  name: string;
  salaru: number;
}

//Generic interface
interface CrushInterface<T> {
  name: string;
  husband: T;
}

const crush1: CrushInterface<boolean> = {
  name: "Kate Winslet",
  husband: true,
};

const crush2: CrushInterface<string> = {
  name: "Kate winslet",
  husband: "Persian",
};

const crush3: CrushInterface<object> = {
  name: "Kate Winslet",
  husband: {
    name: "Persian",
    salary: 0.01,
  },
};
