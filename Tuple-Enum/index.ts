//TUPLE

let coffeeorder:[string,string]=["cappuccino","medium"]

let burgerorder:[string,string]=["beefburger","chickenburger"]

let customer:[string,number,string]=["Ubaid",23,"pakistan"]

//ENUMS

enum coffeetype{
    espresso,
    latte,
    cappuccino,
    americano
}
let mycoffee:coffeetype=coffeetype.espresso
console.log(mycoffee)

enum Status{
    pending,
    success,
    error
}
let mystatus:Status=Status.pending;
console.log("mystatus",mystatus)

for(let i=0;i<5;i++){
    console.log(` watering plan${i+1}`)
}

//numeric enum
/*enum direction{
    up=5,
    down,//6
    right,//7
    left//8
}
console.log(direction)
*/

//string enum

enum Direction{ //automatic assign nh hogi value ek ko di he tw sbko do
    up="UP",
    down="DOWN",
    right="RIGHT",
    left="LEFT"
}
// console.log(Direction.up)
console.log(Direction)

//enum Hetrogeneous

enum Direction3{ //string dedo number dedo
    up="UP",
    down=1,
    right, // automatic 2,
    left="ABC",
   // center //value must chahiye isko
}
// console.log(Direction.up)
console.log("direction3",Direction3)


//type alias

type traficlight="RED"|"YELLOW"|"GREEN";

let phase2signal1:traficlight;
let phase3signal2:traficlight="RED";
let phase4signal3:traficlight="GREEN"
console.log(phase4signal3)


let uname:unknown="ALI";
uname=5
let things:any=true
things="abc"



//shallow copy

// dono me change ayega pass by refference

//deep copy 
//nested ko be krna refference change


// let arr=["*","*","*","*","*","*","*","*","*","*"]
// let stars=""
// for(let i=0;i<arr.length;i++){
//     stars=stars+arr[i]
//     console.log(stars)
// }