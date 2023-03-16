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

