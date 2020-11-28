//Bandish Bandits Quiz

var readlineSync = require('readline-sync');

const chalk = require('chalk');

var score = 0;

//Data of HighScorer
var highScores = [
  {
    name: "Anushka",
    score: 50
  },
  {
    name: "Silky",
    score: 44
  },
  {
    name: "Farhin",
    score: 43
  },
  {
    name: "Jazzy",
    score: 42
  },
  {
    name: "Jenny",
    score: 41
  }
];

console.log(chalk.bold.yellowBright("Hello World!"));

//Take user's name and greet them

var userName = readlineSync.question(chalk.bold.cyan("What's your name? "));

console.log(chalk.red.bold.bgWhite("\nWelcome " + userName + " to the *Bandish Bandits* Quiz!!!!\n"));


//Quiz Rules 

console.log(chalk.bold.yellowBright("**QUIZ RULES**"));
console.log(chalk.bold.blue("\t 1. There will total of 10 questions.\n\t 2. For each correct answer there is 5 marks.\n\t 3. For every wrong answer there is -1 marks.\n\t 4. Total score will be displayed at the end of quiz.\n\t 5. Answer using A,B,C,D alphabets Only."));


//Ask user whether they wants to play or not


var playGame = readlineSync.question("Are you excited to play the Quiz\nSelect [yes/no] ");

if(playGame.toLowerCase() === "yes"){
  console.log("You choose to play quiz.\nHere we go!");

//Array of Q/A 
var quizData = [
  {
    question:`1. What is Radhe's stage name?
    A. Masked Man
    B. Iron Man
    C. Super Man
    D. Krishna
    Enter your answer: `,
    answer:"A"
  },
  {  
    question:`2. The whole series is mainly shot in?
    A. Jaipur
    B. Jodhpur
    C. Bikaner
    D. Udaipur
    Enter your answer: `,
    answer:"B"
  },
  {  
    question:`3. How much loan did Radhe's father take from the bank?
    A. 50 Lakhs
    B. 7 Crore
    C. 1.5 Crore
    D. 1 Crore
    Enter your answer: `,
    answer:"C"
  },
  {  
    question:`4. What is the color of Tamanna's hairstreaks?
    A. Red
    B. Green
    C. Purple
    D. Blue
    Enter your answer: `,
    answer:"D"
  },
  {
    question:`5. Tamanna got famous after which song?
    A. Couple Goals
    B. Phas Gaye
    C. Sajan Bin
    D. Yolo Jeelo
    Enter your answer: `,
    answer:"D"
  },
  {
    question:`6. Which song Radhe and Tamanna sing together?
    A. Couple Goals
    B. Mastiyappa
    C. Phas Gaye
    D. Chedhkhaniya
    Enter your answer: `,
    answer:"C"      
  },
  {
    question:`7. What's the name of the instrument Devendra had the patent of ?
    A. Guitar
    B. Audlin
    C. Devlin
    D. Flute
    Enter your answer: `,
    answer:"B"        
  },
  {
    question:`8. Tamanna's dream is to sing with which pop star?
    A. Queen Eli
    B. Lady Gaga
    C. Madona
    D. Eneique Iglesias
    Enter your answer: `,
    answer:"A"        
  },
  {
    question:`9. What was the name of the girl with whom Radhe was going to get married?
    A. Sanya
    B. Sugandha
    C. Sandhya
    D. Shreya
    Enter your answer: `,
    answer:"C"      
  },
  {
    question:`10. Radhe's father asked him to do which job at the Palace?
    A. Accountant
    B. Watchman
    C. Assistant Bookkepper
    D. Doorman
    Enter your answer: `,
    answer:"A"       
  }
];
    //Quiz function
    function quiz(question,answer){
      var userAnswer = readlineSync.question(chalk.blue.bold(question));
      if(userAnswer.toUpperCase() === answer){
         console.log(chalk.green("You're right!"));
         score = score + 5;
      }
      else{
         console.log(chalk.red("Sorry! You're wrong!"));
         score = score - 1;
      }
      console.log("Current score : ",chalk.yellow.bold(score));
      console.log("********************");
    }

  //for loop for taking question and answer from array and passing it to the quiz function
    for(var i = 0; i<quizData.length; i++){
    quiz(quizData[i].question,quizData[i].answer);
    }

  //printing the final score to the user
  console.log(chalk.black.bold.bgWhite("Your Final Score: " + score));
  console.log("********************\n");
  console.log(chalk.bold.magenta("Current High Scorer"));
  console.log("-----------------------------");
  console.log("|\tName\t\t|\tScore\t|")
  for(var i=0; i<highScores.length; i++){
  console.log("|\t" +highScores[i].name + "\t\t|\t" + highScores[i].score + "\t\t|");
  }
  console.log("-----------------------------");
  if(score>=highScores[0].score){
  console.log(chalk.bold.blue("Yay!!! Congratulations!\nYou have scored a HIGH SCORE.\n"));
  console.log(chalk.bgWhite.yellow("Please share a screenshot of your score & I'll update the scoreboard.\n"));
  }
  console.log(chalk.bold.red("Thank you so much for participating in this quiz."));

}
else{
  console.log(chalk.bold.greenBright("Sorry! You quit the game."));
  console.log("Always rememeber this quote.");
  console.log("****************************");
  console.log(chalk.bold.red("Life has two rules:\n#1 Never Quit\n#2 Remember Rule #1"));
}


