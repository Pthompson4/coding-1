// what is a function
'A function is a set of intructions that performs a specific task or job.'

// you have two variations of functions
// built in functions 
// users defined functions 
// built-in functions- These are instructions that are pre-written
//into the coding language,All we need to do is pass in data.

//exmples
var classname = 'coding class'
console.log(classname)

// user deffined functions are coustoms intructions written by enginers to make code that performs specific task
  // how to write user defined functions

  function examplefunction(){
    console.log('the function script is connected')
  }
  // in order to have a function work. we need to call it
  // the above code is the function definition-meaning
  // its only telling the computer the instruction - not to actually run it.

  // we acess or call a function by writing its name.
  examplefunction()


  let accountBalance = 1000;
  
 function depositMoney (depositAmount) {
    let newBalance = accountBalance + depositAmount;
    document.getElementById("data").innerHTML = newBalance;

 }
 
 // data that we want to manipulate goes inside of the round brackets. 
 // the instructions on what we want to do with the data goes inside of the curly brackets.