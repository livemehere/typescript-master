
# 타입스크립트란?

## 공식사이트

[Handbook - The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## TS Config

TS → compile → JS(use this)

## `npm i -g ts-node`

타입스크립트를 자동으로 js로 변환하여 실행해 주는 툴

```java
ts-node main.js
```

## `ts -h`

가능한 명령어들 목록 보기

## `ts main.ts -w`

자동 감지

---

# 기본 타입 마스터하기

//💩  : 쓰지않는 것이 좋은 타입

```tsx
undefined : 빈지 안빈지 모름 (보편적으로 null 보다 많이씀)

null : 확실히 비어있음 //💩
unknown : 어떤 데이터든 담을수있음(안쓰는게좋음 js와 호환을 위해 존재함) 진짜모르는 녀석 //💩
any : 어떤 데이터든 담을수있음 모르는거알고 당당한 녀석//💩
object : 모든 데이터든 담을 수 있음(함수,객체, 배열)//💩

never : throw new Error 할때(프로그램이 죽는타입, 무한루프에빠질때)

void : 함수의 default 값임(생략가능)

```

# 함수 typescript

```tsx
function add(num1:number,num2:number):number{
    return num1+num2;
  }  

//promise
function tsFetch(id:string):Promise<number>{
  //   code ...
  //   code ...
  //   code ...
  return new Promise((resolve,reject)=>{
      resolve(100);
  })
}
```

# Optional parameter

```tsx
function printName(firstName:string,lastName?:string):void{
    console.log(firstName);
    console.log(lastName);
  }

name:string | undefined = name?:string
```

?를 해주면 optional로 되며, undefined가 더해진다

# Default parameter

```tsx
function printName(firstName:string = 'default msg',lastName?:string):void{
    console.log(firstName);
    console.log(lastName);
  }
```

# Rest parameter

```tsx
function addNumber(...params : number[]):number{
  let sum:number =0;
  params.forEach(n=>sum+=n);
  return sum;
}

console.log(addNumber(1,2,3,4));
```

배열로 받아오게됨

# Array

```tsx
const fruits:string[] = ['apple','banana'];
const scores:Array<number> = [1,2,3];
```

## 둘의 차이점?

readonly 가능여부

```tsx
function printArray(fruits: readonly string[]):void{ // 됨

}

function printArray(fruits: readonly Array<string>):void{ // 안됨

}
```

# Tuple (안쓰는게좋음)

```tsx
let student:[string,number];

student = ['name',25];
student[0]; //name
student[1]; //25

가독성높이는 방안하나 destructing

const [name,age] = student; //이렇게 사용하기
```

Tuple은 고정된 배열임

사용권장 x **why?** 가독성이너무 떨어짐

Tuple대신 → interface, type alias, class 사용

# Type Alias

```tsx
type Student={
    name:string,
    age:number
}

const stu1:Student={
    age=25,
    name='kong'
}

//String Literal type
type json = 'json'
let myJson:json;
myJson='json'; //'json'이라는 string만 들어올 수 있음
```

# Union Type( | )

```tsx
type Direction = 'left'|'right'|'up'|'down';

function move(direction:Direction):void{
    console.log(direction);
}

move('right');
```

string 말고 number도 들어올수있음 다른것 가능

```tsx
type SuccessState = {
    response:{
        body:string
    }
}
type FailState = {
    response:string
}

type LoginState = SuccessState | FailState;

function login():Promise<LoginState>{

    return new Promise((resolve, reject) =>{
        resolve({
            response:{
                body:"logged in!"
            }
        })
    })
    
}
```

## object 가 union되었을 경우별로 사용하려면

```tsx
type SuccessState = {
    response:{
        body:string;
    }
}
type FailState = {
    reason:string;
}

type LoginState = SuccessState | FailState;

function printLoginState(state:LoginState){
    if('response' in state){ //이렇게 검증해야함 아니면 어떤것인지몰라 any 타입이 들어옴
        console.log(state.response.body);
    }else{
        console.log(state.reason);
    }
}
```

## 좋은 방법으로는 고유한 type하나를 넣어주고 그걸로 체크하기

```tsx
type SuccessState = {
    result:'success';
    response:{
        body:string;
    }
}
type FailState = {
    result:'fail';
    reason:string;
}

type LoginState = SuccessState | FailState;

function printLoginState2(state:LoginState){
    if(state.result=='success'){
        console.log(state.response.body);
    }else{
        console.log(state.reason);
    }
}
```

# Intersection(&)

둘다

```tsx
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
```

# enum (안쓰는게좋음)

```tsx
enum Days{
    Monday, //1
    Tuesday, //2
    Wednesday, //3
    Thirday, //4
    Friday, //5
    Saturday, //6
    Sunday //7
}

const day = Days.Friday;
console.log(day); //4
```

개별로 string으로 할당해줄수도있음 or 숫자로 한다면 그 부분부터 지정해서 시작숫자를 설정할 수 있음

why? 쓰면안되? → 숫자도 할당이 가능해서 `day=10;` 이런식으로해도 에러안남

이거쓸빠에 union쓰면됨

# Inference(추론)

```tsx
let text = 'hello'  // string (자동)

function print(message){ // any(아무거나받음)
    console.log(message);
}
function print2(message='default'){ // string
    console.log(message);
}
```

primitive 타입은 그냥 생략해도되는데

함수에서는 명시해주는 것이 좋다

# assertion

```tsx
let 변수:string | undefined;

console.log(변수.length); // undefined가능성이 있기때문에 안됨
console.log(변수!.length); //"값이 있다는거 확신할께"
console.log((변수 as string).length); // "string이라고 확신할께"
```
