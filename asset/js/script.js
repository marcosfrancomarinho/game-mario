const mario = document.querySelectorAll(".mario")[0];
const pipe = document.querySelectorAll(".pipe")[0];
const start = document.querySelectorAll(".start")[0];
let index = 0;
document.addEventListener("keydown", (key) => jump(key));
document.querySelectorAll(".reload")[0].addEventListener("click", () => {
    location.reload();
});
start.addEventListener("click", () => {
    displays();
    document.querySelector(".jump-audio").setAttribute("src", "./asset/audio/jump.wav");
    functionScore();
    hard();
    gameover();
});
function displays() {
    document.querySelectorAll("section")[0].style.borderBottom = `20px solid green`;
    document.querySelectorAll(".canvas")[0].style.display = "none";
    mario.style.display = "block";
    pipe.style.display = "block";
    document.querySelectorAll(".score")[0].style.display = "block";
};
let jump = (key) => {
    if (key.code == "Space") {
        mario.classList.add("jump");
        audioJump();
        setTimeout(() => {
            mario.classList.remove("jump");
        }, 1000);
    };
};
function audioJump() {
    document.querySelector(".jump-audio").play();
};
function audioDead() {
    document.querySelector(".dead-audio").play();
};
const gameover = () => setInterval(() => {
    let msg = document.querySelectorAll(".msg")[0];
    let ball1 = document.querySelectorAll(".ball1")[0];
    let ball2 = document.querySelectorAll(".ball2")[0];
    const cloudI = document.querySelectorAll(".cloudI")[0];
    const cloudII = document.querySelectorAll(".cloudII")[0];
    const positionX = pipe.offsetLeft;
    const positionY = Number(getComputedStyle(mario).bottom.replace("px", " "));
    if (positionX < 60 && positionX > 0 && positionY < 68.53) {
        audioDead();
        mario.children[0].src = "./asset/image/mario-gameover.png";
        mario.children[0].setAttribute("class", "mario-dead");
        pipe.classList.remove("pipe-flow");
        pipe.classList.remove("pipe-flow-hard");
        cloudI.style.animation = "none";
        cloudII.style.animation = "none";
        document.querySelectorAll(".game-over")[0].style.display = "block";
        msg.style.opacity = "1";
        ball1.style.opacity = "1";
        ball2.style.opacity = "1";
        document.querySelectorAll(".reload")[0].style.display = "block"
        clearInterval(score);
        clearInterval(gameover);
    }
}, 10);
const hard = () => setTimeout(() => {
    pipe.classList.remove("pipe-flow");
    pipe.classList.add("pipe-flow-hard");
}, 24800);
const functionScore = function () {
    score = setInterval(() => {
        document.querySelectorAll(".score")[0].innerHTML = `SCORE: ${index}`;
        index++;
    }, 10);
} 