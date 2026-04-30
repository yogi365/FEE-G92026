// function login(userName,pass, callback){
//     setTimeout(() => {
//         if(userName=="a" && pass=="b"){
//         callback({userId:"1"})
//     }
//     }, 1000);
// }

// function fetchUserDetail(user,callback){
//     setTimeout(()=>{
//         callback({userName:"Abc"})
//     },1000)
// }

// function fetchOrder(userDetails,callback){
//     setTimeout(()=>{
//         callback(["order1",["order2"]])
//     },1000)
// }

// login("a","b",(user)=>{
//     fetchUserDetail(user.userId,(userDetails)=>{
//         fetchOrder(userDetails.userName,(order)=>{
//             console.log(order);
//         })
//     })
// })

// function newPromise(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(
//             ()=>{
//                 if(number%2==0) resolve("The number is even");
//         else reject("The number is odd");
//             } , 1000
//         )
//     })
// }
// var number = 12;
// var myPromise = Promise((resolve,reject)=>{
//         setTimeout(
//             ()=>{
//                 if(number%2==0) resolve("The number is even");
//         else reject("The number is odd");
//             } , 1000
//         )
//     })

// newPromise.then(
//     (message)=>{console.log(message)}  
// ).catch((err)=>{console.log(err)})

// console.log(newPromise(15))

// function login(userName, pass) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userName == "a" && pass == "b") {
//                 resolve({ userId: "1" })
//             }
//             else {
//                 reject("Invalid user");
//             }
//         }, 1000);
//     })

// }

// function fetchUserDetail(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ userName: "Abc" })
//         }, 1000)
//     })
// }

// function fetchOrder(userDetails) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["order1", ["order2"]])
//         }, 1000)
//     })
// }

// login("a", "b").then((user) => {
//     return fetchUserDetail(user)
// }).then((userDetails) => {
//     return fetchOrder(userDetails)
// }).then((orders) => {
//     console.log(orders)
// })

// const p1 = Promise.resolve("P1");
// const p2 = Promise.reject("P2");
// const p3 = Promise.resolve("P3");
// Promise.all([p1,p2,p3]).then((value)=>{
// console.log(value)
// }).catch((err)=>{
//     console.log(err)
// }).finally((message)=>{console.log("it will always run")})

// Promise.allSettled([p1,p2,p3]).then((value)=>{
// console.log(value)
// }).catch((err)=>{
//     console.log(err)
// }).finally((message)=>{console.log("it will always run")})


// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("P1 Resolved")
//     },1000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("P2 error")
//     },500)
// })

// Promise.any([p1,p2]).then((message)=>{
//     console.log(message);
// }).catch((err)=>{console.log(err)})

var x = 1;

try{
    //statements that can generate error

    // console.log(x);

    if(x!=10){
        throw new Error("X is not 10")
    }
    else{
        console.log("10")
    }
    console.log("hello")
}
catch(err){
    console.log(err);
}


// console.log(x);

