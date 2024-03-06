// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);
//all the above will work good

var c=300;// this c will update by varible inside the if
let a=100;//this will work good
if(true) {
    let a=10;
    const b=20;
    var c=30;
}

//console.log(a);a is not defined because a is in side if
//console.log(b);b is not defined because a is in side if
//console.log(c);=>30 which is not good because 
// c is defind in side if then it have to show error
// not it work vecause var type is accessible out side
// of scope

function one(){
    const userName = "hitesh";

    function two(){
        const website = "youtub";
        console.log(userName);
    }

    //console.log(website);//website is not defined
    two();//hitesh
}

//one();


if(true){
    const userName="Ashish";
    if(userName==="Ashish"){
        const website = " youtube";
        //console.log(userName+website);//Ashish youtube
    }

    //console.log(website);//website is not defined
}

//console.log(userName);//userName is not defined

//+++++++++++++++++ interisting ++++++++++++++++++++++
//addOne ko function ke upar kahi se v call kar skta hu
// kyo ki usko as a function declare kiya gya hi
function addOne(Num){
    return Num+1;
}

console.log(addOne(5));


// addTwo ko function ke upar call karne pe error aata
//hi kyo yaha addTwo function ke sath sath ek varible 
// v hi jo function ke upar diclare nahi hi
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5));