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

function newPromise(number){
    return new Promise((resolve,reject)=>{
        setTimeout(
            ()=>{
                if(number%2==0) resolve("The number is even");
        else reject("The number is odd");
            } , 1000
        )
    })
}

newPromise(15).then(
    (message)=>{console.log(message)}  
).catch((err)=>{console.log(err)})

// console.log(newPromise(15))