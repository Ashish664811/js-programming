//Date

let myDate=new Date();//type of myDate is object

//console.log(myDate.toString());//day and date was right bu aage pta nahi kya print kar rha hi

//console.log(myDate.toDateString());// print date and day

//console.log(myDate.toISOString());

//console.log(myDate.toJSON());

//console.log(myDate.toLocaleDateString());// like MM/DD/YYYY

//thair are different way to print date

//let myCreatedDate=new Date(2023,0,23);//we can create our date
//console.log(myCreatedDate.toDateString());

//Date(2023 ,0 ,23)=>Date(yera,month,date)=>month start with 0 to 11.

//let myCreatedDate=new Date(2023,0,23,5,3);
//Date(2023,0,23,5,3)=>Date(yera,month,date,hour,minute);

//console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("2023-01-14");
//Date("2023-01-14")=>Date("year-month-date");

//console.log(myCreatedDate.toLocaleString());

// and thare are different way to print date and inisilize date


//+++++++++++++++++++++++++ TimeStamp ++++++++++++++++++++++++++

let myTimeStamp = Date.now();

//console.log(myTimeStamp);// output in mili second

//console.log(myCreatedDate.getTime());
// print time in milli secon from myCreatedDate to till now


//console.log(Date.now()); // av ka date print karega but in milli sw=econd


//to convert in second we divide with 1000

//console.log(Date.now()/1000);// output in decimal to avoid decimal we use floor or ceil any one

//console.log(Math.ceil(Date.now()/1000)); //by using ceil

//console.log(Math.floor(Date.now()/1000));// by using floor


let newDate=new Date();
//console.log(newDate); // we can take many information of date by uing newDate.anyFunction();

//console.log(newDate.getDate());// print only date

//console.log(newDate.getDay());//print day if sunday then=>0 and monday=>1......

// to make 1-base index use newDate.getDay()+1;

//console.log(newDate.getMonth());//print month january=>0 abd december=>11;

//to make 1-base index use newDate.getMonth()+1;

// to many function to take information from date.

//we can customise mysely newDate.toLocalString();



console.log(newDate.toDateString());
let todayDate = new Date(2024,2 ,25)
newDate.toDateString('default', {
    weekday:"long",
})

console.log(todayDate.toDateString());
