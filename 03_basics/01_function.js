function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

//sayMyName();
/*
A
S
H
I
S
H
*/

function addTwoNumbers(number1,number2){
   //console.log(number1 + number2);
}

//addTwoNumbers();//NAN
//addTwoNumbers(3,4);//7
//addTwoNumbers(3,"4");//34 convert in strings

//const result=addTwoNumbers(3,5);
//console.log("result: " ,result);//undefinsd because we not  return any value

function addTwoNumber(number1,number2){
    let result=number1 + number2;
    return result;
}

const result=addTwoNumber(3,5);

//console.log("result :",result);//result: 8

// function logingUserMessage(UserName){
//     return `${UserName} just loggrd in`;
// }

//logingUserMessage("hitesh");//nothing will print we have to save
// result in any variable ya print krna prega

//console.log(logingUserMessage("Ashish"));
//Ashish just loggrd in

//console.log(logingUserMessage());
//undefined just loggrd in because we not pass any value
//to avoid this we have to check first user name is avalible or not

function logingUserMessage(UserName){
    if(UserName===undefined){
        console.log("plese enter username");
        return;
    }
    return `${UserName} just loggrd in`;
 }

 //console.log(logingUserMessage("Ashish"));
//Ashish just loggrd in

//console.log(logingUserMessage());
//plese enter username
//undefined

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500));
//[ 200, 400, 500 ]

const user={
    Username: "Ashish",
    price: 199


}

function handleObject(anyObject){
    console.log(`username is ${anyObject.Username} and price is ${anyObject.price}`);
}

//handleObject(user);

handleObject({
    Username:"kumar",
    price:399
})

const myNewArray = [200,400,500,600];

function retyurnSecondvalur(getarray){
    return getarray[1];
}

//console.log(retyurnSecondvalur(myNewArray));

console.log(retyurnSecondvalur([200,800,500,8494]));