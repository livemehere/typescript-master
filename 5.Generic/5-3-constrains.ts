{
  //   interface Employee {
  //     pay: () => void;
  //   }

  //   class FullTimeEmployee implements Employee {
  //     pay() {
  //       console.log("full time!");
  //     }
  //     workFullTime() {
  //       console.log("full time working!");
  //     }
  //   }

  //   class PartTimeEmployee implements Employee {
  //     pay() {
  //       console.log("part time!");
  //     }
  //     workPartTime() {
  //       console.log("part time working!");
  //     }
  //   }

  //   function pay<T extends Employee>(employee: T): T {
  //     employee.pay();
  //     return employee;
  //   }

  //   const kong = new FullTimeEmployee();
  //   const kongAfterPay = pay(kong);
  //   kongAfterPay.workFullTime();

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
}
