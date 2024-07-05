
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

