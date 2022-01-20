## 객체지향 프로그래밍이란(OOP)?

a programming paradigm based on the concepts of **“obejcts”** which can contain **data** and **code**.

## OOP 4 Principles

### 1. Encapsulation(캡슐화)

연관있는 데이터 & 함수 들을 한곳에 모아서 캡슐화하여 외부에서 보일 필요가없는 데이터를 숨기는 것이다.

내부의 state를 직접변경할 수 없다.(메서드를 통해서 변경할것)

### 2. Abstraction(추상화)

내부의 복잡한 것을 숨기고, API를 만든다

### 3. Inheritance(상속)

필요한 기능을 확장해나갈 수 있다.

이로써 재사용 가능해야한다.

### 4. Polymorpyism(다형성)

## 커피자판기 만들기

### Without-OOP

```tsx
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

let COFFEE_GRAMM_PER_SHOT = 7;
let coffeBeans = 13;

function makeCoffee(shots: number): CoffeeCup {
  if (coffeBeans >= shots * COFFEE_GRAMM_PER_SHOT) {
    coffeBeans -= shots * COFFEE_GRAMM_PER_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  } else {
    throw Error(`There is no coffe bean here(remain:${coffeBeans})`);
  }
}
console.log(makeCoffee(1));
console.log(makeCoffee(1));
```

### Class

```tsx
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMachine {
  static COFFEE_GRAMM_PER_SHOT: number = 7;
  coffeBeans: number;

  constructor(coffeBeans: number = 0) {
    this.coffeBeans = coffeBeans;
  }

  remainCoffeeBeans(): number {
    return this.coffeBeans;
  }

  addCoffeeBean(coffeBeans: number): void {
    this.coffeBeans += coffeBeans;
  }

  useCoffeeBeans(coffeBeans: number): void {
    this.coffeBeans -= coffeBeans;
  }

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeBeans >= shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT) {
      this.useCoffeeBeans(shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT);
      return {
        shots: shots,
        hasMilk: false,
      };
    } else {
      throw Error(`not enouph coffeeBeans (remain:${this.coffeBeans})`);
    }
  }
}

const coffeMachine = new CoffeeMachine(20);

console.log(coffeMachine);
console.log(coffeMachine.makeCoffee(2));
coffeMachine.addCoffeeBean(6);
console.log(coffeMachine.makeCoffee(1));
console.log(coffeMachine.remainCoffeeBeans());
```

static은 클래스 레벨로 바꿔줌(정적, 인스턴스에서 나타나지않음, 메모리에 올라간다.)

함수도 static function 을 만들수있다

## encapsulation(캡슐화하기)

```tsx
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMachine {
  private static COFFEE_GRAMM_PER_SHOT: number = 7;
  private coffeBeans: number;

  private constructor(coffeBeans: number = 0) {
    this.coffeBeans = coffeBeans;
  }

  static makeCoffeeMachine(coffeBeans: number = 0) {
    return new CoffeeMachine(coffeBeans);
  }

  remainCoffeeBeans(): number {
    return this.coffeBeans;
  }

  addCoffeeBean(coffeBeans: number): void {
    if (coffeBeans < 0) {
      throw new Error("value for beans should be greater than 0");
    }
    this.coffeBeans += coffeBeans;
  }

  useCoffeeBeans(coffeBeans: number): void {
    this.coffeBeans -= coffeBeans;
  }

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeBeans >= shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT) {
      this.useCoffeeBeans(shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT);
      return {
        shots: shots,
        hasMilk: false,
      };
    } else {
      throw Error(`not enouph coffeeBeans (remain:${this.coffeBeans})`);
    }
  }
}

const coffeMachine = CoffeeMachine.makeCoffeeMachine(20);

console.log(coffeMachine);
console.log(coffeMachine.makeCoffee(2));
coffeMachine.addCoffeeBean(6);
console.log(coffeMachine.makeCoffee(1));
console.log(coffeMachine.remainCoffeeBeans());
```

public

private

protected

- **static**

## getter & setter

```tsx
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set setFirstName(value: string) {
    this.firstName = value;
  }

  constructor(private firstName: string, private lastName: string) {}
}

const user = new User("Steve", "Jobs");
user.setFirstName = "kong"; //set
console.log(user.fullName); //get
```

- get, set 의경우 함수의 형태를 가지게 되지만, public field처럼 접근이 가능하다.
  - 보통 get,set을 사용하는 이유는, field 처럼 변수이지만, 외부에서 가져갈때나, setting 할때 필요한 연산이나 validation 등이 필요할 때 사용한다.
- typescript의 경우 class의 field 변수들을 항상 선언해줘야하는데, constructor에서 접근지정자를 붙여서 받아오면 생략이 가능하다.(같은 기능을함)
