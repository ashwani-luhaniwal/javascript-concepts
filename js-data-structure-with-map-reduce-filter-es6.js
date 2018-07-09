/**
 * -----------------------------------------------------------
 * Javascript data structure with map, reduce, filter and ES6
 * -----------------------------------------------------------
 * 
 * Javascript is a language that give freedom of writing code in any style, from imperative to 
 * declarative styles. Most programmer use imperative because either they are coming from OOPs 
 * background, may be they love it or they are not familiar with other style.
 */

// Imperative style

// to calculate the sum of array elements
const sum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

/**
 * -----------
 * Imperative
 * -----------
 * Imperative style is cool but imagine what if there is a complex mathematics logic here then 
 * size of code and the readability will suck. It increases the cognitive load when reading, and 
 * over time makes it easier to faulter in reasoning and logic.
 * 
 * Also, the main complexity of this code snippet derives from the fact that instead of telling 
 * the computer what we want it to do, we are instructing it on how to do it.
 */

// Declarative style

// calculate the sum of array elements
const sum = (arr) => arr.reduce((total, item) => total += item, 0);

/**
 * ------------
 * Declarative
 * ------------
 * Now, this looks pretty clean, shorter, expressive, concise code, less error prone, easier to 
 * maintain and easier to debug. We are telling computer what we want it to do rather how to do it.
 * 
 * Declarative approach are easily optimisable at complier end and also have less side effects.
 */

// Map definition
collection.map((currentValue, index) => {
  // Return element for newArray
});

// example
const arr1 = [1, 2, 3, 4, 5];
const newArr = arr1.map(i => i * 10);
// return a new array with all value as multiple of 10

/**
 * ----
 * Map
 * ----
 * Map works on an array and return an array that’s it. Above code snippet works on an collection 
 * i.e an array and takes a callback with current iteration value, index as arguments and return 
 * a new array.
 * 
 * Note: Maps are well suited for change/transforming whole array rather than breaking the flow 
 * for some conditions, Map suck’s performance wise, check out here but are easy to be used for 
 * small data sets.
 */

// Reduce definition
collection.reduce((accumulator, item, index) => {
  // logic to perform to get accumulator as a return value
}, initialValueForAccumulator);

// example
const arr2 = [1, 2, 3, 4, 5];
const total = arr2.reduce((acc, item) => acc += item, 0);
// return a total as 15

/**
 * -------
 * Reduce
 * -------
 * Reduce works on an array but can return anything you want it to return. As the name speaks for 
 * itself it can be reduce to anything and can behave like map, find, filter or any other 
 * javascript function. The above code snippet works on an array and reduce to compute the total 
 * value of item of array.
 * 
 * Explanation of example above : On reduce first run, acc is assigned a 0 value and then 
 * acc+= item i.e acc = acc+item which will compute to 0+1 i.e 1. This 1 will be acc value for 
 * next iteration and this continues until we are done with all array items.
 */

/**
 * -----
 * Find
 * -----
 * Find works on an array and return the first element that satisfy the condition in function.
 */

// definition
collection.find((item) => {
  // return first element that satisfy the condition
});

// example
const arr3 = [1, 2, 3, 4, 5];
const value = arr3.find(i => i % 4 === 0);
// return the first value which is 8

/**
 * -------
 * Filter
 * -------
 * Filter works on array return an array for filtered items.
 */

// definition
collection.filter((currentValue, index) => {
  // logic to filter array on
});

// example
const arr4 = [1, 2, 3, 4, 5];
const newArr1 = arr4.filter(i => i % 2 ===0);
// return a new array with value [2, 4]

/**
 * Lets use them for some real world scenarios + some ES6. (lets try some ARMD (Add, Read, Modify, 
 * Delete) on below object keys)
 */

const users = [
  {
    id: 1,
    name: "Ashwani Kumar",
    username: "ashwani",
    email: "ashwani@gmail.com",
    phone: "1-634-637-4748",
    website: "ashwani.com",
    password: "secret"
  },
  {
    id: 2,
    name: "Hemant",
    username: "hemant",
    email: "hemant@gmail.com",
    phone: "1-637-252-8474",
    website: "hemant.net",
    password: "secret123"
  }
];

// Add a new element to users
const newUser = {
  id: 4,
  name: "John Doe",
  username: "john-doe",
  email: "john-doe@gmail.com",
  phone: "",
  website: "john.com",
  password: "john#doe"
};
const newData = [...users, newUser];  // add element at last
const newData = [newUser, ...users];  // add element at first
const newData = users.concat(newUser);  // old way

// The use of es6 spread operator make super easy to add elements to array. We can use spread 
// operator to concat two different array, modify shape of objects or add dynamic key value pairs etc.

const hobbies = ['chess', 'pool'];
const newUsers = users.map(u => ({...u, hobbies}));
// this will add hobbies to users array and return newUsers array

/**
 * Read email address, phone number and website of users into new array
 */
const contactInfo = users.map(({email, website, phone}) => ({email, website, phone}));

// The use es6 of destructuring of object keys and map to get the contact info array for user.

/**
 * Find and replace value for key of objects
 */
const newUsers = users.map(u => u.id == 2 ? ({...u, name: 'te'}) : u);
// this will return newUsers with all user having name 'te'

/**
 * Delete some key's from object
 * ------------------------------
 * 
 * Note: We will actually not delete the key but return a new object, if you want to delete the 
 * key use delete operator, here we are considering object immutability.
 * 
 * To delete keys there are lot of ways but we will look at the most easy, single lined. Lets try 
 * to delete website from users.
 */

const newUsers = users.map(({id, email, name, username, phone, password}) => ({id, email, username, email, phone, password}));
// will return an array with all keys other than website

// Above code seems to be practically difficult to code for big objects.
const newUsers = users.map(u => Object.keys(u).reduce((newObj, key) => key != 'website' ? {...newObj, [key] : u[key]} : newObj, {}));

/**
 * We map through the users and then on each user we do a reduce and form a new object (newObj) and 
 * then check for website key, if its a website we return the previously formed newObj, if not 
 * then we do a spread operator and add require key to obj and finally return newObj.
 */