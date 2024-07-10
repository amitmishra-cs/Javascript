// singleton 

// object 

// const mySym = Symbol("Key1")


// const Jsuser ={
//     name: "Mishra Ji ",
//     "full name": "Amit Mishar",
//     [mySym]: "myKey1",
  
//     age: 18,
//     Location: "Jaipur",
//     email: "mishravieat@.com",
//     isLoggedIn: false,
//     LastLoginDays: ["Monday", "saturday"]
// }

// console.log(Jsuser.name);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);


// Jsuser.email ="mishravirat@.com"

// Object.freeze(Jsuser)

// Jsuser.email ="amitmishragoogle.com"
// // console.log(Jsuser);

// Jsuser.greeting = function(){
//     console.log("hello mishra ");
// }

// Jsuser.greetingTwo = function(){
//     console.log(`hello mishra ji kase ho, ${this.name} `);
// }


// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());



//LECTURE 17 ***********************************

// const tinderUser = new Object()

const tinderUser ={}

 tinderUser.id ="123abc"
 tinderUser.name ="sami"
 tinderUser.isLoogedIn = false


// console.log(tinderUser);

const regulaurUser ={
    email: "amit@.com",
    fullName:{
        userFullName:{
            firstname: "hitesh",
            lastname: "mishra"
        }
    }
}

//console.log(regulaurUser.fullName.userFullName.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}


//const obj3 ={obj1 , obj2}
const obj3 =Object.assign({},obj1, obj2, obj4)
//console.log(obj3);


const users =[
    {
       id: 1,
       email: "mishraamit@gmail.com"
    },
    {
        id: 1,
        email: "mishraamit@gmail.com"
     },
     {
        id: 1,
        email: "mishraamit@gmail.com"
     },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwmProperty);


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

//course.courseInstructor

const {courseInstructor} =course
console.log(courseInstructor);


// {
//     "name":"mishra",
//     "coursename": "js in ",
//     "price": "zero"
// }





