// array
const myArr=[0,1,2,3,4,5];
const superHero=["shaktiman","naagraj"];

const myArr2= new Array(1,2,3,4,5); 

//console.log(myArr[4]);

// myArr.push(6);//add element at last
// myArr.push(7);

// myArr.pop();//remove the last element

//myArr.unshift(9);
//add element at first means shift all element by one to right.

//myArr.shift();
//remove first element means shift all element by one to left

//console.log(myArr.includes(9));
//check that given element is present in array of not is yes then return TRUE else return FALSE.

//console.log(myArr.indexOf(3));
// return index of given element if element present otherwise return -1;

const newArr=myArr.join()//"0,1,2,3,4,5" 
//all element of myArr are join in newArr but convert into String including (,) also;

//console.log(myArr);
//console.log(newArr);//output=>"0,1,2,3,4" string type
//console.log(newArr.charAt(1));//=>","


//++++++++++++++ slice and splice++++++++++++++++++++++++++++ 


console.log("A " ,myArr);
const mN1=myArr.slice(1,3);
// slice take a coppy of array from index 1 to 2 last endex will not included there main array remain same
console.log(mN1);
console.log("B ", myArr);

const mN2=myArr.splice(1,3);
// splice take the slice of array from index 1 to 3 and chang the main arry from [0,1,2,3,4,5] to=> [1,4,5]; 

console.log(mN2);
console.log("C" ,myArr);

//after slice and splice final output is

/*

A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
C [ 0, 4, 5 ]

*/








