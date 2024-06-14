#! /usr/bin/env node 

import inquirer from "inquirer";

// declaring a variable and assign it to the inquirer prompt
let wordsAnswers:{
      Sentence: string
} = await inquirer.prompt([{
    name: "Sentence",
    type: "input" ,
    message: "Enter your sentence to count the word"
}])

const words = wordsAnswers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words);

// Print the word count of the sentence to the console

console.log(`Your sentence word count is ${words.length}`);