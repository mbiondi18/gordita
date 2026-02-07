// Create floating hearts on success page
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

// Generate hearts continuously
setInterval(createHeart, 300);

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
