/**
 * -----------------------------------------
 * Javascript ES6 — Iterables and Iterators
 * -----------------------------------------
 * 
 * ----------
 * Iterables
 * ----------
 * The iterable is a interface that specifies that an object can be accessible if it implements 
 * a method who is key is [symbol.iterator].
 * 
 * Some of the built in data structure that use iterable are :
 *  - Arrays
 *  - Strings
 *  - Maps
 *  - Sets etc.
 * 
 * --------------------------------
 * Why iterable were added in ES6?
 * --------------------------------
 * Without iterable, it is difficult to manage the iteration on data for various type of data 
 * structures i.e iterating on array is different from iterating on an object.
 * 
 * Also, ES6 has introduced new data structure like sets and maps so it will become more 
 * complicated to write logic as per data structure for iterations. This is where iterable 
 * interface was born.
 * 
 * There are two things to notice here
 *  Data consumer — how the iteration take place like using loops, spread operator, array.from 
 *    method, destructuring via an array pattern etc
 *  Data source — what data structure we choose like array, maps, string etc to iterate on.
 *
 * ---------- 
 * Iterators
 * ----------
 * Object that knows how to access items from a collection one at a time, while keeping track of 
 * its current position within that sequence.
 * 
 * Object that is return by the iterable interface is also iterator object.
 * 
 * Iterator object have a next() method which returns the next item in the sequence. This method 
 * returns an object with two properties: done and value and when next() calls reaches to the 
 * end of sequence then the done property set to true else remain false .
 * 
 * So the next on an iterator return :
 *  {value: ‘Current value of iteration’, done: ‘true/false’}
 */

// Custom iterators object example
const customIterable = {
  [Symbol.iterator]() {
    let counter = 0;
    return {
      next() {
        if (counter < 5) {
          counter++;
          return { done: false, value: counter };
        } else {
          return { done: true, value: undefined };
        }
      }
    }
  }
}

// This is how we iterate over our customIterable object.
for (const x of customIterable) {
  console.log(x); // output: 1, 2, 3, 4, 5, undefined
}

/**
 * The code executes five steps, with the counter incrementing every run . First, we return the 
 * value 1, then the value 2 and so on till 5 then we indicate that the end of the iteration has 
 * been reached and value undefined is returned. Each item is wrapped in an object with the 
 * properties:
 *  - value which holds the actual item and
 *  - done which is a boolean flag that indicates whether the end has been reached, yet.
 * 
 * Note: The last step can return a value if required, also we can manual break for..of loop if 
 * required using break keyword. The break keyword will send a signal to an iterator that the 
 * consuming code is complete and will not be pulling any more values from it, so it is being 
 * called anyway once we finished iterating, it is the one returning {done:true}, but we can 
 * call it manually as well.
 * 
 * Iterator with generator hold a lot of power and may change how we write code.
 */