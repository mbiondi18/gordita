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

// Music handling - simplified for mobile compatibility
const music = document.getElementById('bgMusic');
const tapOverlay = document.getElementById('tap-overlay');
let musicStarted = false;

function startMusic(e) {
    if (e) {
        e.preventDefault();
    }
    
    if (!musicStarted && music) {
        // Load and play the music
        music.load();
        music.play().then(() => {
            musicStarted = true;
            if (tapOverlay) {
                tapOverlay.style.display = 'none';
            }
            console.log('Music started successfully!');
        }).catch((error) => {
            console.error('Music play failed:', error);
        });
    }
}

// Handle tap overlay click/touch
if (tapOverlay) {
    tapOverlay.addEventListener('click', startMusic);
    tapOverlay.addEventListener('touchend', startMusic);
}

// Try autoplay for desktop (will fail on mobile, that's ok)
if (music) {
    music.play().then(() => {
        musicStarted = true;
        if (tapOverlay) {
            tapOverlay.style.display = 'none';
        }
    }).catch(() => {
        // Autoplay blocked, user needs to tap (overlay will handle it)
    });
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
