function addNumber(...params : number[]):number{
  let sum:number =0;
  params.forEach(n=>sum+=n);
  return sum;
}

console.log(addNumber(1,2,3,4));