// ===== NAVIGATION ===== 
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
let navMenu = null;

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Close mobile menu if open
        if (navMenu && navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter portfolio items
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', () => {
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (!navMenu) {
                // Create mobile menu
                navMenu = document.createElement('div');
                navMenu.style.cssText = `
                    position: absolute;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background-color: white;
                    display: none;
                    flex-direction: column;
                    padding: 20px;
                    gap: 20px;
                    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                    z-index: 999;
                `;
                
                // Add nav links to mobile menu
                navLinks.forEach(link => {
                    const mobileLink = link.cloneNode(true);
                    mobileLink.style.cssText = 'padding: 10px; text-decoration: none; color: #2c3e50;';
                    navMenu.appendChild(mobileLink);
                });
                
                document.querySelector('.navbar .container').parentElement.appendChild(navMenu);
            }
            
            // Toggle menu visibility
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
            }
        });
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll function (fallback for older browsers)
function smoothScroll(element) {
    const target = document.querySelector(element);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add fade-in animation styles to stylesheet
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease forwards;
    }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE =====
console.log('%cWelcome to my portfolio! 👋', 'font-size: 20px; color: #e74c3c; font-weight: bold;');
console.log('%cMade with ❤️ by Adedarshini Lakshman', 'font-size: 14px; color: #2c3e50;');