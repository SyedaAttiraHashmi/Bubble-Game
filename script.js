var timer = 30;
var score = 0;
var hitval = 0;

// Even Bubbling
// jispy click karogy wo element per event raise hoga, or event listener na milny per 
// event element k parent per listener dhondyga agar us py b ni hwa to us k parent per dhondyga
function scorefu() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewHit() {
    hitval = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = hitval;
}

function makeBubble() {
    var c = ""

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        c += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = c;

}

function runTimer() {
    var intertime = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerint").textContent = timer;
        } else {
            clearInterval(intertime);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over! Please Try Again</h1>`;
        }

    }, 1000);

}

document.querySelector("#pbtm")
    .addEventListener("click", function (a) {
        var clicknum = Number(a.target.textContent);
        if (clicknum === hitval){
            scorefu();
            makeBubble();
            getnewHit();
        }

    })

getnewHit();
runTimer();
makeBubble();


