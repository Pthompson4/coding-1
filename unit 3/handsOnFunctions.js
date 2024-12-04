//Anatomy of a function

















// Activity

//1. create a function that will take a number that is passed into the function parameters and convert the number into minutes. for example, 
//a value of 2 should return 120 minutes. a value of 3 should return 180 minutes, etc.

function hourToMinutes(hour) {
    console.log(hour * 60 + 'minutes')
}

hoursToMinutes(15)

//conditional statements 
//if/ else keywords uses to create specific outcomes based on recieved data from the function.

function timeManagementSystem(hoursWorked) {
    if (hoursWorked < 8)
        console.log('unfortunately you will get full time pay');
}else if (hoursworked > 8 {
    console.log("You will get paid overtime.");
} else if (hoursWorked > 16) {
    console.log("you are working way too hard!");
} else {
    console.log("you will get paid full time for the day.");
}
{

    timeManagementSystem(10);