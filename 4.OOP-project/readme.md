# Stack 구현하기

```js
interface Stack{
    readonly size:number;
    push(value:number):void;
    pop():OneStack;
}

type OneStack = {
    value: string|number;
    below:OneStack|null;
}

class MyStack implements Stack{

    private head:OneStack | null;
    private count:number;

    constructor(){
        this.head = null;
        this.count = 0;

    }

    get size():number {
        return this.count;
    }

    push(value:string|number):void{
        if(this.head === null){
            const node:OneStack = {
                value:value,
                below:null
            }
            this.head = node;

        }else{
            const node:OneStack = {
                value:value,
                below:this.head
            }
            this.head=node;
        }

        this.count++;

    }
    pop():OneStack{
        if(this.head != null){
            this.count--;
            const node = this.head;
            this.head = this.head.below;
            return node;
        }else{
            throw new Error("Stack is empty");
        }
    }
    print():void{}
}


const myStack:Stack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
myStack.push(4);
myStack.push(8);
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop()); //error
console.log(myStack.size);

```
