/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let paliInput = document.createElement("input");
const labelPaliInput = document.createElement("label");
const resultPali = document.createElement("p");
const btnPali = document.createElement("button");

paliInput.id = "palindrome";
paliInput.setAttribute("type", "text");
labelPaliInput.setAttribute("for", "palindrome");

labelPaliInput.innerText = "Insert a word";

console.dir(labelPaliInput);

document.body.appendChild(labelPaliInput);
document.body.appendChild(paliInput);
document.body.appendChild(resultPali);
document.body.appendChild(btnPali);

btnPali.classList.add("btn", "btn-large", "btn-primary");

btnPali.addEventListener("click", revealsPali);

function revealsPali() {

    let userInput = paliInput.value;
    let splitUserInput = userInput.split("");
    let revUserInput = splitUserInput.reverse();
    let joinedReverse = revUserInput.join("");

    if (!userInput || !isNaN(userInput)) {
        resultPali.innerText = "Insert one word"
    } else if (userInput === joinedReverse) {
        resultPali.innerText = `${paliInput.value} is a Palindrome`;
    } else {
        resultPali.innerText = `${paliInput.value} isn't a Palindrome`;
    }

    paliInput.value = "";

}


// PARI E DISPARI

let divEvenOdd = document.createElement("div")
let selectEvenOdd = document.createElement("select");
let options = ["pari", "dispari"];

document.body.appendChild(divEvenOdd);
divEvenOdd.appendChild(selectEvenOdd);

for (let i = 0; i < options.length; i++) {
    let optionsChoice = document.createElement("option");
    optionsChoice.innerText = options[i];
    selectEvenOdd.appendChild(optionsChoice);
}

let chooseNumberDiv = document.createElement("div");
document.body.appendChild(chooseNumberDiv);

let selectUserNumber = document.createElement("select");
chooseNumberDiv.appendChild(selectUserNumber);
let numberOptions = [1, 2, 3, 4, 5];

for (let x = 0; x < numberOptions.length; x++) {
    let numberChoice = document.createElement("option");
    numberChoice.innerText = numberOptions[x];
    selectUserNumber.appendChild(numberChoice);
}

const resultEvenOdd = document.createElement("p");
const btnEvenOdd = document.createElement("button");

btnEvenOdd.innerText = "Gioca";
document.body.appendChild(resultEvenOdd);
document.body.appendChild(btnEvenOdd);

btnEvenOdd.addEventListener("click", playGame);



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(n) {
    return n % 2 === 0;
}


function playGame() {
    let userChoice = selectEvenOdd.value;
    let userNumber = selectUserNumber.value;

    let computerNumber = getRandomInt(1, 6);

    let sum = userNumber + computerNumber;

    if (isEven(sum) && userChoice === "pari") {
        resultEvenOdd.innerText = "Hai vinto!";
    } else if (!isEven(sum) && userChoice === "dispari") {
        resultEvenOdd.innerText = "Hai vinto!";
    } else {
        resultEvenOdd.innerText = "Hai perso!";
    }
}
