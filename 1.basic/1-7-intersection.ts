{
type Student = {
    name:string;
    age:number;
}

type Worker ={
    employeeId:number;
    work:()=>void;
}

function internWork(person:Student & Worker){
    console.log(person.name,person.age,person.employeeId,person.work());
}
internWork({
    name:'kong',
    age:25,
    employeeId:1111,
    work:()=>{console.log('working!');}
})


}