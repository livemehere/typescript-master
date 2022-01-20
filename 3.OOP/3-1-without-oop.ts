{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }

    let COFFEE_GRAMM_PER_SHOT = 7;
    let coffeBeans = 13;

    function makeCoffee(shots:number):CoffeeCup{

        if(coffeBeans >= shots * COFFEE_GRAMM_PER_SHOT ){
            coffeBeans -= shots * COFFEE_GRAMM_PER_SHOT;
            return {
                shots:shots,
                hasMilk:false
            }
        }else{
            throw Error(`There is no coffe bean here(remain:${coffeBeans})`) 
        }

    }
    console.log(makeCoffee(1));
    console.log(makeCoffee(1));
    
}