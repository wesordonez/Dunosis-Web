
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


// Simple image switch for the card carousel
const cards = document.querySelectorAll('.card');
let currentCard = 0;

function switchCards() {
    cards.forEach((card, index) => {
    card.style.opacity = '0'; // hide all cards
    });
    cards[currentCard].style.opacity = '1'; // show current card
    currentCard = (currentCard + 1) % cards.length; // move to the next card
}

setInterval(switchCards, 3000); // switch every 3 seconds

switchCards();

// Revolving banner
const banner = document.querySelector('.banner-content');
let bannerScroll = 0;

function scrollBanner() {
    bannerScroll -= 0; // scroll speed
    banner.style.transform = `translateX(${bannerScroll}px)`;

    if (Math.abs(bannerScroll) >= banner.offsetWidth / 2) {
    bannerScroll = 0; // reset position
    }
}
setInterval(scrollBanner, 0); // speed for revolving banner
=======
// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const submitButton = document.querySelector('.submit-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (name.value === '') {
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        }

        if (email.value === '') {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }

        if (message.value === '') {
            message.classList.add('error');
        } else {
            message.classList.remove('error');
        }

        if (name.value !== '' && email.value !== '' && message.value !== '') {
            form.submit();
        }
    });

    name.addEventListener('input', function() {
        if (name.value !== '') {
            name.classList.remove('error');
        }
    });

    email.addEventListener('input', function() {
        if (email.value !== '') {
            email.classList.remove('error');
        }
    });

    message.addEventListener('input', function() {
        if (message.value !== '') {
            message.classList.remove('error');
        }
    });
});

