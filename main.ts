//console.log("Hello World")

//declaring variable only _ and $ is allowed else nt allowed
//let can be resigned but same name can not be declear
//let userName = "Bisma"
//userName = "Javaria"
//const value not ressign
//const number = 123
// {} block scope
//const or let ka variable block scope hy
// if(true){
//     let age = 20
// }
// console.log(age, "age")

//define answer 
// let age = 20
// if(true){
//     let age = 15
//     console.log(age, "if age")
// }
// console.log(age, "age")

//main file ma  let or const ho tu globle scope or ager {} ma ho tu block scope

//creation phase jis variable ka name rakha 
//excecution phase read kerny ko

//data types
// let userName = "Bisma"
// let dob = 20
// let isLeadFaculty = true
//undefined typescript ki apni type hy
//let noValue = undefined; //ak variable jis ki kohe value define na ho tu undefined
//null 
//console.log(myName)// typescript error dy ga or java script ni dy ga
//premitive type
//let num = 20
//let num2 = num + 1
////////////////26
// ak variable ki value ka ander dosra varaible assign kiya
//console.log(num, "num")
//console.log(num2, "num2")

// let userName = "Bisma"
// userName = "Javaria"
///userName = "Manaheel"
//let userName2 = "Hooriya" // value reassign
//what is the out put of userName
//what is the output of userName2
//userName2 = userName 
//userName2 = `Miss ${userName}`

//number ko intiger bhe khaty hy
 
//bigend?//
//symbuls?emoji//

//non primitive
//obect ka under unlimmited keyvalues use ker sakhty hy
// let obj = {
//     name: "Bisma",
//     class: "Thursday"
// }
// let obj2 = obj
// obj2.heyThere = "sir zia"//java ma error ni dy ga
// obj.name = "hello world"
// console.log(obj, "obj")
//what is out put of obj.name
//a "Hello World"
//b "Sir Zia"
//c "Sir Daniyal Nagori"
//d "Bisma"

// let arr = ["bisma", "khanzadi", "javaria", "hooriya"] // mulltiple types store
// console.log(arr[5])// output undefined
// console.log(arr[-10])//output undefined
//console.log(arr)//output 3
//what is the length of arr
//index arry ki value excc ka liya use hota hy

// function helloWorld(){

// }
// const sayHello = () => {}

//syntax error
//letttt userName = "Bisma"
///reserve key word

//type error
//let age: number = 20
//age = "20"

//strong typeing
//let userName:string = "khanzadi"

//infernce type ko kud intelisence kerna

//let userName = "Bisma"

// if(true) {
//     console.log(userName)
// }

//block ka ander or block ka bahir ko accibility error khaty hy

//any 

//unknown ka sath typeof hota hy
let userName : unknown = "Bisma";// 1.23345555555555;

if(typeof userName === "string"){
    console.log(userName.toUpperCase())
}else if(typeof userName === "number"){
    console.log(userName.toFixed(2))
}