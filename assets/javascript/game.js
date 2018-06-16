
//hangman game
//    -styling-
//game mechanics
    // create array of possible words    
function reset() {
    var randWord = Math.floor(Math.random()*words.length);
    var spaces = [];
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var chances = 5;
    var points = 0; 
    var guessedLetters = [];

    document.getElementById("choices").innerHTML = "Choices: " + choices;
    document.getElementById("chances").innerHTML = "Chances: " + chances;
    document.getElementById("output").innerHTML = "Your Progress " + spaces.join(" ");
    document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;
    document.getElementById("winLose").innerHTML = " ";
    document.getElementById("final").innerHTML = "Your Progress " + spaces;
}


    var words = ["one", "two", "three", "four", "five", "six"];
    var win = 0;
    var loss = 0;
    
    document.getElementById("win").innerHTML = "Win: " + win;
    document.getElementById("loss").innerHTML = "Loss: " + loss;
    // render blank spaces that can be filled in when guessed
function blankSpaces() {
    var randWord = Math.floor(Math.random()*words.length);
    console.log(randWord);
    var compChoice = words[randWord];
    console.log(compChoice);
    var spaces = [];
    for(var j = 0; j < compChoice.length; j++) {
        spaces.push("_ ");
        console.log(spaces);
    }
}
    blankSpaces();

    // display all possible letters 
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for(var i = 0; i < choices.length; i++) {    
        document.getElementById("choices").innerHTML = "Choices: " + choices;
    }

    
    // create winner array to check against
    
        var winnerWord = []
        for(var i = 0; i < compChoice.length; i++) {
            winnerWord.push(compChoice[i].charAt(0))
            console.log(winnerWord);
        }

        var chances = 5;
        var points = 0; 
        var guessedLetters = [];
        document.getElementById("chances").innerHTML = "Chances: " + chances;
        document.getElementById("output").innerHTML = "Your Progress " + spaces.join(" ");
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;
    
    //listens for a key press
    document.addEventListener('keydown', function (event) {

        
        //checks if it's in the winner word
        console.log(winnerWord.includes(event.key))
        
        if (chances === 0) {
            reset();
        }

        //checks if the letter has already been guessed.
        for(var i = 0; i<guessedLetters.length; i++) {
            if (event.key === guessedLetters[i]) {
                alert("You already guessed this letter");
                return;
            }
        }
        
        //checks if the user input is in the word or takes away a chance
        if(winnerWord.includes(event.key) === true) {
            console.log(event.key);
            guessedLetters.push(event.key);
            console.log(guessedLetters);
            document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;   
        } else {
            console.log(event.key);
            chances--;
            document.getElementById("chances").innerHTML = "Chances: " + chances;
            console.log(chances);
            guessedLetters.push(event.key);
            console.log(guessedLetters);
            document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;
        }
        
        //checks if the keypress is in the word then replaces it and gives you a point, if correct.
        for(var i = 0; i < winnerWord.length; i++) {
            if(winnerWord[i] === event.key) {
                spaces[i] = event.key;
                console.log(spaces); 
                document.getElementById("output").innerHTML = "Your Progress " + spaces.join(" ");
            }
            if (winnerWord[i] === event.key) {
                console.log("you win +1");
                points++;
            }
        }
    
        // checks win or loss conditions
        if (chances === 0) {
            loss++;
            document.getElementById("loss").innerHTML = "Loss: " + loss;
            console.log("you lose");
            document.getElementById("winLose").innerHTML = "Play Again!";
            document.getElementById("final").innerHTML = "Your Progress " + spaces.join(" ");
            reset();
       
        } else if (points === winnerWord.length) {
            win++;
            document.getElementById("win").innerHTML = "Win: " + win;
            console.log("you win the game");
            document.getElementById("winLose").innerHTML = "~~~Winner!!!~~~";
            document.getElementById("final").innerHTML = "Your Progress " + spaces.join(" ");
            reset();
        }
        
        
    })
    

    // give the hangman lives, and create a mechanism to take them away
    // create game over/ new game screen

  
    
  // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // var a = fruits.indexOf("Apple");


