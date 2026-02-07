// Create floating hearts on success page
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    const heartsContainer = document.getElementById('hearts-container');
    if (heartsContainer) {
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

// Generate MORE hearts continuously (every 150ms for lots of hearts!)
setInterval(createHeart, 150);

// Music handling for mobile
const music = document.getElementById('bgMusic');
const tapOverlay = document.getElementById('tap-overlay');
let musicStarted = false;

function startMusic() {
    if (!musicStarted && music) {
        music.play().then(() => {
            musicStarted = true;
            if (tapOverlay) {
                tapOverlay.classList.add('hidden');
            }
        }).catch(() => {
            // Keep overlay visible if music fails
        });
    }
}

// Try autoplay first (works on desktop)
if (music && sessionStorage.getItem('userClickedYes') === 'true') {
    startMusic();
}

// Handle tap overlay (for mobile)
if (tapOverlay) {
    tapOverlay.addEventListener('click', startMusic);
    tapOverlay.addEventListener('touchstart', startMusic);
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function moveCarousel(direction) {
    showSlide(currentSlide + direction);
}

// Auto-advance carousel every 3 seconds
setInterval(() => {
    moveCarousel(1);
}, 3000);
