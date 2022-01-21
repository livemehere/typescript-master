{
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
}
