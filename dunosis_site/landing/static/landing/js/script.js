
// Smooth scroll to next section
function onLearnMoreClick(event) {
    document.addEventListener('DOMContentLoaded', function() {
        const learnMoreLink = document.querySelector('.learn-more');
        const nextSection = document.querySelector('#services-section');

        learnMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Smooth scroll to top

document.addEventListener('DOMContentLoaded', function() {
    const toTopLink = document.querySelector('.header-logo');

    toTopLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Hide navbar menu, show on scroll down

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.querySelector('.learn-more');
    const nextSection = document.querySelector('#services-section');
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const logoText = document.querySelector('.logo-text');

    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        const sectionTop = nextSection.getBoundingClientRect().top;
        if (sectionTop <= 0) {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('visible');
            logoText.classList.add('visible');
            logoText.classList.remove('hidden');
        } else {
            navLinks.classList.remove('hidden');
            navLinks.classList.add('visible');
            logoText.classList.remove('visible');
            logoText.classList.add('hidden');
        }
    });
});

// Header Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    hamburgerMenu.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('visible');
    });
});
