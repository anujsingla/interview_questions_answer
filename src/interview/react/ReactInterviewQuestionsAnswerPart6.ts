/*
Content: Anuj Singla

https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers


Question: How to do deep and shallow object copy in Javascript?

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

References:
https://codesandbox.io/s/gallant-dust-xzc6kd?file=/src/shallowdeepcopy.ts
https://github.com/anujsingla/interview_questions_answer/blob/main/src/utils/copyObjectUtils.ts
https://lodash.com/docs/4.17.15#cloneDeep

Question: What is state management?

Answer: State management is very important part of web application.
It means how our application handles data in the component, share data
between components.
Suppose if we fetch the data from the server, how we will share between
components and manage state like loading, fetching and error state.

There are multiple way to manage state in React app:
useState Hook
Context
Redux
MobX
Recoil

There are multiple factor to decide the state management:
- Size and complexity of the app
- How many components need to share the data

small state - useState, context
medium state - Recoil
Large state - Redux, MobX

Question: What is MobX state management library?

Answer: It is an open source state management library. It helps to manage library
in the web application. We can use this library in the large application.
It is same as Redux.

It is standalone and does not depend on any frontend library or framework.
It can work with any framework like React, Vue, Angular.

There are multiple concepts in MobX
1. state - state is the data that drives your application. State can be an object,
array or primitive value.
Store - The main responsiblity of the store is to move
the logic and state out of components that can be used
in multiple components.

Store is any data structure like array, object or primitive value. We should
marked all the value in the store as "observale" so that MobX can track them.

2. Action - Actions are methods that manipulate and update the state.
We can trigger action on user events, backend data pushes, scheduled events.

3. observer - it is an higher order component. we use observer in the react component. It will
help to render the component or update the UI if state
changes.

https://mobx.js.org/README.html
https://github.com/winterbe/mobx-logger

*/

export {};
