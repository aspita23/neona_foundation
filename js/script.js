// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile menu toggle (you'll need to add a mobile menu button in HTML)
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = item.querySelector('img').src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});