// Project data
const projectsData = {
    present: [
        {
            name: "The Thalaiyady Sea Water Desalination Plant the Jaffna Kilinochchi Water Supply Project",
            description: "",
            image: "images/36.jpg",
            status: "present"
        },
        {
            name: "JAFFNA KILINOCHCHI WATER SUPPLY PROJECT - JAFFNA",
            description: "",
            image: "images/30.jpg",
            status: "present"
        },
        {
            name: "Kelani Right Bank Water Supply Project - Stage II",
            description: "Suez International Company",
            image: "images/13.jpg",
            status: "present"
        }
    ],
    past: [
        {
            name: "Town South Water Supply Project - Kandy",
            description: "Under MTHojgaard A/S - A Danish Company.",
            image: "images/15.jpg",
            status: "past"
        },
        {
            name: "Piyangala Quarry - Ampara",
            description: "",
            image: "images/16.jpg",
            status: "past"
        },
        {
            name: "Oluvil Port Development Project",
            description: "Under MTHojgaard A/S - A Danish Company.",
            image: "images/17.jpg",
            status: "past"
        },
        {
            name: "Nuwara Eliya Water Supply Project",
            description: "Under Phil and Son A/S - A Danish Company.",
            image: "images/19.jpg",
            status: "past"
        },
        {
            name: "Meewathura Water Treatment Plant",
            description: "",
            image: "images/21.jpg",
            status: "past"
        },
        {
            name: "Ulapane Water Treatment Plant",
            description: "",
            image: "images/22.jpg",
            status: "past"
        },
        {
            name: "Waterfront Integrated Resort Project - Colombo 02",
            description: "Under Waterfront Properties (Pvt) Ltd of Hyundai",
            image: "images/23.jpg",
            status: "past"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const tabButtons = document.querySelectorAll('.tab-btn');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Toggle aria-expanded for accessibility
    const expanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', expanded);
});

// Keyboard accessibility for hamburger
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Project Tabs Functionality
function loadProjects(category) {
    projectsContainer.innerHTML = '';
    
    const projects = projectsData[category];
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<div class="loading"><p>No projects available</p></div>';
        return;
    }
    
    projects.forEach((project, i) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.opacity = 0;
        projectCard.style.transform = 'translateY(40px)';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <span class="project-status ${project.status}">${project.status === 'present' ? 'Present Project' : 'Past Project'}</span>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
        setTimeout(() => {
            projectCard.style.transition = 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
            projectCard.style.opacity = 1;
            projectCard.style.transform = 'none';
        }, 100 + i * 120);
    });
}

// Tab button event listeners
const projectsGrid = document.querySelector('.projects-grid');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Tab fade out
        projectsGrid.classList.add('tab-fade');
        setTimeout(() => {
            // Load projects for selected category
            const category = button.getAttribute('data-tab');
            loadProjects(category);
            // Tab fade in
            projectsGrid.classList.remove('tab-fade');
        }, 400);
    });
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !service || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Create email content
    const emailContent = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${service}
        Message: ${message}
    `;
    
    // Open default email client
    const mailtoLink = `mailto:3starholdingspvt@gmail.com?subject=Inquiry from ${name}&body=${encodeURIComponent(emailContent)}`;
    window.open(mailtoLink);
    
    // Show success message
    alert('Thank you for your inquiry! Your email client should open with a pre-filled message. If it doesn\'t, please email us directly at 3starholdingspvt@gmail.com');
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const pvtSpan = document.querySelector('.nav-logo-pvt');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        if (pvtSpan) pvtSpan.style.color = '#000';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.backdropFilter = 'none';
        if (pvtSpan) pvtSpan.style.color = '#fff';
    }
});

// Toggle .scrolled class on navbar when scrolling for hamburger bar color
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize testimonials
document.addEventListener('DOMContentLoaded', () => {
    // Load initial projects (present projects)
    loadProjects('present');

    // Commendation Letters modal
    document.querySelectorAll('.commendation-img').forEach(img => {
        img.addEventListener('click', () => {
            createModal(`<img src='${img.src}' alt='${img.alt}' style='max-width:90vw;max-height:80vh;border-radius:10px;'>`);
        });
    });
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZjNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
            img.alt = 'Image not available';
        });
    });
});

// Disable right-click on images
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
    });
});

// --- Professional Animations: Intersection Observer for Fade/Slide-in ---
function animateOnScroll() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section, .container, .about-content, .services-grid, .projects-grid, .testimonials-slider, .certificates-grid, .contact-content, .assurance, .project-card, .service-card, .testimonial, .certificate').forEach(el => {
    observer.observe(el);
  });
}
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Modal HTML injection
function createModal(content) {
    let modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="custom-modal-backdrop"></div>
        <div class="custom-modal-content">
            <span class="custom-modal-close">&times;</span>
            ${content}
        </div>
    `;
    document.body.appendChild(modal);
    document.body.classList.add('custom-modal-open');
    // Disable right-click on images inside modal
    modal.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
    });
    // Close logic
    function closeModal() {
        modal.remove();
        document.body.classList.remove('custom-modal-open');
    }
    modal.querySelector('.custom-modal-close').onclick = closeModal;
    modal.querySelector('.custom-modal-backdrop').onclick = closeModal;
    return modal;
}

// Project modal
projectsContainer.addEventListener('click', function(e) {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const idx = Array.from(projectsContainer.children).indexOf(card);
    const tab = document.querySelector('.tab-btn.active').dataset.tab;
    const project = projectsData[tab][idx];
    if (!project) return;
    createModal(`
        <img src='${project.image}' alt='${project.name}' class='modal-project-image'>
        <div class='modal-project-details'>
            <h2>${project.name}</h2>
            <p>${project.description}</p>
        </div>
    `);
});

// Certificate modal and disable right-click
const certificatesGrid = document.querySelector('.certificates-grid');
if (certificatesGrid) {
    certificatesGrid.addEventListener('click', function(e) {
        const img = e.target.closest('.certificate-img');
        if (!img) return;
        createModal(`<img src='${img.src}' alt='Certificate' class='modal-certificate-image' oncontextmenu='return false;'>`);
    });
}

// Animate service cards on scroll
function animateServiceCards() {
    const cards = document.querySelectorAll('.service-card[data-animate]');
    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', animateServiceCards);
