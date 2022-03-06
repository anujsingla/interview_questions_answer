// https://codesandbox.io/s/gallant-dust-xzc6kd?file=/src/shallowdeepcopy.ts:0-1852

// let var1 = 7;
// let var2 = var1;

// console.log(var1, var2);

// var1 = 10;
// var2 = 12
// console.log(var1, var2);

// const obj1 = {
//   name: "Anuj",
//   rollNo: 7
// };
// const obj2 = obj1;

// console.log(obj1, obj2);

// obj2.name = 'Changed value'
// console.log(obj1, obj2);

// shallow copy

// const obj1 = {
//   name: "Anuj",
//   rollNo: 7,
//   details: {
//     subject: "React"
//   }
// };

// spread operator
// const obj2 = { ...obj1 };
// console.log(obj1, obj2);
// obj2.name = "Changed value";
// obj2.details.subject = "Javascript";
// console.log(obj1, obj2);

// Object.assign method

// const obj2 = Object.assign({}, obj1);
// console.log(obj1, obj2);
// obj2.name = "Changed value";
// console.log(obj1, obj2);
// obj2.details.subject = "Javascript";
// console.log(obj1, obj2);

// const var1 = [1, 2, 3, 4, 5];
// // const var2 = var1.slice();
// const var2 = Array.from(var1);
// console.log(var1, var2);
// var2[2] = 6;
// console.log(var1, var2);

// deep copy

// const deepCopyFn = (obj: any) => {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   let outObj: any = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     const value = obj[key];
//     if (typeof value === "object") {
//       outObj[key] = deepCopyFn(value);
//     } else {
//       outObj[key] = value;
//     }
//   }
//   return outObj;
// };

// const obj1 = {
//   name: "Anuj",
//   rollNo: 7,
//   details: {
//     subject: "React"
//   }
// };

// const obj2 = deepCopyFn(obj1);
// console.log(obj1, obj2);
// obj2.rollNo = 10;
// console.log(obj1, obj2);
// obj2.details.subject = "Javscript";
// console.log(obj1, obj2);

const arr1 = [
  1,
  2,
  3,
  {
    details: {
      subject: "React",
    },
  },
];

const arr2 = deepCopyFn(arr1);
console.log(arr1, arr2);
arr2[3].details.subject = "Javascript";
console.log(arr1, arr2);

/*

How to do deep and shallow object copy in Javascript?

Answer:

Primitive data types:
Number, string, boolean, null, undefined
These types are tightly coupled with the variable.
When you make a copy it will be a real copy.
let var1 = 10;
const var2 = var1;

var1 = 7;
console.log(var1); 7
console.log(var2); 10

Composite data types: Objects and array.

If we try to copy an object from variable 1 to second
variable then objects creates a pointer reference to that value.
If we make any changes in the second variable, it will change in the first
variable also.
To solve this problem, we do shallow or deep copy.

shallow copy - we copy first level of the object and it is
working fine for an array or object containing primitive
values. Nested object (subvalues) connected to the original
variable.

We will check practically with different methods
- spread operator (...)
- Object.assign()
- Array.from() - used for array.
- concat() - used for array.
- slice method - used for array.

deep copy - we copy first and nested object inside object.
It is working fine for any types of objects.
All of the values of the new variable are copied and disconnected
from the original variable.

- lodash library method
- JSON.parse() && JSON.stringfy() method
- manual (custom) method for deep copy
*/
