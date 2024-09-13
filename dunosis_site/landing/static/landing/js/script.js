
// Smooth scroll to next section

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.querySelector('.learn-more');
    const nextSection = document.querySelector('#services-section');

    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Hide navbar, show on scroll down

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const nextSection = document.querySelector('#services-section');

    window.addEventListener('scroll', function() {
        const sectionTop = nextSection.getBoundingClientRect().top;
        if (sectionTop <= 0) {
            header.style.display = 'flex';
        } else {
            header.style.display = 'none';
        }
    });
});