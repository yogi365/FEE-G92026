// const arr = [23,15,16,18,12,3,78];

// function square(value){
//     return value*value;
// }


// const squaredArray = arr.map(square)
// console.log(squaredArray)
// console.log(square(22))

// function customMap(array,cb){
//     var newArr = [];
//     for(let ele of array){
//         newArr.push(cb(ele))
//     }

//     return newArr;
// }

// console.log(customMap(arr,square))

// const newArr = arr.map((ele,index,array)=>ele*ele*ele)

// const newArr = arr.filter((ele)=>{
//     if(ele%2==0){
//         return true;
//     }
//     return false;
// })


// const newArr = arr.find((ele)=>ele%2==0)


const students = [
    { name: 'Alice Johnson', id: 1, batch: 'A' },
    { name: 'Bob Smith', id: 2, batch: 'B' },
    { name: 'Charlie Brown', id: 3, batch: 'A' },
    { name: 'Diana Prince', id: 4, batch: 'C' },
    { name: 'Eve Wilson', id: 5, batch: 'B' },
    { name: 'Frank Miller', id: 6, batch: 'A' },
    { name: 'Grace Lee', id: 7, batch: 'C' },
    { name: 'Henry Davis', id: 8, batch: 'B' },
    { name: 'Ivy Martinez', id: 9, batch: 'A' },
    { name: 'Jack Taylor', id: 10, batch: 'C' },
    { name: 'Karen White', id: 11, batch: 'B' },
    { name: 'Leo Anderson', id: 12, batch: 'A' },
    { name: 'Mia Thomas', id: 13, batch: 'C' },
    { name: 'Noah Jackson', id: 14, batch: 'B' },
    { name: 'Olivia Harris', id: 15, batch: 'A' },
    { name: 'Peter Clark', id: 16, batch: 'C' },
    { name: 'Quinn Lewis', id: 17, batch: 'B' },
    { name: 'Rachel Young', id: 18, batch: 'A' },
    { name: 'Sam Allen', id: 19, batch: 'C' },
    { name: 'Tara Scott', id: 20, batch: 'B' }
];

// const newArr = students.find(student=>student.id==12);

// const newArr = students.filter(student=>student.batch.toLowerCase()=="a")

// console.log(newArr);

const arr = [23,15,16,18,12,3,78];

// arr.sort((a,b)=>b-a)

// console.log(arr)


const sum = (accumulater,curentValue)=>accumulater+curentValue
var a = arr.reduce(sum,100)
console.log(a)