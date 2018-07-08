/**
 * --------------
 * const and let
 * --------------
 * const is a new keyword in ES6 for declaring variables. const is more powerful than var. Once 
 * used, the variable can’t be reassigned. In other words, it’s an immutable variable except when 
 * it used with objects.
 * 
 * This is really useful for targeting the selectors. For example, when we have a single button 
 * that fires an event, or when you want to select an HTML element in JavaScript, use const 
 * instead of var. This is because var is ‘hoisted’. It’s always preferable to use const when 
 * don’t want to reassign the variable .
 */

// ES5
var MyBtn = document.getElementById('mybtn');

// ES6
const MyBtn1 = document.getElementById('mybtn');

/**
 * In the code above, const will not change and cannot be reassigned. If you try to give it a 
 * new value, it will return you an error.
 */

let name = "Said";
  name = "Rick";
  console.log(name);

/**
 * let can be reassigned and take new value. It creates a mutable variable.
 * let is the same as const in that both are blocked-scope. It means that the variable is only 
 * available within its scope.
 * 
 * ----------------
 * Arrow functions
 * ----------------
 * The arrow function is really awesome, and makes your code more readable, more structured, and 
 * look like modern code. Instead of using this:
 */

// ES5
function myFunc(name) {
  return 'Hello' + name;
}
console.log(myFunc('said'));  // Hello said

// ES6 Arrow function
const myFunc1 = name => {
  return `Hi ${ name }`;
}
console.log(myFunc1('Said'))   // Hi Said

// or even without using arrow or implement `return` keyword
const myFunc2 = name => `Hi ${ name }`;
console.log(myFunc2('Said'))    // Hi Said

/**
 * As you see, the arrow function seems more readable and clean! You won’t need to use the old 
 * syntax anymore.
 * 
 * Also, you can use Arrow function with map, filter, and reduce built-in functions.
 */

// ES5
const myArray = ['tony', 'Sara', 'Said', 5];
let Arr1 = myArray.map(function(item) {
  return item;
});
console.log(Arr1);  // ["tony", "Sara", "Said", 5]

// ES6 syntax
let Arr2 = myArray.map(item => item);
console.log(Arr2);  // ["tony", "Sara", "Said", 5]

/**
 * The map function with arrows looks more clear and readable than map in ES5. With ES6 you can 
 * write shorter and smarter code. You can use the same with filter and reduce.
 * 
 * ------------------
 * Template Literals
 * ------------------
 * Template literals or template strings are pretty cool. We don’t have to use the plus (+) 
 * operator to concatenate strings, or when we want to use a variable inside a string.
 */

// ES5
function myFun(name, age) {
  return 'Hi' + name + ' You age is ' + age + ' year old!';
}
console.log(myFun('Said', 22)); // Hi Said Your age is 22 year old!

// ES6 syntax
const myFun1 = (name, age) => {
  return `Hi ${name}, Your age is ${age} year old!`;
}
console.log(myFun1('Said', 22)) // Hi Said, Your age is 22 year old!

/**
 * So simple! It’s a really huge difference between the old syntax and ES6. When playing with 
 * strings, the literal string in ES6 looks more organized and well structured than ES5.
 * 
 * -------------------
 * Default parameters
 * -------------------
 */

const myFunct = (name, age = 22) => {
  return `Hello ${ name } your age is ${ age } year old?`;
}
console.log(myFunct('said')); // Hello said your age is 22 year old?

/**
 * -----------------------------
 * Array and object destructing
 * -----------------------------
 * Destruction makes the assignment of the values of an array or object to the new variable 
 * easier.
 */

// ES5
const contacts = {
  name: 'said',
  familyName: 'Ashu',
  age: 22
}
let name = contacts.name;
let familyName = contacts.familyName;
let myAge = contacts.age;
console.log(name);  // said
console.log(familyName);  // Ashu
console.log(myAge); // 22

// ES6
const contacts1 = {
  name: 'said',
  familyName: 'ashu',
  age: 22
}
let {name, familyName, age} = contacts;
console.log(name);  // said
console.log(familyName);  // ashu
console.log(age); // 22

