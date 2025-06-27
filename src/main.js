import './styles/main.css'

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
  // FAQ Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Smooth scrolling for download buttons
  const downloadBtns = document.querySelectorAll('.download-btn, .hero-download-btn');
  
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.download-app').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(15, 15, 15, 0.98)';
    } else {
      header.style.background = 'rgba(15, 15, 15, 0.95)';
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const sections = document.querySelectorAll('.description, .plans, .testimonials, .faq, .download-app');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Plan cards hover effect
  const planCards = document.querySelectorAll('.plan-card');
  planCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Testimonial carousel (simple implementation)
  const testimonials = [
    {
      name: "Cliente 1",
      text: "Muy satisfecho con el servicio. Recomendado al 100%.",
      emoji: "😊"
    },
    {
      name: "Cliente 2", 
      text: "Los resultados han superado mis expectativas. Excelente seguimiento.",
      emoji: "💪"
    },
    {
      name: "Cliente 3",
      text: "Planes personalizados que realmente funcionan. Muy profesional.",
      emoji: "⭐"
    }
  ];

  let currentTestimonial = 0;
  const testimonialCard = document.querySelector('.testimonial-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialCard.querySelector('.avatar-emoji').textContent = testimonial.emoji;
    testimonialCard.querySelector('.testimonial-name').textContent = testimonial.name;
    testimonialCard.querySelector('.testimonial-text').textContent = `"${testimonial.text}"`;
  }

  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });

  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }, 5000);

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-bg-img');
    if (heroImg) {
      heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Add loading animation
  const app = document.getElementById('app');
  app.style.opacity = '0';
  app.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    app.style.opacity = '1';
  }, 100);
});

