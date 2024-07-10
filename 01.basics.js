// const accountId =144354
// let accountEmail ="amitmishra@.com"
// var accountPass="123456"
// accountCity ="Lucknow"


// //accountId =2
// accountEmail ="virat@.com"
// accountCity="gd"
// accountPass="78799080"


// console.log(accountId);
// console.table([accountEmail, accountId, accountPass, accountCity])



// lectutrte 04

// "use strict"  // treat all js code as newer version 

// // alert( 3 + 3)  

// console.log( 3+3);

// number 
// bigint
// string => ""
// bolean => true or false
// nulll
// undefind =>
// symbol

// object 

// console.log(typeof"mishra");
// console.log(typeof null);
// console.log(typeof undefined);



// Lecture 06
// let score ="33"
// console.log(typeof(score));

//  let value =3
//  let negValue = -value
//  console.log(negValue);


// console.log(2 >1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2 ==1);
// console.log(2 !=1);



// console.log("2" > 1);
// console.log("02" > 1);


// console.log( null > 0 );
// console.log( null == 0);
// console.log( null >= 0);


// ===




// lecture =9
// Premative 
// both are danmic and  static 

// 7 types : string ,bolean, number ,nulll ,undefind ,symbol , bigint 


// non premative : array object functions 
//*************************************************************************************

// MEMORY OF JAVASCRIPT    STACK(primative )                HEAP(non primative) 



// LECTURE 11  ***************STRING 

// const name = "hitesh"
// const repocount =50

// // console.log( name + repocount + "value ");

// console.log(`hello my name is ${name} and my repo conut is ${repocount }`);

// const gameName = new String('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));



// LECTURE 12 MATH AND NUMBER 
//const score =1000;
//console.log(score);

//const blance = new Number(100)
// console.log(blance);

// console.log(blance.toString().length);
// console.log(blance.toFixed(2));

//const othernumber =123.8966
// console.log(othernumber.toFixed(3));

// const hundreds =1000000
// console.log(hundreds.toLocaleString('en-IN'));


// MATHS ***********************************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(7.77));
// console.log(Math.ceil(4.3));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(2,3,4,5,6));
// console.log(Math.random());
// console.log((Math.random()*10 )+1);

// const min =10
// const max =20

// console.log(Math.floor(Math.random() * (max- min + 1) + min ))


// LECTURE *****************************13 DATE AND TIME 

// let myDate = new Date()
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString()); 
// console.log(typeof myDate); 


//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-13")
let myCreatedDate = new Date("02-14-2023")      

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());