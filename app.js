// Hämtar textBox-elementet som kommer att innehålla knappen och texten
const textBox = document.getElementById("textBox");
// Hämtar text-elementet som ändras när knappen klickas
let textInnehåll = document.getElementById("text");
// Hämtar knappen som användaren klickar på för att ändra texten
const btn = document.getElementById("btn");

// Lyssnar efter när knappen klickas och kör 'byt' funktionen
btn.addEventListener("click", byt);

// Funktion som körs när användaren klickar på knappen
function byt(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om (eftersom det var ett formulär tidigare)
    // Ändrar texten i h1-elementet
    textInnehåll.textContent = "Goodbye world!";
    // Kollar om det redan finns en reset-knapp, om inte skapar den en ny
    if(!document.getElementById("resetBtn")){
        skapaNyBtn(); // Skapar reset-knappen
    }
}

// Funktion som skapar en ny knapp med id "resetBtn" och lägger till den i textBox
function skapaNyBtn() {
    const resetBtn = document.createElement("button"); // Skapar ett nytt knappelement
    resetBtn.id = "resetBtn"; // Ger knappen ett id för styling och identifikation
    resetBtn.textContent = "Reset"; // Text som ska visas på knappen
    textBox.appendChild(resetBtn); // Lägger till den nya knappen i textBox
    console.log("Knappen har skapats"); // Skriver ett meddelande i konsolen för att verifiera att knappen skapats
}