export const shallowCompare = (source: any, target: any): boolean => {
    const sourcekeys = Object.keys(source);
    const targetkeys = Object.keys(target);
  
    if (sourcekeys.length !== targetkeys.length) {
      return false;
    }
    return sourcekeys.every((k: string) => source[k] === target[k]);
};

//   const obj1 = {
//     name: "Anuj",
//     details: {
//       rollNo: 10
//     }
//   };
  
//   const obj2 = {
//     name: "Anuj",
//     details: {
//       rollNo: 10
//     }
//   };
  
//   console.log(shallowCompare(obj1, obj2));

export const deepCompare = (source: any, target: any): boolean => {
    const sourcekeys = Object.keys(source);
    const targetkeys = Object.keys(target);
  
    if (sourcekeys.length !== targetkeys.length) {
      return false;
    }
    return sourcekeys.every((k: string) => {
      const val1 = source[k];
      const val2 = target[k];
      if (typeof val1 === "object" && typeof val2 === "object") {
        return deepCompare(val1, val2);
      }
      return val1 === val2;
    });
  };

  const obj1 = {
    name: "Anuj",
    details: {
      rollNo: 10,
      subject: "react",
      address: ""
    }
  };
  
  const obj2 = {
    name: "Anuj",
    details: {
      subject: "react",
      rollNo: 10,
      address: ""
    }
  };
  
  // console.log(shallowCompare(obj1, obj2));
  console.log("test", deepCompare(obj1, obj2));