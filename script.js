const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Some cats are allergic to humans.",
    "A shrimp's heart is located in its head.",
    "The longest time between two twins being born is 87 days."
];

document.getElementById('generate').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
});
