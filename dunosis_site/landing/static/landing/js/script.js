
// Smooth scroll to next section

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.querySelector('.learn-more');
    const nextSection = document.querySelector('#services-section');

    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});