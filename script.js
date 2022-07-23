const BUTTONS = document.querySelectorAll("button");
const QUESTIONS_TABLE = ["Jebać gwoździa?", "Jebać PiS", "Jebać wilczka"];
const MAIN = document.querySelector(".main__questions");
const MAIN_SUBMIT = document.querySelector(".main__submit");
const SPAN_X = document.querySelector(".span__axis--x");
const SPAN_Y = document.querySelector(".span__axis--y");
const IMG = document.querySelector(".img__dot");

let questionIndex = -1;
let axisX = 0;
let axisY = 0;

const QUESTIONSWITCH = () => {
    BUTTONS[0].addEventListener("click", () => {
        axisX += 25;
        axisY += 25;
    })
    BUTTONS[2].addEventListener("click", () => {
        axisX -= 25;
        axisY -= 25;
    })
    BUTTONS.forEach((button) => {
        button.addEventListener("click", () => {
            questionIndex ++;
            document.querySelector("span").innerText = QUESTIONS_TABLE[questionIndex];
            if (questionIndex === 3) {
                MAIN.classList.add("off");
                MAIN_SUBMIT.classList.remove("off");
                SPAN_X.innerText = axisX;
                SPAN_Y.innerText = axisY;
                IMG.style.top = ((axisY * -1.44) + 144) + "px";
                IMG.style.left = ((axisX * 1.44) + 144) + "px";
            }
        })
    })
}

QUESTIONSWITCH();