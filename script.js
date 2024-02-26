var score = 0;
var hitNumber = 0;

function makeBubble() {
  var clutter = "";

  // We made bubble using for loop and using query selector we put it inside the inner white box
  for (var i = 1; i < 120; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${rn} </div>`;
  }

  document.querySelector(".innerboxbtm").innerHTML = clutter;

  // we will use math.random to assign values to our bubbles
}

var timer = 60;
function runTimer() {
  var timerfunction = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timervalue").innerHTML = timer;
    } else {
      clearInterval(timerfunction);
      document.querySelector(".innerboxbtm").innerHTML = ` 
             <div class="finalScoreBox">
            <h1 class="gameOver"> GAME OVER</h1>
            <h2 class="gameFinalScore"> <br> Your score is ${score}</h2>
        </div>
            `;
    }
  }, 1000);
}

function getNewHit() {
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector(".newHit").innerHTML = hitNumber;
}
function getScoreValue() {
  score += 10;
  document.querySelector(".scoreValue").innerHTML = score;
}

// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// we can not make event listerners individually for all bubbles so we make one for its parent which is innner white box soo if we click on any bubble first it will find the event listner to the bubble then to its parent. this cpncept is known as event bubbling.

document
  .querySelector(".innerboxbtm")
  .addEventListener("click", function (details) {
    // console.log(details.target.innerText)  // THIS will print string number so we put it inside Number()

    var clickedNumber = Number(details.target.innerText);

    if (clickedNumber === hitNumber) {
      getScoreValue();
      getNewHit();
      makeBubble();
    }
  });

makeBubble();
runTimer();
getNewHit();
