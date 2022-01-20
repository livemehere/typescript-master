type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(op:Operator, num1:number,num2:number):number{
    let result:number;

    switch(op){
        case 'add':
            result = num1 + num2;
            break;
        case 'substract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        default:
            throw new Error(`There is no operator ${op}`);
    }


    return result;

}

console.log(calculate('add',1,3));
console.log(calculate('substract',3,1));
console.log(calculate('multiply',4,2));
console.log(calculate('divide',4,2));
console.log(calculate('remainder',5,2));