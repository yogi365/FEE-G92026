var student = {
    name:"Abhay",
    age:27,
    address:{
        city:"Raipur"
    }
}

// var a = student;
// a.name="Abc"
// console.log(student)
// console.log(a)

// var a = {...student}
// var a = Object.assign({},student)
// a.address.city="Raj"
// console.log(student)
// console.log(a)

//JavaScript Object Notation.

// var a = JSON.stringify(student);
// console.log(a);
// console.log(student);
// var b = JSON.parse(a);

// b.address.city="London"
// console.log(b)

// var a = structuredClone(student)

// console.log(a);
// console.log(student);


var arr = [1,2,[3,4,5]];
var a = [...arr];
a[2][0]= 20;
console.log(arr)