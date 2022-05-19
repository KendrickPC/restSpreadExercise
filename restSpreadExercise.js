// Rest / Spread Operator Exercises
// In this exercise, you’ll refactor some ES5 code into ES2015.

// Given this function:
/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/
// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
const filterOutOdds = (...rest) => {
  const numsArr = Array.from(rest);
  return numsArr.filter(num => {
    return num % 2 === 0;
  })
}
console.log('\nfilterOutOdds')
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// findMin
// Write a function called findMin that accepts a variable number
// of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
const findMin = (...restOfNums) => {
  const numsArr = Array.from(restOfNums);
  return numsArr.reduce( (accumulator, nextNum) => {
    return Math.min(accumulator, nextNum);
  })
}
console.log('\nfindMin')
console.log(findMin(1,4,12,-3)) // -3
console.log(findMin(1,-1)) // -1
console.log(findMin(3,1)) // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and
// returns a new object which contains all the keys and values of the
// first object and second object.
const mergeObjects = ( (obj1, obj2) => {
  return {...obj1, ...obj2};
})
console.log('\nmergeObjects')
console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and
// a variable number of arguments. The function should return a new array
// with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = ( (arr, ...restOfNums) => {
  restOfNums.forEach(num => {
    arr.push(num * 2);
  })
  return arr;
})
console.log('\ndoubleAndReturnArgs')
console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

// /** remove a random element in the items array
// and return a new array without that item. */

const removeRandom = (items) => {
  const randomIdx = Math.floor(Math.random() * items.length)
  return items.filter( num => {
    return num !== items[randomIdx];
  })
}
console.log('\nremoveRandom')
console.log(removeRandom([24, 8, 2, 33, 23, 1]))
console.log(removeRandom([1004, 143]))

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
}
console.log('\nextend')
console.log(extend([1, 2, 3], [97, 98, 99]));


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  // Keyword is NEW here...
  const newObj = {...obj};
  newObj[key] = val;
  console.log(obj1); // Proving obj1 (input) was not mutated.
  return newObj
}

const obj1 = {
  'kobe': 8,
  'shaq': 34,
  'jordan': 23,
}
console.log('\naddKeyVal');
console.log(addKeyVal(obj1, 'iverson', 1));


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  const newObj = {...obj};
  delete newObj[key];
  console.log(obj); // proving object input is not mutated.
  return newObj;
}
const obj2 = {
  'iphone': 999,
  'pixel': 899,
  'galaxy': 799,
  'asus': 699,
}
console.log('\nremoveKey')
console.log(removeKey(obj2, 'asus'));

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return {...obj1,  ...obj2}; // Shallow copy only.
}
console.log('\ncombine')
console.log(combine(obj1, obj2));

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
  const newObj = {...obj};
  newObj[key] = val;
  return newObj;
}

const obj3 = {
  'iphone': 999,
  'pixel': 899,
  'galaxy': 799,
  'asus': 699,
}
console.log('\nupdate')
console.log(update(obj3, 'iphone', 899));