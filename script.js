const pWords = ['html','css','javascript','java','cpp','python','nodejs','reactjs','expressjs','mongodb','mysql','php','django','ruby','swift','angular','vue','android','microsoft'];

const msg = document.querySelector(".msg")
const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const score = document.querySelector(".score");
let gamePlay = false;
let newWord = "";
let randomWord = "";
let totalScore = 0;

// Function to generate the word from the Array
const createNewWord = ()=>{
    let indeces = Math.floor(Math.random() * pWords.length);
    let tempWord = pWords[indeces];
    return tempWord;
}

// Function to Scramble The word
const scrambleWord = (word)=>{
    for(let i = word.length-1;i>0;i--){
        let temp = word[i];
        let j = Math.floor(Math.random() * (i+1));
        word[i] = word[j];
        word[j] = temp;
    }
    return word;
}

//  Event Listen On The Button
btn.addEventListener("click",()=>{
    if(!gamePlay){
        // Game Starts Here
        gamePlay = true;
        btn.innerHTML = "Guess";
        input.classList.toggle("hidden");
        score.innerHTML = `Score : ${totalScore}`
        newWord = createNewWord();
        randomWord = scrambleWord(newWord.split("")).join("");
        msg.innerHTML = `Guess the Word : ${randomWord}`
    }else{
        if(newWord === input.value){
            gamePlay = false
            msg.innerHTML = `Your Guess is Right, It's ${newWord}`
            btn.innerHTML = "Start Again"
            totalScore++;
            score.innerHTML = `Score : ${totalScore}`
            input.classList.toggle("hidden");
            input.value = "";
        }else{
            msg.innerHTML = ` Your Guess is Wrong , try Again : ${randomWord}`
        }
    }
})