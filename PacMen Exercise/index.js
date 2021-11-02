'use strict';

let pacMenImages = [
    './images/PacMan1.png',
    './images/PacMan2.png',
    './images/PacMan3.png',
    './images/PacMan4.png'
]
let container = document.getElementById("container");
let pacMens = [];
let interval = null;

function addPacMen() {
    const pacMenElement = document.createElement('img');
    pacMenElement.src = pacMenImages[0];

    const position = getRandomVector(400);
    const velocity = getRandomVector(3);
    const animationDelay = Math.floor((Math.random() * 5))
    pacMenElement.width = 30;
    pacMenElement.style.position = "absolute";
    pacMenElement.style.left = position.x + "px";
    pacMenElement.style.top = position.y + "px";

    pacMenElement.className = "pacMen";
    pacMenElement.id = String(pacMens.length);

    container.appendChild(pacMenElement)

    pacMens.push({
        position,
        velocity,
        animationDelay,
        animationFrame: 0,
        pacMenElement
    });
}

function removeLastPacMen() {
    document.getElementById(String(pacMens.length-1)).remove();
    pacMens.pop();
}

function getRandomVector(max) {
    return {
        x: Math.floor((Math.random() * max) + 1),
        y: Math.floor((Math.random() * max) + 1)
    }
}

function startGame() {
    if (interval !== null) return;
    let timer = 0;
    interval = setInterval(() => {
        update(timer++);
    }, 10);
}

function stopGame() {
    if (interval != null) {
        clearInterval(interval);
        interval = null;
    }
}

function resetGame() {
    document.querySelectorAll(".pacMen").forEach(val => val.remove())
    pacMens = [];
    stopGame();
}

function update(timer) {
    pacMens.forEach((pacMen) => {
        checkCollision(pacMen);

        pacMen.position.x += pacMen.velocity.x;
        pacMen.position.y += pacMen.velocity.y;

        pacMen.pacMenElement.style.left = pacMen.position.x + "px";
        pacMen.pacMenElement.style.top = pacMen.position.y + "px";
        animation(pacMen, timer);
    })
}

function checkCollision(pacMen) {
    if (pacMen.position.y + 30 >= container.offsetHeight || pacMen.position.y <= 0) pacMen.velocity.y *= -1;
    if (pacMen.position.x + 30 >= container.offsetWidth || pacMen.position.x <= 0) pacMen.velocity.x *= -1;

}

function animation(pacMen, timer) {
    
}