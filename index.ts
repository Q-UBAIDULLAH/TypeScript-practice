// console.log("hello world")

//  let color:string;
//  color="ubaidullah"

//  console.log(color)





// let Name:string="Hassan"
// console.log(Name)


// let name1:string="Kashif"
// name1="Osama"
// console.log(name1)

// explicit) let num:number=2
// console.log(num)

//implicit)let num2=10
// console.log(num2)

// let num=2**2
// console.log(num)


/*let Name:string;
Name="Umar"
switch(Name){
    case"Ubaid":
    console.log(" case 1 wrong name")
    break;
    case"haris":
    console.log("case 2 wrong name")
    break;
    case "Umair":
        console.log("case 3 its correct name")
        break;
        default:
            console.log("default value")
} 

let uni_name:string="Sir Syed"
switch(uni_name){
    case "bahria":
        console.log("not match")
        break;
        case"Karachi Uni":
        console.log("not match karachi uni")
        break;
        case "Sir Syed":
            console.log("its great university")
            break;
            default:
                console.log("noe one match")
}*/


 /*let Name:string="ubaid"
 if(Name==="ubaid" || Name==="umair")
     {
         console.log(`${Name}is your friend`)
     }
     else{
         console.log(`${Name} is not your friend`)
     }
*/
     /*let player1:string="Rock";
     let player2:string='Scissors';
     if(player1===player2)
        {
            console.log('Its a tie')
        }
       else if((player1==="Rock"&&player2==="Scissors")||(player1==="Scissors"&&player2==="paper")||(player1==="paper"&&player2==="Rock")){
        console.log("player 1 Wins")
       }
       else{
        console.log("player 2 wins")
       }
       */

      /*function addnumber():number{
let num=1+3+8
return num
      }
let value:number=addnumber()
console.log(value)*/

/*function items(egg:number,butter:number,salt:number,sugar:number):number{
return egg+butter+salt+sugar
}
let value=items(1,4,6,8)
console.log(value)*/

//default parameter 

/*function ingredient(egg:number=1,butter:number=3,salt:number=8):number{
    return egg+butter+salt
    }
    let value=ingredient()
    console.log(value)*/

/*function ingredient(egg:number=1,butter:number=3,salt:number=8):number{
return egg+butter+salt
}
let value=ingredient(1,3,7)
console.log(value)

/*function halffry(salt:number,...ingredient:number[])
{
console.log("salt"+salt)
console.log(ingredient)
}
halffry(1,3,2,4,5,7,8,9)
halffry(1,3,2,4,5,7,8,9)*/

/*const halffryegg=()=>1+2+3


let response=halffryegg()
console.log(response)

const egg=(salt:number,masala:number):number=>(salt+masala)
let value=egg(2,8)
console.log(value)

const items=(salt:number,masala:number,sugar:number):number=>(salt+masala+sugar)
let values=items(4,3,2)
console.log(values)*/


/*const addnumer=()=>{
    return 1+4
}
 let value=addnumer()
 console.log(value)*/

/*const halffry=(a:number,b:number,c:number):number=>{
let cocked=a+b+c
return cocked
}
 let value=halffry(1,3,6)
 console.log(value)*/

 

 // Anonymous Function
//  let halffryegg=function(){
//     let cocked=1+2+1.5;
//     console.log(cocked)
//  }
//  halffryegg()

//  let a=function(x,y){
// let b=x+y
// console.log(b)
//  }
//  a(10,29)



/*const arr1:string[]=["UBAID","AHSAN","ANUS","HAMZA","FARHAN"]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==="ANUS"){
        console.log(arr1[i]+"Friend")

    }
    else{
        console.log(arr1[i])
    }
    
}
let Name:string="QAZI"
*/

//callback function

function qazi(Name,cb){
console.log(Name)
cb("ubaid")
}
function ubaid(Name){
console.log(Name)
}
qazi("QAZI",ubaid)




function greeting(name,cb){
    console.log('hello'+name)
    cb(name)
}

function goodbye(name){
    console.log("goodbye",name)
}
greeting("Qazi",goodbye)


function karachi(name,cb){
    console.log(name ,"Welcome to karachi")
    cb("Umair")
}

function lahore(name){
    console.log(name ,"Welcome to lahore")
}
karachi("Ubaid",lahore)

function pakistan(name,cb){
    console.log(name,"won tha match")
    cb("India")
}
function india(name){
console.log(name,"loss the match")
}
pakistan("Pakistan ",india)



let arr=[1,2,3,4,5,6]
arr.forEach(function(value,index){
    console.log(value,index)
})


//Pass by value (not another change)

//primitive data types main(7)

/*
1)number
2)boolean
3)string
4)null
5)undefine
6)symbol
7)bigint
*/

/*let mynumber="hello"
let anothernumber=mynumber
anothernumber="world"
console.log(mynumber)
console.log(anothernumber)*/

//pass by refference (bothe will be change)

// const Persons={
//     name:"ubaid",
//     depart:"CS", 
// }
// const anotherperson=Persons
// anotherperson.name="QAZI"
// console.log(person)
// console.log(anotherperson)

// pass by refference ko pass by value bnana he tw or nested ko be

let biryani={
    name:"sindhi biryani",
    quantity:20,
    ingredient:{
        chicken:1000,
        salt:"1tbsp",
        spices:["1","2"]
    },
};

let anotherbiryani={
    ...biryani,ingredient:{...biryani.ingredient}
};
anotherbiryani.ingredient.salt="2tbsp"
console.log("Biryani",biryani)
console.log("AnotherBiryani",anotherbiryani)

const UNiversity={
    name:"sir syed uni",
    depart:"CS",
    year:2022,
    teacher:{
        engtech:"SALMAN",
        urdutech:"HAMZA",
        teachers:[1,2,3,4,6]

    },
};
 const Anotheruniversity={
     ...UNiversity,
     teacher:{...UNiversity.teacher},
 }

Anotheruniversity.teacher.engtech="UBAID"
console.log("University",UNiversity)
console.log("anotheruniversity",Anotheruniversity)

//2nd method of pass by refference to pass by value

const University={
    name:"sir syed uni",
    depart:"CS",
    year:2022,
    teacher:{
        engtech:"SALMAN",
        urdutech:"HAMZA",
        teachers:[1,2,3,4,6]

    },
};

const anotheruniversity=structuredClone(University)
anotheruniversity.teacher.engtech="UBAID"
console.log("University",University)
console.log("anotheruniversity",anotheruniversity)