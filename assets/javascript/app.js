//
// function timesUp(){
//     numberWrong++;
//     resetTimer();
//     showResult("Time's Up! The correct answer was " + currentQuestion.answers[currentQuestion.correctAnswer], "timesUp");
// }
// function resetTimer(){
//     clearInterval(timer);
//     timeToGuess = questionLength;
//     $("#timer").empty();
// }
//     $("#result").removeClass().html("<h1>Game Over</h1><div class='gameOverText'>You got " + numberRight + " questions right and " + numberWrong + " wrong. " + praise + "</div><button id='newGame'>Play Again</button>");
//     $("#newGame").on("click", initGame);
// }
// $(document).ready(initGame);
//
//
// function countdown() {
// //    jquary for countdown
// }
// setInterval(countdown, 30000)
//
// var count=30;
//
// var counter=setInterval(timer, 30000); //1000 will  run it every 1 second
//
// function timer()
// {
//     count=count-1;
//     if (count <= 0)
//     {
//         clearInterval(counter);
//         //counter ended, do something here
//         return;
//     }
//
//     //Do code for showing the number of seconds here
// }
//
//
//
// $(document).ready(function(){
//     $("#start-button").click(function(){
//
//
//
//         function start() {
//         counter = setInterval(timer, 30000);
//         }
//
//
//         start();
//
//     });
// });

$(document).ready(function(){
    function getdate(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        if(s<10){
            s = "0"+s;
        }

        $("h1").text(h+" : "+m+" : "+s);
        setTimeout(function(){getdate()}, 500);
    }

    $("button").click(getdate);
});