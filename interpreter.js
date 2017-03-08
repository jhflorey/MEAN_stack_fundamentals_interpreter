// To understand and write JavaScript code effectively, you need to understand how the interpreter rearranges your code. 
// For each of the following problems rewrite the code to mimic how the interpreter would rearrange it before running. After rearranging the code, predict the output.

// Example problem:

var hello = "interesting";
function example() {
	var hello = "hi";
	console.log(hello);
}
example();
console.log(hello);

// Answer: 

//  // declaration get hoisted
 var hello;
 function example(){
 	var hello = "hi";
 	console.log(hello);              // out put : hi
 }

//  // assignmnent and invocation maintain order
hello = "interesting";
example();
console.log(hello);          // output : interesting


// -------------------------------------------------------------------------------------------

//  // Problem 1:

var food = "Chicken";
function eat() {
 	food = "half-chicken";
 	console.log(food);
 	var food = "gone";
 	console.log(food);
 }
 eat();
 console.log(food);

//  // Answer:

//  //declarations get hoisted
var food;                 
function eat() {       
  var food;               
  food = "haft-chicken";            
  console.log(food);       // half-chicken
}

// //declarations get hoisted second times
var food;                 
function eat() {       
  var food;               
  food = "gone";            
  console.log(food);       // gone
}

// //assignments and invocation maintain order
food = "Chicken";     
eat();                        
console.log(food);        // Chicken



// ---------------------------------------------------------------------------------------------------------

// Problem 2:
console.log(first_variable);
var first_variable = "Yipee I was first";
function firstFunc() {
	first_variable = "Not anymore";
	console.log(first_variable);
}
console.log(first_variable);

//  // Answer:

// there is no declarations to get hoisted 
            
  console.log(first_variable);       // undefined

// assignments and invocation maintain order
first_variable = "Yipee I was first";     
firstFnc();                        
console.log(first_variable);        // Yipee I was first

// -------------------------------------------------------------------------------------------------------

// Problem 3:
var new_word = "New!";
function lastFunc(){
	new_word = "old";
}
console.log(new_word);

// Answer:

// declarations get hoisted
var new_word;                 
function lastFunc() {                     
  new_word = "New!";            
  console.log(new_word);       // New!
}

// there is no declarations to get hoisted

   unction lastFunc(){
	new_word = "old";
}         
console.log(first_variable);       // error : new_word is not defined





































