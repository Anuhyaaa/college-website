// This script only adds/removes a class based on scroll position
// It doesn't directly manipulate the DOM or add event listeners to menu items
document.addEventListener('DOMContentLoaded', function () {
    // Add 'at-top' class to body initially
    document.body.classList.add('at-top');

    // Function to check scroll position and update class
    function checkScroll() {
        if (window.scrollY > 10) {
            document.body.classList.remove('at-top');
        } else {
            document.body.classList.add('at-top');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);

    // Check initial scroll position
    checkScroll();
});