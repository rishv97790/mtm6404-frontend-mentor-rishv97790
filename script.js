// script.js

// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('nav a');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Read more functionality
const readMoreBtn = document.querySelector('.cta');
const articleContent = document.querySelector('.featured p');

readMoreBtn.addEventListener('click', () => {
  if (articleContent.style.maxHeight) {
    articleContent.style.maxHeight = null;
    readMoreBtn.textContent = 'Read more';
  } else {
    articleContent.style.maxHeight = articleContent.scrollHeight + 'px';
    readMoreBtn.textContent = 'Read less';
  }
});
