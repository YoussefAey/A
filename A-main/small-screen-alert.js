// small-screen-alert.js

// Check the screen width when the page loads
window.addEventListener('load', function () {
    if (window.innerWidth < 600) { // Adjust the width threshold as needed
        alert('This site is best viewed on a computer.');
    }
});

