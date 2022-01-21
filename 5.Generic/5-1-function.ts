{
    function checkNotNull<T>(arg:T|null):T{
        if(arg == null){
            throw new Error("not valid number!");
        }
        return arg;
    }
    
    console.log(checkNotNull(123));
    console.log(checkNotNull('string'));
    

    
}