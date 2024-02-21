const accountId=144553
let accountEmail="ashish845429@gmail.com"
var accountPassword="12345"
accountCity="Bihar"
let accountState;

// accountId=2  //not allowed to change const data
accountEmail="ashish@123"
accountPassword="845429"
accountCity="motihari"
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/