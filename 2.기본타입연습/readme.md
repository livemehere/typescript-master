# 기본타입 연습

## 계산기 함수 만들기

```tsx
type Operator = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(op: Operator, num1: number, num2: number): number {
  let result: number = 0;

  switch (op) {
    case "add":
      result = num1 + num2;
      break;
    case "substract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "remainder":
      result = num1 % num2;
      break;
    default:
      throw new Error(`There is no operator ${op}`);
  }

  return result;
}

console.log(calculate("add", 1, 3));
console.log(calculate("substract", 3, 1));
console.log(calculate("multiply", 4, 2));
console.log(calculate("divide", 4, 2));
console.log(calculate("remainder", 5, 2));
```

## 좌표게임

```tsx
type Coodinate = {
  x: number;
  y: number;
};

let position: Coodinate = {
  x: 0,
  y: 0,
};

type Command = "up" | "down" | "left" | "right";

function move(command: Command) {
  switch (command) {
    case "up":
      return position.y++;
    case "down":
      return position.y--;
    case "left":
      return position.x--;
    case "right":
      return position.x++;
    default:
      throw new Error("command is not exist");
  }
}

console.log(position);
move("up");

console.log(position);
move("down");

console.log(position);
move("left");

console.log(position);
move("right");

// { x: 0, y: 0 }
// { x: 0, y: 1 }
// { x: 0, y: 0 }
// { x: -1, y: 0 }
```

> 타입추론이 되어서 사실 return 을 사용하기보다 그냥 로직작성후 break;를 걸어주는것이 더 올바르다.

## Loading 상태 반환함수

```tsx
type SuccessState = {
  state: "success";
  response: {
    body: string;
  };
};
type FailState = {
  state: "fail";
  reson: string;
};

type LoadingState = {
  state: "loading";
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLoginState(obj: ResourceLoadState): void {
  if (obj.state == "success") {
    console.log(obj.response.body);
  } else if (obj.state == "fail") {
    console.log(obj.reson);
  } else if (obj.state == "loading") {
    console.log("👀 loading...");
  } else {
    throw new Error("object type is fail!");
  }
}

printLoginState({ state: "loading" });
printLoginState({ state: "success", response: { body: "loaded" } });
printLoginState({ state: "fail", reson: "no network" });
```
