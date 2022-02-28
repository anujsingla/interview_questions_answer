/*
Content: Anuj Singla

https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers


Question: How to compare object in Javascript and difference between
shallow and deep comparsion?

Answer: 
1. Referential equality
2. Manual comparison
3. Shallow Equality
4. Deep Equality

Referential equality:
We can compare primitive values (string, number, etc) with: 
- strict equality operator ===
- loose equality operator ==
- Object.is() function

If you want to compare object, above 3 methods only compare reference
of the object.
Example:
const obj1 = {
    name: 'Anuj'
}

const obj2 = {
    name: 'Anuj'
}
obj1 === obj1 => true
obj1 === obj2 => false // because both are different object instances.

Object.is(obj1, obj1); // => true
Object.is(obj1, obj2); // => false

Referential equality is useful when you would like to compare object
references, rather than their content.

Manual comparsion:

We compare object properties manually. We need to write the comparsion logic
It is easily to do for small object.

const obj1 = {
    name: 'Anuj'
}

const obj2 = {
    name: 'Anuj'
}

if (obj1.name === obj2.name) {your logic}

Shallow Equality:
In the shallow equality, we compare objects properties with strict equality
and will not compare deeper properites (nested object (object inside object)).
It is very fast comparision of the object.
Object properties order is not matters.

const obj1 = {
    name: "Anuj",
  };
  
  const obj2 = {
    name: "Anuj",
  };

  shallowCompare(obj1, obj2) return true

const obj1 = {
    name: "Anuj",
    details: {
      rollNo: 10
    }
  };
  
  const obj2 = {
    name: "Anuj",
    details: {
      rollNo: 10
    }
  };
shallowCompare(obj1, obj2) return false because nested object
are different object instances.

https://codesandbox.io/s/gallant-dust-xzc6kd?file=/src/index.ts

Deep Equality:

In the Deep equality, we compare objects with nested properties
otherwise it is same as shallow equality. We do recursive shallow
equality check on the nested objects.

const obj1 = {
    name: "Anuj",
    details: {
      rollNo: 10,
      subject: "react",
    }
  };
  
  const obj2 = {
    name: "Anuj",
    details: {
      subject: "react",
      rollNo: 10,
    }
  };
  
console.log("test", deepCompare(obj1, obj2));

Reference:
https://youtu.be/CrG4txLsZ_A
https://codesandbox.io/s/gallant-dust-xzc6kd?file=/src/index.ts
https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

Question: What are dependencies, devdependencies, peerdependencies in package.json?

Answer: 
Every web application app have a package.json file. It contains all the relevant
data (metadata) of the app. There are three types of dependencies that are
found.

dependencies: The libraries that project needs to work in production.
dependencies are required to run. Library that provides functions that is 
required in our code like react, react-dom, lodash.
We can add this by using this command: npm install <library name> or 
yarn add <library name>

These libraries have all or part of their code in the final bundles.
Libraries we can add like lodash, react, react-dom, axios, express etc.
"npm install" command will install dependencies.

devDependencies: The libraries that project need during development or releasing
like compiler take code and compile into javascript, test framework or
documentation generators.
dependencies only for development.
You can add devDependencies with command: npm install --save-dev <libraryname>
yarn add -D <library name>
"npm install" command will install devDependencies and if you do not want
to install devDependencies you can use "npm install --production".

You can add libraries like:
eslint, prettier, webpack, parceljs, babel, jest, storybooks, etc.

jest would normally be a devdependency because we don't need in production.

peerDependencies: It is used when you want to create and publish your own
library. In peer depdendency, you can add libraries which are required for
your library as a dependency.
It is not automatically installed.

Like, Suppose you have created one library (LibraryA) and you are using
lodash in that library. You want every MainProject who will use your
library(LibraryA) need to install lodash as a dependency. Then you can
mention lodash as a peer dependency in your package.json file.
If MainProject will not install lodash as a dependency, A warning will be
displayed while installing packages "npm install".

You can add peer dependency with this command "yarn add --peer peer-lib".
https://github.com/facebook/react/blob/main/packages/react-dom/package.json
https://github.com/facebook/react/blob/main/packages/jest-react/package.json

Reference:
https://youtu.be/jWMY4kwa1UI
https://nodejs.org/en/blog/npm/peer-dependencies/

Question: How react useEffect hook compare dependencies array values?

Answer: React uses "Object.is()" to compare dependencies array. React do
a comparison between each of the values to determine whether effect callback
should be called.
If you we provide an new object on every render, even if none of the
properties changed, effect callback called everytime like props as a object

  useEffect(() => {
    console.log("props useEffect called Child component", props.userDetails);
  }, [props.userDetails]);

This useEffect will call everytime, if parent component rerender.

*/

export {};
