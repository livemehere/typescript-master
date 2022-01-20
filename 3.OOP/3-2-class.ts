type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
}

class CoffeeMachine {
    

    static COFFEE_GRAMM_PER_SHOT:number = 7;
    coffeBeans:number;

    constructor(coffeBeans:number = 0){
        
        this.coffeBeans = coffeBeans;
    }

    remainCoffeeBeans():number{
        return this.coffeBeans;
    }
    
    addCoffeeBean(coffeBeans:number):void{
        this.coffeBeans += coffeBeans;
    }

    useCoffeeBeans(coffeBeans:number):void{
        this.coffeBeans -= coffeBeans;
    }

    makeCoffee(shots:number):CoffeeCup{

        if( this.coffeBeans >= shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT){
            this.useCoffeeBeans(shots * CoffeeMachine.COFFEE_GRAMM_PER_SHOT);
            return {
                shots:shots,
                hasMilk:false
            }
        }else{
            throw Error(`not enouph coffeeBeans (remain:${this.coffeBeans})`)
        }
        
    }
}

const coffeMachine = new CoffeeMachine(20);

console.log(coffeMachine);
console.log(coffeMachine.makeCoffee(2));
coffeMachine.addCoffeeBean(6)
console.log(coffeMachine.makeCoffee(1));
console.log(coffeMachine.remainCoffeeBeans()); 