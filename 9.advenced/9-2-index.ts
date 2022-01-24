type Animal = {
  name: string;
  age: number;
  gender: "male" | "femail";
};

type Name = Animal["name"]; //string

type Keys = keyof Animal; //'age' | 'age' | 'gender'

let key: Keys; //'age' | 'age' | 'gender'
