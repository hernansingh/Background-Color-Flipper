const colorHex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hex = "#"

    for (i = 0; i < 6; i++) {
        hex += colorHex[Math.floor(Math.random() * colorHex.length)];
    };

    color.textContent = hex;
    document.body.style.backgroundColor = hex;
    console.log(hex);
});