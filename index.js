let quotes = [
    "Believe you can and you're halfway there.",
    "Success is not the key to happiness. Happiness is the key to success",
    "The only way to do great work is to love what you do",
    "Your limitation—it's only your imagination",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done."


];

let citation = document.getElementById("citation");

function generecitation() {
    // Génére un index aléatoire pour choisir une citation
    let randomIndex = Math.floor(Math.random() * quotes.length);
    citation.innerText = quotes[randomIndex]; // Affiche la citation aléatoire
}

// Appelle la fonction pour afficher une citation au chargement de la page
generecitation();
