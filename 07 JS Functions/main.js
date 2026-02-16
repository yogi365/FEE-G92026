// function sum(a,b=0){
//     return a+b;
// }

// console.log(sum(2,6))

// function sum(b,...a){
//     console.log(b,a)
//     var add = 0;
//     for(let ele of a){
//         add+=ele
//     }
//     return add;
// }

// console.log(sum(2,3));

// var a = 10;
// function fun(a){
//   a=30;
// }

// fun(a);

// console.log(a);


// var student = {
//     firstName:"Abc",
//     age:27
// }

// function fun(obj){
//     console.log("obj",obj.firstName)
//    obj.firstName="Rahul"
// }
// console.log("studdent",student.firstName);
// fun(student);
// console.log("student",student.firstName);


// function fun({firstName,lastName}){
//     return firstName+" "+lastName
// }

// console.log(fun({fName:"Abc",lastName:"Xyz"}));

//iife - immediately invoking function.

// var a = 10;
// var b = 20;

// console.log(a+b)


// (
//     function(a,b){
//         console.log(a+b)
//     }
// )(9,6)


// function sum(a,b){
//     return a+b;
// }
// function diff(a,b){
//     return b-a;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// var operation ="*"
// if(operation=="+"){
//     console.log(sum(2,3))
// }
// else if(operation == "-"){
//     console.log(diff(6,9));
// }
// else if(operation=="*"){
//     console.log(multiply(2,3))
// }
// else if(operation=="/"){
//     console.log(divide(2,3))
// }
// ''

// function arithmeticOperations(a,b,operations){
//     return operations(a,b);
// }

// console.log(arithmeticOperations(6,2,(a,b)=>{return a*b*3}))



// console.log(this);

// function fun(a,b){
//     console.log(this)
// }
// fun(8,9)

// var a = ()=>{
//     console.log(this)
// }

// a();

// var student = {
//     firstName:"Abc",
//     lastName:"XYZ",
//     fullName:function(){
//         console.log(this.firstName)
//     }
// }

// student.fullName();


// function counter(){
//     var count=0;
//     count++;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

function counter(){
    var count=0;
    
    function increaseCount(){
        count++;
        return count;
    }
    
    return increaseCount;
}

var a = counter();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());

