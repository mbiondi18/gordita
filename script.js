const noBtn = document.getElementById('noBtn');

// Move the "No" button when user hovers over it
noBtn.addEventListener('mouseover', moveButton);

// Also move it when user tries to click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});

function moveButton() {
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
