// var student = {
//     "first Name":"Hetain",
//     last_Name:"Kumar",
//     age:12
// }

// student.age = 24
// student.marks = 0;


// console.log(student)

// delete student.marks;
// console.log(student)


// var a = student;
// var b = {};
// console.log(a["first Name"]);
// a.marks = 20;

// console.log(student)

// var user = new Object();

var student = {
    "firstName":"Hetain",
    last_Name:"Kumar",
    age:12,
    address:{
        houseNo:89,
        street:"Something something",
        city:"chandigarh"
    }

}
// student.address.city = "Panchkula"
// var mark = student.marks[2];
// console.log(student)
// console.log(student.fullName)
// student.fullName()


// console.log("add" in student)
for(key in student){
    console.log(student[key])
}


// console.log(typeof student)
