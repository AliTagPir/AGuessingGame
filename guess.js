'use strict'


// guessing game by Magnum Team

//reading the javascript file readline and executes it 
const readline = require ("readline");

//this is the value that the user is trying to guess between 1-6
let userNumber = Math.round(Math.random()*6)  
    console.log(userNumber)

 // Variable to hold the users score
let userPoints = 0
let playAgain = "yes"
//Creating a user interface to be able to input and output values and assigning it the name userInput
function ask(query){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    })
    return new Promise((resolve)=>
    rl.question(query, (ans) => 
    { rl.close(); resolve(ans); }) ); 
}

async function game(){
//creating a question using the .question method to ask the user from the user interface created called userInput
    while(playAgain === " yes"){
        let answer= await ask ("Pick a number between 1-6")  



    //Checking if what has been inputed is equal to the user number
    if (answer == userNumber ) {
        console.log("Correct");
        userPoints +=2
        //Interpolation - Easier way concatinate the strings 
        console.log(`User Points = ${userPoints}`) 
    }

// if the user number is close by 1 number up or down they get 1 point
    else if(answer == userNumber+1 ||answer == userNumber-1){
        console.log("Almost there")
        userPoints +=1

        console.log(`User Points = ${userPoints}`) 
    
    }
// if the user number is neither correct or a single digit awsy from the number it returns the following
    else {
        console.log("Wrong bozo guess again, what an absolute scrub...");
        console.log(userPoints)
    };
   
// logging the following 
    console.log("I appreciate you playing our game");

// creates new interface for asking if user wants to play again
    

    playAgain= await ask("Would you like to play again? yes/no  ") 
     //playAgain.toLowerCase()  
        // if(playAgain == "yes" ){
        //     game()
        // }
        // else{console.log("Thanks for playing")}
        
     
// closing the question and the entire userInterface
      
};}


game()

// async function randomNumber(){
    
// }

