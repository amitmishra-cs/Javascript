// array it store data of array formet


//const array =[1,2,3,4,5,6]
//console.log(array[0]);

// const myArr =["mishra ji ", "virat ji"]
// const myArr2 = new Array(1,2,3,4,5,6,7)
//console.log(myArr2[2]);


// Array Methods 
// myArr2.push(8)
// myArr2.push(9)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()


// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(13));

// const newArr =myArr2.join()

// console.log(myArr2);
// console.log(newArr);


// SLICE SPLICE 

// console.log("A", myArr2);

// const myn1 =myArr2.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr2);

// const myn2 =myArr2.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr2);



const marvel_heroes =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash ", "batmanman"]

//marvel_heroes.push(dc_heros)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

//  const allheros =marvel_heroes.concat(dc_heros)
// console.log(allheros);


const all_new_heros =[...dc_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Mishra"));
console.log(Array.from("Mishra"));

console.log(Array.from({name: "mishra"}));

let score1 = 100
let score2 = 200
let score3  =  300

console.log(Array.of(score1, score2, score3));