document.addEventListener('DOMContentLoaded', () => {
    // const newsBlock = document.getElementById('news-block');

    // // Example news items
    // const newsItems = [
    //     "New transportation routes launched in August 2024.",
    //     "Safety protocols updated for better service.",
    //     "Join us for our annual transportation conference!"
    // ];

    // // Display the news items
    // if (newsItems.length > 0) {
    //     newsBlock.innerHTML = newsItems.map(item => `<p>${item}</p>`).join('');
    // }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });

    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value;
            console.log(`Search query: ${query}`);
            // Here you can implement search functionality (e.g., filtering content)
            alert(`Searching for: ${query}`);
        }
    });

    // Slider functionality
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideIndicators = document.querySelector('.slide-indicators');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    // Create slide indicators
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.textContent = index + 1;
        dot.setAttribute('data-slide', index);
        slideIndicators.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    prevButton.addEventListener('click', function() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlide(slideIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
            showSlide(slideIndex);
        }
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    // Initialize the first slide as active
    showSlide(slideIndex);
});
