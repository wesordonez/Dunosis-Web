
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

// Hide navbar, show on scroll down

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.querySelector('.learn-more');
    const nextSection = document.querySelector('#services-section');
    const header = document.querySelector('header');

    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        const sectionTop = nextSection.getBoundingClientRect().top;
        if (sectionTop <= 0) {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        } else {
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
        }
    });
});
