/**
 * --------------------------------------
 * Practical Use Case for ES6 Generators
 * --------------------------------------
 * 
 * Definition (from MDN)
 *  Generators are functions which can be exited and later re-entered. Their context (variable 
 * bindings) will be saved across re-entrances.
 * 
 * You may be thinking, “Okay, but why would I want to do that?” As it turns out, there are a 
 * whole range of use cases ranging from simple to complex, many of which involve Promises to 
 * make asynchronous requests (async/await is built on top of generators). My goal is to give you 
 * the first baby step into understanding how they work with a simple, real-life example so that 
 * you begin noticing when a generator is the most suitable solution to problems in your own code.
 */

// Repeating Arrays without generators
const lifts = ['squat', 'bench', 'deadlift', 'press'];
const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

let currentLiftIndex = 0;

// This creates an empty array to totalNumSessions length for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: lifts[currentLiftIndex++ % lifts.length]
}));

// Repeating Arrays with generators
function* repeatedArray (arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const nextLiftGenerator = repeatedArray(lifts);

const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

// This creates an empty array of totalNumSessions length for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: nextLiftGenerator.next().value,
}));

/**
 * Here, the code is more declarative and readable. We abstracted the index-tracking logic into 
 * a general-purpose utility function called repeatedArray. The function * syntax tells 
 * JavaScript that this is a generator function. All we have to do is ask for the next item in 
 * the “repeated array” and our generator gives it to us. The best part is we don’t have to 
 * worry about how it’s happening outside of our generator function.
 * 
 * Here’s what’s happening:
 * repeatedArray returns an iterator object for the repeatedArray function itself (read that twice) 
 * when we call it on line 9. The iterator is stored in a variable named nextLiftGenerator. It’s 
 * important to understand that the code in the function hasn’t been executed at this point. 
 * The function is only executed when we call the next() function on the nextLiftGenerator iterator, 
 * and it’s only executed up until it hits a yield. Our generator gives us the value, then waits 
 * until the next call to continue execution until it hits another yield, then returns that value.
 */