const marvel_heros=["thor","Ironman","Spiderman"];

const dc_heros=["supperman","flash","batman"];


//++++++++++++++++++++++++++ .push()++++++++++++++++++++++++++++++++++++++++


//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//[ 'thor', 'Ironman', 'Spiderman', [ 'supperman', 'flash', 'batman' ] ]


//console.log(marvel_heros[3]);
//[ 'supperman', 'flash', 'batman' ]

//console.log(marvel_heros[3][1]);
//flash

//++++++++++++++++++++++++++ .concat() +++++++++++++++++++++++++++++++++++++++

//const all_heros = marvel_heros.concat(dc_heros);

//console.log(all_heros);
// [ 'thor', 'Ironman', 'Spiderman', 'supperman', 'flash', 'batman' ]



//++++++++++++++++++++++++++ sprade [...marvel_here,...dc_hero]++++++++++++++

//const all_Heros= [...marvel_heros,...dc_heros];// syntax of sprade;
// sparde har element ko sprade kar deta hi means alag alag kar deta hi.

//console.log(all_Heros);



const anothr_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = anothr_array.flat(Infinity);
// sabhi recursive array(array ke andar array )ko flate yani ek single
// array me convert kar ke dega.

console.log(real_another_array);

//output

/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Ashish"));//check karega ki "Ashish" array hi
// ya nahi agar hoga to True return karega nahi to false return karega
// output=>false  

console.log(Array.from("Ashish"));// "Ashish" ko array me convert kar dega.
// [ 'A', 's', 'h', 'i', 's', 'h' ]


//console.log(Array.from({name:"Ashsih"}));
// it interesting case yaha array me convert nahi karega kyo ki aapko btana 
//parega ki key ko array bnana hi ya value ko. 
//output=> [] empty array



//+++++++++++ conver multiple varible in array +++++++++++++++++++++++++++++

let score1=100;
let score2=200;
let score3=300;
let score4=400;

console.log(Array.of(score1,score2,score3,score4));
//Returns a new array from a set of elements
// output=> [ 100, 200, 300, 400 ]
