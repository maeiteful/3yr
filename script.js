// Get the required elements from the DOM
const pages = document.querySelectorAll('.page');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentPage = 0; // Index of the current page

// Function to flip to the next page
function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('flipped');
        pages[currentPage].style.zIndex = currentPage;
        currentPage++;
    }
}

// Function to flip to the previous page
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].style.zIndex = 12-currentPage;
    }
}

// Event Listeners for the buttons
nextButton.addEventListener('click', nextPage);
prevButton.addEventListener('click', prevPage);

// Enable arrow key navigation (left and right)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        prevPage();
    }
});

// Swipe navigation for mobile
let startX = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const endX = e.touches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50) {
        nextPage();
        startX = 0;
    } else if (diffX < -50) {
        prevPage();
        startX = 0;
    }
});