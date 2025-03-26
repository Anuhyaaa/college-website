document.addEventListener('DOMContentLoaded', function () {
    // Get all menu items
    const menuItems = document.querySelectorAll('.main-menu li a');

    // Add click event listeners to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');

            // Special handling for ADMISSIONS link (which points to #hero)
            if (targetId === '#hero') {
                e.preventDefault(); // Prevent default anchor behavior

                // Scroll to top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Get the target section element
                const targetSection = document.querySelector(targetId);

                // Add the bounce animation class
                targetSection.classList.add('section-bounce');

                // Remove the animation class after animation completes to allow it to be triggered again
                setTimeout(() => {
                    targetSection.classList.remove('section-bounce');
                }, 1000); // 1 second matches our animation duration

                return;
            }

            // Check if we're already on this section (item is active)
            if (this.classList.contains('active')) {
                e.preventDefault(); // Prevent default anchor behavior

                // Get the target section element
                const targetSection = document.querySelector(targetId);

                // Add the bounce animation class
                targetSection.classList.add('section-bounce');

                // Remove the animation class after animation completes to allow it to be triggered again
                setTimeout(() => {
                    targetSection.classList.remove('section-bounce');
                }, 1000); // 1 second matches our animation duration
            }
        });
    });

    // Add click event listeners to logo images
    const logoLinks = document.querySelectorAll('.logo a, .footer-logo a');
    logoLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Allow default behavior (page reload) but add a small delay for visual feedback
            setTimeout(() => {
                return true;
            }, 100);
        });
    });
});