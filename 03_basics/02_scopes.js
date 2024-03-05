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