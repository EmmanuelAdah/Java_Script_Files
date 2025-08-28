const prompt = require("prompt-sync")()

function longestWordInSentence(sentence){
    let words = sentence.split(" ")
    let max = words[0]

    for(let item of words){
        if (item.length > max.length){
                max = item
            }
        }
    return max
}

function longestWord(sentence){
    let max = '';
    let word = '';

    for (let index = 0; index < sentence.length; index++){
        if (sentence.charAt(index) === " "){
            if(word.length > max.length){
                max = word
                }
            word = '';
        } else {
            word += sentence.charAt(index);
        }
    }
    let largestWord = (word.length > max.length) ? word : max;
    return largestWord;
}

sentence = prompt("Enter your sentence: ")
console.log("The longest word in the sentence is:",longestWord(sentence))
//console.log(longestWordInSentence())