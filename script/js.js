const colorSelect = document.getElementById("colorSelect");
const bgSelect = document.getElementById("backgroundSelect");
const quoteSelect = document.getElementById("quoteSelect");
const selectDisplay = document.getElementById('select-display');

let quotes = [
    '“It would seem that you have no useful skill or talent whatsoever," he said. "Have you thought of going into teaching?” ― Terry Pratchett, Mort',
    '“Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving.” ― Terry Pratchett, A Hat Full of Sky',
    'Real stupidity beats artificial intelligence every time. - Terry Pratchett'
]

colorSelect.addEventListener('change', function() {
    selectDisplay.style.color = colorSelect.value;
});

bgSelect.addEventListener('change', function() {
    selectDisplay.style.backgroundColor = bgSelect.value;
});

quoteSelect.addEventListener('change', function() {
    let selected = quoteSelect.selectedIndex;
    selectDisplay.innerHTML = quotes[selected];
});