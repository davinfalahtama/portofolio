// Add scroll animation for sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSections);

function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        }
    });
}

// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
