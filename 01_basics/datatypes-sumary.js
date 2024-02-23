"use strict"

// primitive

// 7 types: String,Number,Boolean, null,undefined, Symbol->use to name uniqe any value, BigInt

const score=100 //Number
const scoreValue=100.3 //Number

const isLoggedIn=false//Boolean
const outSideTemp=null//null
let userEmail//undefined

const id = Symbol('123')

const anotherId= Symbol('123')


//console.log(id==anotherId);//false

// const bigNUmber = 467879543983045847 to large gratter than bigg int

const bigNUmber = 467879543983045847n 
// after adding n in end it will beacome biggInt


// Referense (Non perimitive)

// Types: Array, Objects, Function

//Array
const heros=["shaktiman","naagraj","doga"];

//object
let myObj={
    name: "Ashish",
    age: 22
}


//function

const myFunction = function(){
    console.log("Hello World");
}

//for check data type we use typeOf() function;

//console.log(typeof bigNUmber);


//************************************************************ */
// Stack Memory(primitive data type) here we send copy of value

let myName="ashish"

let anotherName= myName//here we give copy of myname not reference
anotherName="kumar" //here anotherName change but nat myName
//console.log(myName);//Ashsi
//console.log(anotherName);//kumar

// Heap(Non-primitive data type) memory here we send reference of value

let userOne={//object
    email: "ashish@gmail.com",
    upi: "user@ybl",
}

let userTwo=userOne// here usertwo get reference of userOne

console.log(userTwo.email);//"shish@gmail.com"

userTwo.email="kumar@gmail.com"//email of userOne and emai of UserTwo both are chane .

console.log(userOne.email);//"kumar@gmail.com"
console.log(userTwo.email);//"kumar@gmail.com"