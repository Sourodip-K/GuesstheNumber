var number= Math.floor(Math.random()*10 +1);
var guess = 1;
document.getElementById("submitGuess").onclick= function() {
    var input = document.getElementById("guessField").value;
    if(input == number) {
        alert("Congratulations! You won nothing! Life is still sad but since you did it right in "+ guess +" guesses, you get drumroll areyouready? Nothing!!! /_(ツ)_/¯ ");
    }
    else if (input > number) {
        guess++;
        alert("You moron! Try smaller!");
    }
    else {
        guess++;
        alert("You dumbo, aim higher!")
    }
}