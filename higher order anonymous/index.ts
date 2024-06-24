// closures(kehte hen ise) innerfuntion apne bhar wale function ko access kr sakhta he
//higher order function
function outerfunction(numone){
    //innerfunction
return function(numtwo){ //anonymous function isko name be de sakhte hen
return numone+numtwo
}
   }
   let value=outerfunction(2)
   let innerfunction=value(3)
   console.log(innerfunction)

   function outside(numone){
    return function(numtwo){
     return numone+numtwo
    }
   }
   let outer=outside(20)(30)  //eksath dono call
   console.log(outer)
   /*let inner=outer(20)
   console.log(inner)*/


//hoisting
console.log(b)
   var b=10
   console.log(b)

//Anonymous function

var a=function(){    //isme ( let or const) se  bnana prega ye make sure krta he ke neche hi call kre
                   
console.log('hello world')
}
a()
ubaid()
function ubaid(){ //ye chl jaega opr call kroge tw 
console.log('Pakistan')

}