// singleton=> agar objct licterals se defined karte hi to singlaton nahi bnta
//hi agar constructor se agar banega to singleton bnata hi
//Object.create=> esko hi bolte hi constructor ke object bnana


//object literals

const sym= Symbol("key1");

// object ke andar key and value ka v chacker hota hi
const jsUser={
    name:"Ashish",
    //sym:"skey1",//this is not symbol type
    [sym]:"mykey1",//noe this is symbol type
    "full name":"Ashish kumar",// eko bina [] ke use hi nahi kar skte hi
    age:18,
    location:"bihar",
    email:"ashish@gmail.com",
    isLoggedIn:false,
    lastLoginDayd:["monaday","saturday"]

}

// there are two type to track object 
// system key ko bydefault srting lete hi to agar aap (.) ka use kar rehe hi
// to key ko aise hi likh skte hi but agar aap square bracket [] ka use kar 
// rahe hi to aapko key " " me pass karna prga
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);//esko bina [] ka use hi nahi kar skte hi
//console.log(jsUser.sym);//but this is not symbol type
//console.log(jsUser[sym]);//this is right way to use symbo type 


//chane object value

jsUser.email="ashish845429@gmai.com";

//console.log(jsUser["email"]);

//want to lock value of object no one can chane value
//then freeze object

//Object.freeze(jsUser);//now no one can jhange object value

//console.log(jsUser["email"]);

//jsUser.email="hejskfnkjnkrw@kenkjk";//but object is freeze so email
// can not change

//console.log(jsUser["email"]);//output=>ashish845429@gmai.com
//not change

//console.log(jsUser);

/*

{
  name: 'Ashish',
  'full name': 'Ashish kumar',
  age: 18,
  location: 'bihar',
  email: 'ashish845429@gmai.com',
  isLoggedIn: false,
  lastLoginDayd: [ 'monaday', 'saturday' ],
  [Symbol(key1)]: 'mykey1'   =>> behave like symbol type
}

*/

//want to add function in object

jsUser.greeting=function(){
    console.log("hello js user");
}

jsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}

//console.log(jsUser.greeting);//output=>[Function (anonymous)] because
//greeting is function
//so we have to use like  jsUser.greeting();

jsUser.greeting();//here we call function by object so here 
//output=>"hello js user"

jsUser.greetingTwo();//here we call function by object so here 
//output=>"hello js user Ashish"
