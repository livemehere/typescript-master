{
    class User{

        get fullName():string{
            return `${ this.firstName } ${ this.lastName }`;
        }

        set setFirstName(value:string){
            this.firstName = value;
        }

        constructor(private firstName:string, private lastName:string){

        }
        
    }
    
    const user  = new User('Steve','Jobs');
    user.setFirstName = 'kong';
        console.log(user.fullName);
}

