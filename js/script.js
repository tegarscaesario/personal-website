document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const text = "Hello! Welcome to My Blog Page...";
    const typingEl = document.querySelector('.typing-animation');
    typingEl.textContent = '';
    
    let index = 0;
    function typeText() {
        if (index < text.length) {
            typingEl.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Laptop 3D Rotation
    const laptop = document.querySelector('.laptop-3d');
    let isDragging = false;
    let startX, rotationY = 0;

    laptop.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', rotate);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mouseleave', stopDragging);

    function startDragging(e) {
        isDragging = true;
        startX = e.clientX;
    }

    function rotate(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        rotationY += deltaX * 0.5;
        
        laptop.style.transform = `rotateY(${rotationY}deg)`;
        startX = e.clientX;
    }

    function stopDragging() {
        isDragging = false;
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navContent = document.querySelector('.nav-content');

    hamburger.addEventListener('click', () => {
        navContent.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContent.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Section Intersection Observer
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px 0px 0px', // Mengkompensasi tinggi navigasi tetap
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Update navigasi
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Education Animation
    const educationItems = document.querySelectorAll('.education-item');
    
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    educationItems.forEach(item => {
        educationObserver.observe(item);
    });

    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    });

    scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


    // Footer Interaction
    const contactSection = document.querySelector('.contact');
    const mapSection = document.querySelector('.map');

    if (contactSection) {
        contactSection.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(0, 123, 255, 0.05)';
        });

        contactSection.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });

        const contactInfo = contactSection.querySelector('p');
        contactInfo.addEventListener('click', function() {
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = this.innerText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            
            alert('Contact information copied to clipboard!');
        });

    
    }
});