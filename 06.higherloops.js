// const arr =[1,2,3,45,]

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "jai hooo"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);

// }

// Maps

// const map = new Map()
// map.set('In', "INDIA")
// map.set('fr', "US")
// map.set('uk', "RUSIAN")
// map.set('In', "INDIA")

// //console.log(map);

// for (const key of map) {
//     console.log(key);

// }

// const myObject ={
//     'game1':'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key, value] of object) {
//     console.log(key, '-', value);

// }

// const myObject ={
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// const programing =["js", "opps", "java", "cpp", "rb"]
// for (const key in programing) {
//    console.log(programing[key]);
// }

// const coding = ["js", "java", "python", "cpp", "ruby"];

// coding.forEach((item) =>{
//        console.log(item);
// })

//

// function printMe(item) {
//     console.log(item);

// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);

// })

// const mycoding = [
//   {
//     languageName: "javascript",
//     languageFileName: "js",
//   },

//   {
//     languageName: "java",
//     languageFileName: "java",
//   },

//   {
//     languageName: "python",
//     languageFileName: "py",
//   },
// ];

// mycoding.forEach((item) => {
//   console.log(item.languageName);
// });


// const coding = ["js", "java", "python", "cpp", "ruby"];

// const values =coding.forEach ((item) =>{
//     //console.log(item);
//     return item
// })
// console.log(values);


//const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) =>{
//     return num >4

// })
//console.log(newNums);


// const newNums =[]
// myNums.forEach((num) =>{
//     if (num >4) {
//         newNums.push(num)  
//     }

// })
// console.log(newNums);

//const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// const addnum =myNumbers.map((num) =>{
//     return num + 10;
// })

// console.log(addnum);


// const nummalti =myNumbers.forEach((val) =>{
//     return val + 5;
// })
// console.log(nummalti);


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nummalti = [];
// myNumbers.forEach((val) => {
//     nummalti.push(val + 5);
// });
// console.log(nummalti);  // Output: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// const newNums =myNumbers
//             .map((num) => num * 10 )
//             .map((num) => num + 1)
//             .filter((num) => num >= 40)

// console.log(newNums);


//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNumbers = [1, 2, 3]

//  const mytotal =myNumbers.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval} `);
//       return acc + currval

//  }, 0)

// console.log(mytotal);
