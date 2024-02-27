//const tinderUser = new Object();// empty object {}; bas esko singalton object bolte hi of

const tinderUser={};// empty object {}; both are same; or esko non singalton object bolte hi

tinderUser.id="123abs";
tinderUser.name="Ashish";
tinderUser.isLoggedIn= false;

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{         //nrsted object object ke andar object.
            firstName:"Ashish",
            lastName:"kumar"
        }
    }
}

//console.log(regularUser);
/*
  {
  email: 'some@gmail.com',
  fullName: { userFullName: { firstName: 'Ashish', lastName: 'kumar' } }
}
*/

//console.log(regularUser.fullName);

/*
{ userFullName: { firstName: 'Ashish', lastName: 'kumar' } }
*/

//console.log(regularUser.fullName.userFullName);

/*
{ firstName: 'Ashish', lastName: 'kumar' }
*/

//console.log(regularUser.fullName.userFullName.firstName);
/*
Ashish
*/

//console.log(regularUser.userFullName);
/*
undefined   because we directly not access userFullName first we have to access fuLL nama the useFullName.
*/


// ++++++++++++++++trying to combine object or marge object ++++++++++++++++

const obj1={1:"a",2:"b",3:"c"};

const obj2={4:"a",5:"b"};

const obj3 ={obj1,obj2};// yaha combine hoga but like object ke ander object;

//console.log(obj3);
/*
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'a', '5': 'b' }
}
*/

//const obj4 =Object.assign(obj1,obj2);//empty parenthesis are require but agar nahi v diya jay to output pe koi fark nahi parega
// (.asign())=> create a new object and return an object to obj4
//console.log(obj4);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b' }
*/

//console.log(obj1);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b' }

.assign() me agar empty parenthesis nahi diya jay to jo phla nobject hoga usme me savi object ko marge kar de rha hi  esliy empty parenthesis dena requird hi taki savi object ek empty object ke anadr marge ho jay.
*/

const obj5 =Object.assign({},obj1,obj2);

//console.log(obj5);

/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b' }
*/
//console.log(obj1);
/*
{ '1': 'a', '2': 'b', '3': 'c' }
*/

// for marge object manely we use Sprade oerator++++++++++++++++++++++++

const obj6={...obj1,...obj2,...obj3};
//console.log(obj6);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b' }
*/

const obj7={...obj1,...obj2,...obj3};

//console.log(obj3);

/*
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'a', '5': 'b' }
}
*/

//console.log(obj7);
/*
{
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'a',
  '5': 'b',
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'a', '5': 'b' }
}
*/

// data base se value aayga to array ke andar object aayga as example 

const users =[
    {
        id:1,
        emil:"shdjhj@gmail.com"
    },
    {
        id:1,
        emil:"shdjhj@gmail.com"
    },
    {
        id:1,
        emil:"shdjhj@gmail.com"
    }
]

//console.log(users[0].emil);//shdjhj@gmail.com

console.log(tinderUser);

console.log(Object.keys(tinderUser));
/*
Object.Keys() return all keys of object in an array
[ 'id', 'name', 'isLoggedIn' ]
*/

console.log(Object.values(tinderUser));
/*
Object.values() return all values of object in an array
[ '123abs', 'Ashish', false ]
*/


console.log(Object.entries(tinderUser));

/*
Object.entries() return all individual entries yani har key value pair ko alag alag arry me kar deta hi yani array ke andar array.
[ [ 'id', '123abs' ], [ 'name', 'Ashish' ], [ 'isLoggedIn', false ] ]
*/

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
/*
output=>true
.hasOwnProperty(property name) if property name is exist then return true otherwise return false. 
*/

console.log(tinderUser.hasOwnProperty('isLogged'));
/*
output=>false
.hasOwnProperty(property name) if property name is exist then return true otherwise return false. 
*/

