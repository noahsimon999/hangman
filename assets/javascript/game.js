
//hangman game
//    -styling-
//game mechanics




// create array of possible words   

    var words = ["one", "two", "three", "four", "five", "six"];
    var win = 0;
    var loss = 0;
  
    document.getElementById("win").innerHTML = "Win: " + win;
    document.getElementById("loss").innerHTML = "Loss: " + loss;
    

    // choose random word and render blank spaces that can be filled in when guessed

    var randWord = Math.floor(Math.random()*words.length);
    var compChoice = words[randWord];
    console.log(compChoice);
    var spaces = [];
    for(var j = 0; j < compChoice.length; j++) {
        spaces.push("_ ");
        
    }

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
    }

    // console
    var chances = 5;
    var points = 0; 
    var guessedLetters = [];
    document.getElementById("chances").innerHTML = "Chances: " + chances;
    document.getElementById("output").innerHTML = spaces.join(" ");
    document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;

    
    //reset
    function reset() {
        // render blank spaces that can be filled in when guessed
             randWord = Math.floor(Math.random()*words.length);
             compChoice = words[randWord];
            console.log("reset " + compChoice);
             spaces = [];
            for(var j = 0; j < compChoice.length; j++) {
                spaces.push("_ ");
            }
        // display all possible letters 
             choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
            for(var i = 0; i < choices.length; i++) {    
                document.getElementById("choices").innerHTML = "Choices: " + choices;
            }
            // create winner array to check against
             winnerWord = [];
            for(var i = 0; i < compChoice.length; i++) {
                winnerWord.push(compChoice[i].charAt(0))
            }
             chances = 5;
             points = 0; 
             guessedLetters = [];
            document.getElementById("chances").innerHTML = "Chances: " + chances;
            document.getElementById("output").innerHTML = spaces.join(" ");
            document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;
        }


    //listens for a key press
    document.addEventListener('keydown', function (event) {
        //checks if it's in the winner word
        console.log(winnerWord.includes(event.key))
        //checks if the letter has already been guessed.
        for(var i = 0; i<guessedLetters.length; i++) {
            
            if (event.key === guessedLetters[i]) {
                alert("You already guessed this letter");
                return;
            }
        }
        

        //checks if the user input is in the word or takes away a chance
        if(winnerWord.includes(event.key) === true) {
            guessedLetters.push(event.key);
            document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;   
        } else {
            chances--;
            document.getElementById("chances").innerHTML = "Chances: " + chances;
            guessedLetters.push(event.key);
            document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;
        }
        

        //checks if the keypress is in the word then replaces it and gives you a point, if correct.
        for(var i = 0; i < winnerWord.length; i++) {
            if(winnerWord[i] === event.key) {
                spaces[i] = event.key;
                document.getElementById("output").innerHTML = spaces.join(" ");
            }
            if (winnerWord[i] === event.key) {
                points++;
            }
        }
    

        // checks win or loss conditions
        if (chances === 0) {
            console.log("you lose");
            document.getElementById("winLose").innerHTML = "Play Again!";
            loss++;
            document.getElementById("loss").innerHTML = "Loss: " + loss;
            reset();
           

        } else if (points === winnerWord.length) {
            console.log("you win the game");
            document.getElementById("winLose").innerHTML = "~~~Winner!!!~~~";
            win++;
            document.getElementById("win").innerHTML = "Win: " + win;
            reset();
        }
        
        
    })
    

    // give the hangman lives, and create a mechanism to take them away
    // create game over/ new game screen

  
    
  // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // var a = fruits.indexOf("Apple");


