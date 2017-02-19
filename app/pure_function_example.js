// pure function example
function changeProp(obj) {
  return { // leaves the original variable unmodified - pure function
    ...obj,
    name: 'Kal'
  }
  // obj.name = 'Val'; // changes the original variable
  // return obj;
}

var startingvalue = {
  name: 'Bob',
  age: 23
}

var res = changeProp(startingvalue);

console.log(res);
console.log(startingvalue);
