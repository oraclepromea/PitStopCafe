 // Enhanced Mobile Navigation Toggle with animations
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Enhanced hamburger animation
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.transform = navMenu.classList.contains('active') 
            ? `rotate(${index === 1 ? 0 : index === 0 ? 45 : -45}deg) translate(${index === 1 ? 0 : index === 0 ? 5 : -5}px, ${index === 1 ? 0 : index === 0 ? 5 : -5}px)`
            : 'none';
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
        });
    });
});

// Enhanced smooth scrolling with easing
document.querySelector('.hero-scroll').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Enhanced Menu tabs functionality with smooth transitions
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show target content with animation
        setTimeout(() => {
            const targetContent = document.getElementById(targetTab);
            targetContent.classList.add('active');
            targetContent.style.opacity = '1';
            targetContent.style.transform = 'translateY(0)';
        }, 150);
    });
});

// Enhanced navbar with scroll effects
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    // Change navbar appearance based on scroll
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
});

// Enhanced Intersection Observer with staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Staggered animation
        }
    });
}, observerOptions);

// Observe elements for enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.menu-item, .gallery-item, .info-item, .feature');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Add loading animation to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(title);
    });
});

// Enhanced gallery with lightbox-style hover effects
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-15px) scale(1.05)';
        item.style.zIndex = '10';
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(218, 165, 32, 0.3);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        item.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.zIndex = '1';
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    .pulse {
        animation: pulse 2s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Enhanced menu item animations with staggered loading
document.querySelectorAll('.menu-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    
    // Add hover sound effect simulation
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.03)';
        item.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Enhanced social links with dynamic effects
document.querySelectorAll('.social-link').forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-8px) scale(1.2) rotate(5deg)';
        
        // Add glow effect
        link.style.boxShadow = '0 10px 30px rgba(218, 165, 32, 0.4), 0 0 20px rgba(218, 165, 32, 0.3)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        link.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Enhanced active nav link highlighting with smooth transitions
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.transform = 'translateY(0)';
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            link.style.transform = 'translateY(-3px)';
        }
    });
});

// Add smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    document.body.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
});

// Enhanced click-to-copy with visual feedback
document.querySelectorAll('.info-item p').forEach(item => {
    if (item.textContent.includes('Phone:') || item.textContent.includes('Email:')) {
        item.style.cursor = 'pointer';
        item.title = 'Click to copy';
        
        item.addEventListener('click', () => {
            const text = item.textContent.split(': ')[1];
            navigator.clipboard.writeText(text).then(() => {
                // Enhanced feedback with animation
                const originalText = item.textContent;
                const originalColor = item.style.color;
                
                item.textContent = '✓ Copied!';
                item.style.color = 'var(--gold)';
                item.style.transform = 'scale(1.1)';
                item.style.fontWeight = 'bold';
                
                setTimeout(() => {
                    item.textContent = originalText;
                    item.style.color = originalColor;
                    item.style.transform = 'scale(1)';
                    item.style.fontWeight = 'normal';
                }, 2000);
            });
        });
    }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--coffee-light));
    z-index: 1001;
    transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Enhanced image loading with fade-in effect and error handling
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';
    
    // Force reload if image fails to load initially
    const originalSrc = img.src;
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    img.addEventListener('error', () => {
        console.log('Image failed to load:', img.src);
        // Try to reload the image once
        if (!img.hasAttribute('data-retry')) {
            img.setAttribute('data-retry', 'true');
            setTimeout(() => {
                img.src = originalSrc;
            }, 1000);
        } else {
            // If still fails, hide the broken image
            img.style.display = 'none';
            console.log('Image permanently failed:', img.src);
        }
    });
    
    // Force trigger load event for cached images
    if (img.complete) {
        img.dispatchEvent(new Event('load'));
    }
});

// Preload gallery images to ensure they're available
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = [
        'assets/gallery-1.jpg',
        'assets/gallery-2.jpg', 
        'assets/gallery-3.jpg',
        'assets/gallery-4.jpg',
        'assets/gallery-5.jpg',
        'assets/gallery-6.jpg',
        'assets/about-image.jpg',
        'assets/coffee-bg.jpg',
        'assets/logo.jpg'
    ];
    
    galleryImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log('Preloaded:', src);
        img.onerror = () => console.log('Failed to preload:', src);
    });
});

// Add Easter egg: Coffee cup cursor on logo hover
document.querySelector('.nav-logo').addEventListener('mouseenter', () => {
    document.body.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ctext y=\'20\' font-size=\'20\'%3E☕%3C/text%3E%3C/svg%3E"), auto';
});

document.querySelector('.nav-logo').addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
});