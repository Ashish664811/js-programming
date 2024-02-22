let score="33abc"

//console.log(typeof score);

//console.log(typeof(score));

let valueInNumber=Number(score)

//console.log(typeof valueInNumber);//type will convert in number
//console.log(valueInNumber);//but it will not pure number 
//valueInNumber will store NaN->not a number
//if score=null then valueInNumber=0;
//if score=undefined the valueInNumber=NaN;


//conversion in Number

//"33"=>33
//"33abc"=>NaN
//null=>0
//undefined=>NaN
//true=>1
//false=>0


//conversion in Boolean

let isLoggedIN="Ashish"

let booleanIsLoggedIn=Boolean(isLoggedIN)

//console.log(booleanIsLoggedIn);

//1=>true
//0=>false
//""=>false
//"any things"=>true


//conversion in string

let someNumber=33

let stringNumber=String(someNumber)

// console.log(typeof stringNumber);
// console.log(stringNumber);

//33=>"33"
//null="null"
//undefined="undefined"
//true=>"true"
//false=>"false"

//************************ Operation ****************************

let value=3
let negValue=-value
//console.log(negValue);

let str1="hello"
let str2=" Ashish"
let str3=str1+str2
// console.log(str3);

// console.log("1"+2);//output 12
// console.log(1+"2");//output 12
//console.log(1+2+"2");//output 32
//console.log("1"+2+2);//output 122

// console.log(true);// output true
// console.log(+true);//output 1
// console.log(false);//output false
// console.log(+false);//output 0
// console.log("");//output ""
// console.log(+"");//output 0

let num1,num2,num3
num1=num2=num3=2+2//(num1=4 ,num2=4 ,num3=4)
//but this is not good way to inisilized the value

let gameCounter=100
//gameCounter++;//post increment
++gameCounter;//pre increment
console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/#sec-abstract-operations