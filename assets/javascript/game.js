
//hangman game
//    -styling-
//game mechanics
    // create array of possible words


    var words = ["one", "two", "three", "four", "five", "six"];
    // render blank spaces that can be filled in when guessed

    var randWord = Math.round(Math.random()*words.length);
    console.log(randWord);
    var compChoice = words[randWord];
    console.log(compChoice);
    var spaces = [];
    for(var j = 0; j < compChoice.length; j++) {
        spaces.push("_ ");
        document.write("_ ");
        console.log(spaces);
    }

    

    // display all possible letters 
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for(var i = 0; i < choices.length; i++) {
        document.write(choices[i]);
    }

    
    
    
    // create winner array to check against

    var winnerWord = []
    for(var i = 0; i < compChoice.length; i++) {
        winnerWord.push(compChoice[i].charAt(0))
        console.log(winnerWord);
    }

    var lives = 5;

    document.getElementById("lives").innerHTML = "Lives: " + lives;

    document.addEventListener('keydown', function (event) {
        console.log(winnerWord.includes(event.key))
        if(winnerWord.includes(event.key) === true) {
            console.log(event.key);   
        } else {
            console.log(event.key);
            lives--;
            console.log(lives);
        }
        
        for(var i = 0; i < winnerWord.length; i++) {
            if(winnerWord[i] === event.key) {
                spaces[i] = event.key;
                console.log(spaces); 
                document.getElementById("output").innerHTML = "Your Progress " + spaces;
            }
        }

        if (lives === 0) {
            console.log("you lose")
            document.write("Game Over!");
        } else if (spaces === winnerWord) {
            console.log("you win")
            document.write("You Win!");
        }
    })
    
    
    // give the hangman lives, and create a mechanism to take them away
    // create game over/ new game screen

  
    



