//ForEach 
// const arr = [15,122,36,18,16,12];
// function iterateInForEach(ele,index,array){
//     array[index] = ele * ele;
//     // console.log(ele)
// }
// arr.forEach(iterateInForEach)

// console.log(arr);


//Custom ForEach
// function customForEach(arr,cb){
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i], i,arr)
//     }
// }

// customForEach(arr,iterateInForEach)


//Types of Functions

// function functionName(param1, param2){
//     //statements;
//     return param1;
// }

// functionName();


// const student = {
//     firstName:"Abhay",
//     lastName:"Singh",    
// }

// function updateStudentName(studentObj){
//         studentObj.middleName = "Kumar"
//         return studentObj;
// }

// console.log(updateStudentName(student))
// updateStudentName(student);
// console.log(student);


// var fun = (a,b)=>{

//     a = a*2;
//     return a+b;
// }   

// console.log(fun(8,9))



// function arithmeticOperations(num1,num2,operations){
//     operations(num1,num2)
// }

// arithmeticOperations(25,16,(a,b)=>a+b);


(
    function(){
        console.log("IIFE invoked")
    }    
)();