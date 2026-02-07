const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const messageEl = document.getElementById('message');
const attemptCountEl = document.getElementById('attemptCount');
const music = document.getElementById('bgMusic');

let attempts = 0;
let yesBtnScale = 1;

const messages = [
    "You know you want to! 💕",
    "Don't run away! 🏃‍♀️",
    "Just say yes! 😊",
    "Come on, gordita! 💝",
    "You can't escape! 😘",
    "Why are you running? 🤔",
    "Say yes already! 💖",
    "I know you'll say yes! 🌹",
    "Stop playing hard to get! 😏",
    "Yes is the only answer! ❤️"
];

// Try to play music immediately
music.play().catch(() => {
    // If autoplay is blocked, play on first user interaction
    document.body.addEventListener('click', () => {
        music.play().catch(() => {});
    }, { once: true });
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    const heartsContainer = document.getElementById('hearts-container');
    if (heartsContainer) {
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

// Generate hearts continuously
setInterval(createHeart, 300);

// Move the "No" button when user hovers over it
noBtn.addEventListener('mouseover', moveButton);

// Also move it when user tries to click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    attempts++;
    attemptCountEl.textContent = attempts;
    
    // Show random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageEl.textContent = randomMessage;
    
    // Make Yes button bigger
    yesBtnScale += 0.1;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    
    // Get the viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    // Generate random position
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply fixed positioning to move anywhere on the page
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'none';
}

function sayYes() {
    window.location.href = 'yes.html';
}
