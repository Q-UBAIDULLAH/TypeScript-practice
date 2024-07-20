
const person={
    name:'ubaid',
    addres:"karachi",
    age:'20'
}
console.log(person['addres'])
// console.log(person.city="Islamabad") you can not insert new value by this method
console.log(person["city"]="Islamabad")//you can
console.log(person)


interface qazi{
    name:string,
    class :string,

}



//INTERFACE

interface Student{
    name:string,
    class:number,
    func:()=>void,
    hobbies:string[],
    socialmedia:{
        S1:string,
        S2:string
    }
    }
    const sTudent:Student={
        name:"Bilal",
        class:11,
    func:()=>{
        console.log("hello world")
    },
    hobbies:["Mern Stack","Full Stack","Andoid"],
    socialmedia:{
        S1:'Facebook',
        S2:'Instagram'
    }
    }
    console.log(sTudent.func())
    
    // Type Syntax
    


    type empidtype=number|string
    type empnametype=string
    type empagetype=number
    
    type employetype={
        emid:empidtype,
        emname:empnametype
        emage:empagetype
    
    }
    let employee1:employetype={
        emid:123,
        emname:'ubaid',
        emage:43
    }
    console.log(employee1)
    
    let employee2:employetype={
        emid:"123",
        emname:'javed',
        emage:54
    }
    console.log(employee2)
    
    
    // TYPE
    
    type rolltype=number
    type teachertype=string
    type sectiontype=string
    
    type schooltype={
    roll:rolltype,
    teacher:teachertype,
    section:sectiontype
    }
    let school:schooltype={
        roll:27,
        teacher:"Asif",
        section:"D"
    }
    console.log(school)
    
    
    
    //Interface
    interface College{
        year:number,
        sec:string,
        location:string
    
    }
    const college:College={
        year:123,
        sec:"C",
        location:"karachi"
    }
    console.log(college)
    
    // Type
    type hometype=number
    type streettype=number
    type addresstype=string
    
    type resident={
    home:hometype,
    street:streettype,
    address:addresstype
    }
    
    
    const Karachi:resident={
    home:32,
    street:12,
    address:"M67"
    }
    console.log(Karachi)

// it is standard index signature
//interface numberarray{
 //   [index:number]:number;
//}
//const mynumber:numberarray=[1,2,3,4,5]
//console.log(mynumber)

/*interface numberarray{
    [index:number]:number;
}
const mynumber:numberarray=[1,2,3,4,5]
console.log(mynumber)*/

/*interface stringarray{
    [index:number]:string;
}
const mystring:stringarray=["qazi","ubaid","abdullah"]
console.log(mystring)*/


interface bike{
    [index:number]:string|number;
}
const mybikes:bike=["70","125","150",200,"yamaha"]

console.log(mybikes)
//also we can define particular index value 

interface Myarray{
    0:number;
    1:string;
    2:number;
    3:number;
    4:string
}

const myarray:Myarray=[6,"qazi",3,4,"ubaid"]
console.log(myarray)

interface cars{
    0:string;
    1:number;
    2:string;
    3:number;
}
const mycars:cars=["Audi",2020,"Civic",2024]
console.log(mycars)



type namess=[string,number]
type school={
    0:string;
    1:number
}
const myschool:school=["hanzala",2]
console.log("type",myschool)


type home=string|number
type hometype={
    [index:number]:home
}
const myhome:hometype=[1,"qazi",23,"javed"]
console.log(myhome)


type list=[]
type mylist={
    0:string;
    1:number;
    2:string
}
const newlist:mylist=["www",2,"aaa"]
console.log(newlist)

type bikes=(string|number)[]
const newbikes:bike=[1,"23",2,"#2"]
console.log(newbikes)

type mobile=[string,number,string]
const mymobile:mobile=["2",3,"7"]
console.log(mymobile)
