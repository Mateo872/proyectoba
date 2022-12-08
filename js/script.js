const flipCardSpider = document.querySelector(".inner-spider");
const flipCardCaptain = document.querySelector(".inner-captain");
const flipCardThor = document.querySelector(".inner-thor");
const flipCardIronMan = document.querySelector(".inner-ironMan");
const flipCardDoctor = document.querySelector(".inner-doctor");
const flipCardHawkeye = document.querySelector(".inner-hawkeye");

flipCardSpider.addEventListener("click", flipSpider);
flipCardCaptain.addEventListener("click", flipCaptain);
flipCardThor.addEventListener("click", flipThor);
flipCardIronMan.addEventListener("click", flipIronMan);
flipCardDoctor.addEventListener("click", flipDoctor);
flipCardHawkeye.addEventListener("click", flipHawkeye);

function flipSpider() {
  flipCardSpider.classList.toggle("flip");
}
function flipCaptain() {
  flipCardCaptain.classList.toggle("flip");
}
function flipThor() {
  flipCardThor.classList.toggle("flip");
}
function flipIronMan() {
  flipCardIronMan.classList.toggle("flip");
}
function flipDoctor() {
  flipCardDoctor.classList.toggle("flip");
}
function flipHawkeye() {
  flipCardHawkeye.classList.toggle("flip");
}
