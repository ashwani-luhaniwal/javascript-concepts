/**
 * ---------
 * 1. Scope
 * ---------
 * Scope is simply a box with boundaries. There are two types of boundaries in JS: local and global, 
 * also referred to as inner and outer.
 * 
 * Local means that you have access to everything within the boundaries (inside the box), while 
 * global is everything outside the boundaries (outside the box).
 * 
 * These terms are used a lot when we talk about classes, functions, and methods. It provides the 
 * ability to determine what is a accessible (visible) to the current context.
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Separates logic
 *  - Narrows down the focus
 *  - Improves readability
 */

// ES5 syntax
const name = 'Ashwani';  // Global scope
function showName () {
  // Local scope
  return name;  // Access name defined in the global scope
}
showName(); // Ashwani

// ES6 syntax
const name1 = 'Ashwani';
const showName1 = () => {
  // Local scope
  return name;
}
showName1();

/**
 * --------
 * 2. IIFE
 * --------
 * IIFE (Immediately Invoked Function Expression), as the name states means that the function is 
 * “Immediately Invoked” when it is created. Before ES6++ presented classes/methods to support 
 * the object-oriented-programming paradigm (OOP), the common way was to mimic IIFE as a class 
 * name, and invoke functions as methods wrapped in a return type.
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Immediately executes code
 *  - Avoids global scope from getting polluted
 *  - Supports asynchronous structure
 *  - Improves readability (some may argue the opposite)
 */

// ES5 syntax
let carColor = 'Blue';
// IIFE
const car = (function() {
  return {
    changeColorToRed: function () {
      carColor = 'Red';
      return carColor;
    },
    changeColorToBlack: function () {
      carColor = 'Black';
      return carColor;
    }
  }
})();
console.log(car.changeColorToBlack());  // Red

// ES6 syntax
let carColor1 = 'Blue';
// IIFE
const car1 = (() => {
  // Access to multiple functions
  return {
    changeColorToRed: () => {
      carColor1 = 'Red';
      return carColor1;
    },
    changeColorToBlack: () => {
      carColor1 = 'Black';
      return carColor1;
    }
  }
})();
console.log(car1.changeColorToRed())  // Red

/**
 * -------
 * 3. MVC
 * -------
 * Model-view-controller is a design-framework (*not a programming language) that allows us to 
 * separate behavior into a practical real-world structure. Almost 85% of web-based applications 
 * today have this underlying pattern in one way or the other. There are other types of design 
 * frameworks out there, but this one is by far the most fundamental and easy-to-understand pattern.
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Long-term scalability and maintainability
 *  - Easy to improve, update, and debug (based on personal experience)
 *  - Easy to setup
 *  - Provides structure and overview
 */

// ES5 syntax
const view = (function () {
  // Code here
})();
const model = (function () {
  // Code here
})();
const controller = (function(viewCtrl, modelCtrl) {
  // Code here
})(view, model);

// ES6 syntax
const view = (() => {
  // Code here
})();
const model = (() => {
  // Code here
})();
const controller = ((viewCtrl, modelCtrl) => {
  // Code here
})(view, model);

/**
 * ---------------
 * 4. Async/await
 * ---------------
 * Stop and wait until something is resolved. It provides a way to maintain asynchronous processing 
 * in a more synchronous fashion. For instance, you need to check if a user’s password is correct 
 * (compare to what exists in the server) before allowing the user to enter the system. Or maybe 
 * you’ve performed a REST API request and you want the data to fully load before pushing it to 
 * the view.
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Synchronous capabilities
 *  - Controls the behavior
 *  - Reduces “callback hell”
 */

// ES5 syntax
async function showUsers () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}
showUsers();  // Show all users in JSON format

// ES6 syntax
const showUsers1 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}
showUsers1();

/**
 * In order to use await, we must wrap it inside an async function to notify JS that we are working 
 * with promises. As shown in the example, we (a)wait for two things: response and users. Before 
 * we can convert the response to JSON format, we need to make sure we have the response fetched, 
 * otherwise we can end up converting a response that is not there yet, which will most likely 
 * prompt an error.
 * 
 * -----------
 * 5. Closure
 * -----------
 * A closure is simply a function inside another function. It is used when you want to extend 
 * behavior such as pass variables, methods, or arrays from an outer function to inner function. 
 * We can also access the context defined in outer function from inner function, but not the other 
 * way around (remember the scope principles we talked about above).
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Extends behavior
 *  - Useful when working with events
 */

// ES5 syntax
function showInfo() {
  const carType = 'Volvo';
  // A closure
  function showName() {
    return carType; // access outer function
  }

  return showName();
}
showInfo(); // Volvo

// ES6 syntax
const showInfo1 = () => {
  const carType = 'Volvo';
  // This is a closure
  const showName = () => {
    return carType; // Gets value defined in outer function
  }
  return showName();
}
showInfo1();  // Volvo

/**
 * The function showName() is a Closure, because it extends the behavior of the function showInfo(), 
 * and also has access to the variable carType.
 * 
 * ------------
 * 6. Callback
 * ------------
 * A callback is a function that executes after another function has executed. It is also referred 
 * to as a call-after. In the JavaScript world, a function that waits for another function to 
 * execute or return a value (array or object) is referred to as a callback. A callback is a way 
 * to make asynchronous operations more synchronous (sequential order).
 * 
 * ----------------------
 * Why is this relevant?
 * ----------------------
 *  - Waits for an event to execute
 *  - Provides synchronous capabilities
 *  - Practical way to chain functionalities (If A is completed, then execute B, and so forth)
 *  - Provides code structure and control
 *  - Be aware, you may have heard about callback hell. It basically means that you have a 
 *    recursive structure of callbacks (callbacks within callbacks within callbacks and so forth).
 */

// ES5 syntax
function pressButton(callback) {
  console.log('Button is pressed');
  callback();
};
function fireUpEngines() {
  console.log('Fire up engines!');
}
pressButton(fireUpEngines); // Button is pressed and Fire up engines

// ES6 syntax
const pressButton = (callback) => {
  console.log('Button is pressed');
  callback();
}
const fireUpEngines = () => {
  console.log('Fire up engines!');
}
pressButton(fireUpEngines);

/**
 * Notice that it waits for an event to occur (a button click) before performing an action (fire 
 * up the engines). In brief, we pass fireUpEngines() function as an argument (callback) to 
 * pressButton() function. When the user presses the button, it fires up the engines.
 */