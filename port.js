// Smooth scrolling
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset if you have a fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile navigation menu after clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-toggle').checked = false; // Assuming you have a checkbox for the mobile menu with class 'nav-toggle'
    });
});
