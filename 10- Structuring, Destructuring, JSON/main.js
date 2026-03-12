// var student = {
//     name:"Abc",
//     age:27,
//     contact:894564564,
//     address:{
//         city:"Mumbai"
//     }
// }

// console.log(student.address.city)

// var age = student.age;
// var name = student.name;
// var city = student.address.city;

// var {age,name,contact="Not Available"} = student;
// console.log(contact)


// var {city} = student.address;
// console.log(city)


// var name = "Some Values";
// var age = 45;
// var contact = 456123;

// var student = {name,age,contact};

// console.log(student)

// var arr = [25,36,19,20];

// var a = arr[0];
// var b = arr[1]
// var c = arr[2]
// var d = arr[3]

// var [a,,c,d] = arr;

// console.log(b)


// var a = 20;
// var b= 10;

// var temp = a;
// a=b;
// b=temp

// a = a+b
// b=a-b;
// a=a-b;

// var [a,b] = [b,a];


// var a = [1,2,33,4,6];
// var b = [2,5,6,8];

// var mergedArray = a.filter((ele,)=>!b.includes(ele));
// var mergedArray = [...b,...mergedArray]
// console.log(mergedArray.sort((a,b)=>a-b))


var student = {
    name:"abc",
    age:25
}

// var student = {
//     "name":"abc",
//     "age":25
// }


var a = JSON.stringify(student);

// console.log(typeof student);
// console.log(typeof a)

// console.log(student.name);
// console.log(a.name);

var parsed = JSON.parse(a);

console.log(parsed)