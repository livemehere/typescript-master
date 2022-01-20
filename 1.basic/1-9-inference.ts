let text = 'hello'  // string (자동)

function print(message){ // any(아무거나받음)
    console.log(message);
}
function print2(message='default'){ // string
    console.log(message);
}