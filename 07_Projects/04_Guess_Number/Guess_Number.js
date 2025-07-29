let randomNumber = Math.floor((Math.random()*100)+1);
console.log(randomNumber);

let form = document.querySelector(".form");
// console.log(form);
let userInput = document.querySelector("#guessField");
console.log(userInput);
let submit = document.querySelector("#subt");
console.log(submit);
let guessSlot = document.querySelector(".guesses");
console.log(guessSlot);
let remaining = document.querySelector(".lastResult");
console.log(remaining);
let lowOrHi = document.querySelector(".lowOrHi");
console.log(lowOrHi);
let startOver = document.querySelector(".resultParas");
console.log(startOver);

const p = document.createElement("p");

let previousGuesses = [];
let numGuess = 0;
let playGame = true;

if(playGame){

    submit.addEventListener('click', function(event){
        event.preventDefault();
        const userGuess = parseInt(userInput.value);
        console.log(userGuess);
        validateGuess(userGuess);
    })
}

//validate userGuessNumber with correct Number
function validateGuess(guess){
    if(isNaN(guess))
    {
        alert('Please Enter Valid Number!')
    }
    else if(guess < 1)
    {
        alert("Please enter number greater than 1!");
    }
    else if(guess>100)
    {
        alert("Please enter number less than 100!")
    }
    else{
        previousGuesses.push(guess);
        if(numGuess > 10)
        {
            cleanUpGuess(guess);
            displayMessage(`Game Over.Unfortunately you lost game.Random Number was : ${randomNumber}`);
            endGame();
        }
        else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }

}

//check userGuess with randomNumber
function checkGuess(userGuess){

    if( userGuess === randomNumber)
    {
        displayMessage(`🎉 Congratulations.You guessed the correct Number! 🎉`);
        launchConfetti();
        playCelebration();
        showModal();
        endGame();
    }
    else if(userGuess < randomNumber)
    {
        displayMessage(`Your guess is too low!`);

    }
    else if(userGuess > randomNumber)
    {
        displayMessage(`Your guess is too high!`);
    }
}

//cleanUp 
function cleanUpGuess(userGuess)
{
    //userInput cleanUp
    userInput.value = "";
    //add userGuesses
    guessSlot.innerHTML += `${userGuess}, `;
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`;
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    //clean UserInput
    userInput.value = "";
    //user don't allowed to enter number
    userInput.setAttribute('disabled',"");
    //start - button
    p.classList.add("button");
    // Start New Game button
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    //append this button to result parameters
    startOver.appendChild(p);
    //flag to change false
    playGame=false;
    //If user click on Start New Game button then below method call
    startGame();
}
function startGame(){
    const newGameButton = document.querySelector(".button");
    newGameButton.addEventListener('click', function(event){
        //Reset random Number
        randomNumber = Math.floor(Math.random()*100+1);
        //cleanUp previouGuess
        previousGuesses = [];
        //reset numGuess
        numGuess = 0;
        //cleanUp guessSlot Array
        guessSlot.innerHTML = "";
        //reset remaining
        remaining.innerHTML = `${10 - numGuess }`;
        //change disabled to able
        userInput.removeAttribute('disabled');
        //remove that StartNewGame button from result parameters
        startOver.removeChild(p);
        //flag changed
        playGame=true;

        //Bonus- part
        // Hide modal if visible
document.querySelector("#congratsModal").style.display = "none";

// Optional: Clear confetti canvas
const confettiCanvas = document.getElementById("confetti-canvas");
if (confettiCanvas) {
    const ctx = confettiCanvas.getContext("2d");
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

    })
}


/*Celebration functions */
function playCelebration(){
    const sound = document.querySelector("#celebrationSound");
    sound.play();
}

function showModal()
{
    const modal = document.querySelector("#congratsModal");
    const closeButton =document.querySelector(".close-Button");

    modal.style.display = "block";

    closeButton.addEventListener("click", function(){
        modal.style.display ="none";
    });

    window.addEventListener("click", function(event){
        if(event.target === modal)
        {
            modal.style.display = "none";
        }
    });
};

function launchConfetti() {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti-canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);

    const confetti = canvas.getContext("2d");

    // Simple falling rectangles for visual effect (not using external libs)
    let pieces = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speed: Math.random() * 2 + 1
    }));

    function animate() {
        confetti.clearRect(0, 0, canvas.width, canvas.height);
        for (let piece of pieces) {
            confetti.fillStyle = piece.color;
            confetti.fillRect(piece.x, piece.y, piece.size, piece.size);
            piece.y += piece.speed;
            if (piece.y > canvas.height) piece.y = 0;
        }
        requestAnimationFrame(animate);
    }

    animate();
    

    // Auto remove confetti after 5 seconds
    setTimeout(() => {
        canvas.remove();
    }, 5000);
}





