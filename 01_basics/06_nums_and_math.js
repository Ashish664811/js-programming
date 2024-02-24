const score=400
//console.log(score);
const balance=new Number(100)
//console.log(balance)

//console.log(balance.toString().length);//balance become string and length is 3

//console.log(balance.toFixed(3));//toFixed fix the number after decimal

const otherNumber=123.8966
//console.log(otherNumber.toPrecision(3))//124 give priority to before decimal then after decimal 

const hundreds=1000000

//console.log(hundreds.toLocaleString());//output 1,000,000 accouding to usa
//console.log(hundreds.toLocaleString('en-IN'));//output 10,00,000 according to india


//++++++++++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++++++++++
//console.log(Math);

//abs
//console.log(Math.abs(-4));// 4
//round
//console.log(Math.round(4.3));// 4
//console.log(Math.round(4.6));// 5

//ceiling
//console.log(Math.ceil(4.3));// 5
//console.log(Math.ceil(4.6));// 5

//floor
// console.log(Math.floor(4.3));// 4
// console.log(Math.floor(4.6));// 4

//random

//console.log(Math.random());// value between 0 to 1 but random
//console.log(Math.random()*10);//random value of 1 digit with decimal may be 0 also

//console.log(Math.floor(Math.random()*10) + 1)// random value of 1 digit
//+1 for avoid 0 aane wala case value is between 0 t0 11

const min=10
const max=20
//we want value from min to max s0
// Math.random() * (max - min +1)

console.log(Math.floor(Math.random() * (max - min +1)) + min);


