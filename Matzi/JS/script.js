/* =========================
   START BUTTON
========================= */

var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function () {

    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   TIMELINE SCROLL ANIMATION
========================= */

var timelineItems = document.querySelectorAll(".timeline-item");

var observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});


timelineItems.forEach(function (item) {

    observer.observe(item);

});


/* =========================
   STARS
========================= */

var starsContainer = document.querySelector(".stars");

for (var i = 0; i < 100; i++) {

    var star = document.createElement("span");

    star.style.position = "fixed";
    star.style.width = Math.random() * 4 + 1 + "px";
    star.style.height = star.style.width;

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.backgroundColor = "white";
    star.style.borderRadius = "50%";

    star.style.boxShadow = "0 0 8px white";

    star.style.opacity = Math.random();

    star.style.animation = "twinkle " +
        (Math.random() * 3 + 1) +
        "s infinite alternate";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


/* =========================
   ADD TWINKLE ANIMATION
========================= */

var style = document.createElement("style");

style.innerHTML = "@keyframes twinkle { from { opacity: 0.2; transform: scale(0.5); } to { opacity: 1; transform: scale(1.5); } }";

document.head.appendChild(style);


/* =========================
   CONFETTI
========================= */

var finalSection = document.querySelector(".final");
var confettiContainer = document.querySelector(".confetti");

function createConfetti() {

    for (var i = 0; i < 120; i++) {

        var piece = document.createElement("span");

        piece.style.position = "absolute";

        piece.style.width =
            Math.random() * 10 + 5 + "px";

        piece.style.height =
            Math.random() * 15 + 5 + "px";

        piece.style.backgroundColor =
            getRandomColor();

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            -20 + "px";

        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";

        piece.style.animation =
            "fall " +
            (Math.random() * 3 + 2) +
            "s linear infinite";

        piece.style.animationDelay =
            Math.random() * 4 + "s";

        confettiContainer.appendChild(piece);

    }

}


function getRandomColor() {

    var colors = [
        "#ff2d95",
        "#ffd166",
        "#8c52ff",
        "#00f5d4",
        "#ff9f1c",
        "#ffffff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


/* =========================
   CONFETTI ANIMATION
========================= */

var confettiStyle = document.createElement("style");

confettiStyle.innerHTML = "@keyframes fall { 0% { transform: translateY(-20px) rotate(0deg); } 100% { transform: translateY(110vh) rotate(720deg); } }";

document.head.appendChild(confettiStyle);

createConfetti();


/* =========================
   FIREWORKS
========================= */

var fireworks = document.querySelector(".fireworks");

fireworks.addEventListener("click", function () {

    createFireworks();

});


function createFireworks() {

    for (var i = 0; i < 30; i++) {

        var spark = document.createElement("span");

        spark.style.position = "absolute";

        spark.style.left = "50%";
        spark.style.top = "50%";

        spark.style.width = "5px";
        spark.style.height = "5px";

        spark.style.borderRadius = "50%";

        spark.style.backgroundColor =
            getRandomColor();

        var angle =
            Math.random() * Math.PI * 2;

        var distance =
            Math.random() * 250 + 100;

        var x =
            Math.cos(angle) * distance;

        var y =
            Math.sin(angle) * distance;

        spark.style.setProperty(
            "--x",
            x + "px"
        );

        spark.style.setProperty(
            "--y",
            y + "px"
        );

        spark.style.animation =
            "explode 1s ease-out forwards";

        finalSection.appendChild(spark);

        setTimeout(function (element) {

            element.remove();

        }, 1000, spark);

    }

}


/* =========================
   FIREWORK ANIMATION
========================= */

var fireworkStyle = document.createElement("style");

fireworkStyle.innerHTML = "@keyframes explode { 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(0); opacity: 0; } }";

document.head.appendChild(fireworkStyle);


/* =========================
   AUTOMATIC FIREWORKS
========================= */

setInterval(function () {

    createFireworks();

}, 2500);