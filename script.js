/* Initialize DOM element selectors and game variables */
const rulesBtn = document.querySelector("button.rules-btn");
const rules = document.querySelector(".rules");
const rulesExit = document.querySelector(".rules .heading img");
const overlay = document.querySelector(".overlay");
const items = ["scissors", "paper", "rock", "lizard", "spock"];
const score = document.querySelector(".score h1");

/* Implement show/hide functionality for the rules modal */
rulesBtn.addEventListener("click", () => {
  rules.classList.add("display-flex");
  overlay.classList.add("display-block");
  document.body.classList.add("min-height-100");
  document.querySelector("main.container").classList.add("min-height-100");
