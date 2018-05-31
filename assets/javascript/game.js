$(document).ready(function() {
    var gem1button = $("#gem1button");
    var gem2button = $("#gem2button");
    var gem3button = $("#gem3button");
    var gem4button = $("#gem4button");

    var sumGem = 0;
    var Wins = 0;
    var Losses = 0;

    var targetNumber = Math.floor(Math.random()*101)+19;
    var gem1 = Math.floor(Math.random()*11)+1;
    var gem2 = Math.floor(Math.random()*11)+1;
    var gem3 = Math.floor(Math.random()*11)+1;
    var gem4 = Math.floor(Math.random()*11)+1;
    console.log ("Gem Values: " + gem1 + "," + gem2 + "," + gem3 + "," + gem4)
    $("#number-to-guess").text(targetNumber);

function gemGenerator() {
    var targetNumber = Math.floor(Math.random()*101)+19;
    gem1 = Math.floor(Math.random()*11)+1;
    gem2 = Math.floor(Math.random()*11)+1;
    gem3 = Math.floor(Math.random()*11)+1;
    gem4 = Math.floor(Math.random()*11)+1;
    console.log ("Gem Values: " + gem1 + "," + gem2 + "," + gem3 + "," + gem4)
    $("#number-to-guess").text(targetNumber);
}

function newGame() {
    if (confirm ("Congratulations! Shall we play again?") == true) {
        gemGenerator();
        sumGem = 0;
        $("#totalGem").text(sumGem);
    }
    else {
    }
}
function gameOver() {
    if (confirm ("You did not Succeed. Shall we play again?") == true) {
        gemGenerator();
        sumGem = 0;
        $("#totalGem").text(sumGem);
    }
    else {

    }
}

function checkGame() {

    if (sumGem === targetNumber) {
        Wins ++;
        newGame();
        $("#wins").text(Wins);
        }

    else if (sumGem >= targetNumber) {
        Losses ++;
        gameOver();
        $("#losses").text(Losses);
    }
}

    $("#totalGem").text(sumGem);
    $("#wins").text(Wins);
    $("#losses").text(Losses);


gem1button.on("click", function() {
    sumGem += gem1;
    $("#totalGem").text(sumGem);
    checkGame();
})

gem2button.on("click", function() {
    sumGem += gem2
    $("#totalGem").text(sumGem);
    checkGame();
})

gem3button.on("click", function() {
    sumGem += gem3
    $("#totalGem").text(sumGem);
    checkGame();
})

gem4button.on("click", function() {
    sumGem += gem4;
    $("#totalGem").text(sumGem);
    checkGame();
})
})