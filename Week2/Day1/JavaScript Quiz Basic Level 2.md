# JavaScript Quiz Basic Level 2


### Theory

1. Why do we use functions in JavaScript?
   * Functions are essentially re-usable blocks of code.
   * Say we would be needing to square a number multiple times in our code. We may write the logic of squaring a number multiple times but that would just make our code unnecessarily lengthy.
   * Instead, we can just create a function once which defines the logic of squaring a number and use that function multiple times.


2. What is Function Invocation?
   * A Function is Invoked when it's name is written with a parenthesis "()" written in front of it. 
   * Example :-
   ```js
   function test() {
       console.log("Hello Everyone!")
   }
   
   test() // Function is invoked. Output - "Hello Everyone!"
   ```
   

3. Does a function behave like an object in Javascript? Prove it by an example.
   * Yes, in JS, a function does indeed behave like an object. 
   * This is because essentially, a function IS an object but with special properties and methods.
   * More specifically, a function is a `Function` object.
   * This enables a function in JS to have special properties like the ability to invoke.
   * This also means that a function has certain methods attached to it. Namely `bind()`, `apply()`, `call()`.
   * It also has some properties attached to it since essentially it IS an object. They are :- `name` and `length`
   ```js
   function sayHello() {
       console.log("Hello Everyone!")
   
       console.log("how are you!")
   }
   
   sayHello() // Output :- Hello Everyone
   
   console.log(sayHello) // Output :- [Function: sayHello]
   
   sayHello.number = 10
   
   console.log(sayHello) // Output :- [Function: sayHello] { number: 10 }
   
   console.log(sayHello.name) // Output :- sayHello
   console.log(sayHello.length) // Output :- 0 (Because the length property returns the number of parameters passed to the function)
   ```
   * Reference - [JS Functions Are Objects](https://academind.com/tutorials/javascript-functions-are-objects)


4. What are Events in Javascript
   * Events in JS are just specific triggers for something happening in the DOM.
   * For example, if a particular element is clicked then that is called an Event in JS.
   * We can also listen to these events happening in the DOM and call a function to execute a block of code if the event happens.
   * EventListeners are used for that purpose.


5. What is a string?
   * A string is an array of characters.


6. What is an array? Is it static or dynamic in Javascript?
   * An array is an ordered collection of elements.
   * JavaScript arrays are dynamic in nature. 
   * This means that there is no pre-defined length of the array.
   * The size of the array is automatically increased / decreased based on the insertion / deletion of elements from it.


7. Difference between Map and Set?
   * (Source: MDN) The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
   * (Source: MDN) The Set object lets you store unique values of any type, whether primitive values or object references.
   * The main difference between a Set and a Map in JS is that we can access any element from the Map with a unique key - just like in an array we can access any element with it's index. Whereas, in a Set, we have to iterate over all the items in the set to extract a particular element.


8. Difference between Array and Map?
   * (Source: MDN) The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
   * (Source: MDN) The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
   * The difference between an Array and a Map is that an Array is just a single collection of elements that can be of any datatype and any unique element can be accessed with an index which is numerical and starts from 0. Whereas, a Map is a collection of key - value pairs and any unique value can only be accessed with it's key which can be of any datatype.


9. What are array methods? List a few names?
   * Array methods are different functions that we can call on an array to perform different tasks like sorting the array or iterating through the items of the array.
   * Some methods of an array are `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`, etc.


10. In how many ways can we traverse through an array in Javascript?
    * Here are some of the ways to traverse an array in JS :- 
   ```js
   const arr = [1, 2, 3, 4, 5, 6]
   
   for(let i = 0; i < arr.length; i ++) {
       console.log(arr[i])
   }
   
   for (let num of arr) {
       console.log(num)
   }
   
   for (let num in arr) {
       console.log(num)
   }
   
   arr.forEach((item) => console.log(item))
   
   arr.map(num => console.log(num))
   ```


### Programs

1. Reverse an Array in JavaScript?
```js
const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reverse()) // Output :- [ 6, 5, 4, 3, 2, 1 ]
```


2. Explain the properties of the join array method function via program?
```js
const arr = [1, 2, 3, 4, 5]

console.log(arr.join()) // Output :- 1,2,3,4,5

console.log(arr.join(' - ')) // Output :- 1 - 2 - 3 - 4 - 5

console.log(arr.join(',')) // Output :- 1,2,3,4,5

console.log(arr.join(' ABC ')) // Output :- 1 ABC 2 ABC 3 ABC 4 ABC 5
```


3. Show all the values of an array in a html webpage using DOM and forEach method?
```js
const arr = [1, 2, 3, 4, 5]

arr.forEach(item => document.getElementById("arrValues").innerText += item)
```


4. Merge sets in JavaScript?
```js
const set1 = new Set([1, 2])
console.log(set1) // Output :- Set(2) { 1, 2 }

const set2 = new Set(["Hello", "Everybody"])
console.log(set2) // Output :- Set(2) { 'Hello', 'Everybody' }

const set3 = new Set([...set1, ...set2])
console.log(set3) // Output :- Set(4) { 1, 2, 'Hello', 'Everybody' }
```