type Coodinate = {
    x:number;
    y:number;
}

let position:Coodinate ={
    x:0,
    y:0
}

type Command = "up"|"down"|"left"|"right";

function move(command:Command) {
    switch (command) {
        case "up":
            return position.y++;
        case "down":
            return position.y--;
        case "left":
            return position.x--;
        case "right":
            return position.x++;
            default:
                throw new Error("command is not exist");
    }
}

console.log(position); 
move('up');

console.log(position);
move('down');

console.log(position);
move('left');

console.log(position);
move('right');


// { x: 0, y: 0 }
// { x: 0, y: 1 }
// { x: 0, y: 0 }
// { x: -1, y: 0 }