/**
 * With ES5, we have to assign each value to each variable. With ES6, we just put our values within 
 * curly brackets to get any property of the object.
 * 
 * Note: if you assign a variable that is not identical to the name of property, it will return 
 * undefined. For example, if the name of the property is name and we assign it to a username 
 * variable, it will return undefined.
 * 
 * We always have to name the variable the same as the name of the property. But in case we want 
 * to rename the variable, we can use the colon : instead.
 */

// ES6
const contacts2 = {
  name: 'Said',
  familyName: 'Ashu',
  age: 22
}
let {name: anotherName, familyName, age} = contacts2;
console.log(anotherName); // Said

/**
 * For the array, we use the same syntax as the object. We have just to replace the curly brackets 
 * with square brackets.
 */

const Arra = ['Lionel', 'John', 'Layla', 20];
let [value1, value2, value3] = Arra;
console.log(value1);  // Lionel
console.log(value2);  // John
console.log(value3);  // Layla

/**
 * ------------------
 * Import and export
 * ------------------
 * Using import and export in your JavaScript application makes it more powerful. They allow you 
 * to create separate and reusable components.
 * 
 * If you are familiar with any JavaScript MVC framework, you will see that they use import and 
 * export to handle the components most of the time.
 * 
 * It is simple! export allows you to export a module to be used in another JavaScript component. 
 * We use import to import that module to use it in our component.
 * 
 * For example, we have two files. The first is named detailComponent.js and the second is named 
 * homeComponent.js.
 * 
 * In detailComponent.js we are going to export the detail function.
 */

// ES6
export default function detail(name, age) {
  return `Hello ${ name }, your age is ${ age } year old!`;
}

/**
 * And if we want to use this function in homeComponent.js, we will just use import.
 */

import detail from './detailComponent';

console.log(detail('Said', 20));

/**
 * ---------
 * Promises
 * ---------
 * Promises are a new feature of ES6. It’s a method to write asynchronous code. It can be used 
 * when, for example, we want to fetch data from an API, or when we have a function that takes 
 * time to be executed. Promises make it easier to solve the problem
 */

const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('Hi the Promise execute successfully');
  })
}
console.log(myPromise());
// Promise {<resolved>: "Hi the Promise execute successfully"}

/**
 * If you log your console, it will return a Promise. So, if we want to execute a function after 
 * data is fetched, we will use a Promise. The Promise takes two parameters: resolve and reject 
 * to handle an expected error.
 * 
 * Note: the fetch function returns a Promise itself!
 */

const url = 'https://jsonplaceholder.typicode.com/posts';

const getData = (url) => {
  return fetch(url);
}

getData(url)
  .then(data => data.json())
  .then(result => console.log(result));

/**
 * -----------------------------------
 * Rest parameter and Spread operator
 * -----------------------------------
 * The rest parameters are used to get the argument of an array, and return a new array.
 */

const arr = ['said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?'];
// Gettingsome value using destruction
const [val1, val2, val3, ...rest] = arr;
const Func = (restOfArr) => {
  return restOfArr.filter(item => {return item}).join(" ");
}
console.log(Func(rest));  // Hi Said How are you?

const Func1 = (...anArray) => {
  return anArray;
}
console.log(Func1(arr));

/**
 * The spread operator has the same syntax as the rest parameter, but the spread operator takes 
 * the Array itself and not just the arguments. We can use the Spread parameter to get the values
 *  of an Array, instead of using a for loop or any other method.
 * 
 * --------
 * Classes
 * --------
 * Classes are the core of object oriented programming (OOP). They make your code more secure and 
 * encapsulated. Using classes gives your code a nice structure and keeps it oriented.
 */

class myClass {
  constructor () {

  }
}

/**
 * To create a class, use the class keyword followed by the name of the class with two curly brackets.
 */

class myClass1 {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}
const user = new myClass1('Said', 22);
console.log(user.name); // Said
console.log(user.age);  // 22

/**
 * To inherit from another class, use the extends keyword followed by the name of the class you 
 * want to inherit from.
 */

class myClass3 {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello () {
    console.log(`Hi ${this.name} your age is ${this.age}`);
  }
}
// inherit myClass3 methods and properties
class UserProfile extends myClass3 {
  username () {
    console.log(this.name);
  }
}

const profile = new UserProfile("Said", 22);
profile.sayHello()  // Hi Said your age is 22
profile.username()  // Said

/**
 * 
 */