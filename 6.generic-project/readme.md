# Generic

## 일반

```tsx
function checkNotNull(arg: number | null): number {
  if (arg == null) {
    throw new Error("not valid number!");
  }
  return arg;
}
const result = checkNotNull(123);
console.log(result);
checkNotNull(null); //error
```

## Generic

function

```tsx
function checkNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error("not valid number!");
  }
  return arg;
}

console.log(checkNotNull(123));
console.log(checkNotNull("string"));
```

class

```tsx
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private letfValue: L, private rightValue: R) {}

  left() {
    return this.letfValue;
  }
  right() {
    return this.rightValue;
  }
}

const either = new SimpleEither({ name: "kong" }, 25);
console.log(either.left());
console.log(either.right());
```

## 클래스를 구분하는 generic

`T extends Employee`

```tsx
interface Employee {
  pay: () => void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {
    console.log("full time working!");
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {
    console.log("part time working!");
  }
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const kong = new FullTimeEmployee();
const kongAfterPay = pay(kong);
kongAfterPay.workFullTime();
```

## 3개의 Object Generic

```tsx
const obj = {
  name: "kong",
  age: 25,
};

const obj2 = {
  animal: "🐕",
};

function getValue<T, K extends keyof T>(obj: T, value: K): T[K] {
  return obj[value];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
```

## Stack Generic으로 업그레이드하기

```tsx
interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): OneStack<T>;
}

type OneStack<T> = {
  value: T;
  below: OneStack<T> | null;
};

class MyStack<T> implements Stack<T> {
  private head: OneStack<T> | null;
  private count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  get size(): number {
    return this.count;
  }

  push(value: T): void {
    if (this.head === null) {
      const node: OneStack<T> = {
        value: value,
        below: null,
      };
      this.head = node;
    } else {
      const node: OneStack<T> = {
        value: value,
        below: this.head,
      };
      this.head = node;
    }

    this.count++;
  }
  pop(): OneStack<T> {
    if (this.head != null) {
      this.count--;
      const node = this.head;
      this.head = this.head.below;
      return node;
    } else {
      throw new Error("Stack is empty");
    }
  }
  print(): void {}
}

const myStack = new MyStack<string>();
myStack.push("ji");
myStack.push("kong");
console.log(myStack.pop());
console.log(myStack.pop());

const myStack2 = new MyStack<number>();
myStack2.push(1);
myStack2.push(4);
console.log(myStack2.pop());
console.log(myStack2.pop());
```
