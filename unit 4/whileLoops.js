//Loops = a special construct that repeats a set of code instructions over and ove under specific conditions

// while loops = a special type of loop where so long as a condition is true it will repeat the code instructions over and over

var x = 2 // this is an ex of an assignment operator - giving a variable a value 

// = : assignment operator
// == : comparison operator (same as)
// ! = : comparison operator (not the same as)

while (x = 2){
    consolelog('this message will repeat forever.')
}


function timer ( ){
    var interval = 60
    while (interval > 0){
        console.log ('countdown' + interval)
        interval -=1
    }
    console.log("times up!")
}

timer()