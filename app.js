// Enhanced Portfolio Website JavaScript with Advanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ================================
    // ELEMENT SELECTORS
    // ================================
    const elements = {
        // Navigation
        navMenu: document.getElementById('nav-menu'),
        navToggle: document.getElementById('nav-toggle'),
        navClose: document.getElementById('nav-close'),
        navLinks: document.querySelectorAll('.nav__link'),
        header: document.getElementById('header'),
        
        // Forms and interactions
        contactForm: document.getElementById('contact-form'),
        
        // Animation elements
        skillBars: document.querySelectorAll('.skill-progress'),
        sections: document.querySelectorAll('.section, .hero'),
        interestCards: document.querySelectorAll('.interest-card'),
        experienceCards: document.querySelectorAll('.experience-card'),
        profileCards: document.querySelectorAll('.profile-card'),
        
        // Interactive elements
        buttons: document.querySelectorAll('.btn'),
        socialLinks: document.querySelectorAll('.social-link'),
        contactMethods: document.querySelectorAll('.contact-method')
    };

    // ================================
    // UTILITY FUNCTIONS
    // ================================
    const utils = {
        // Debounce function for performance optimization
        debounce: function(func, wait, immediate) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
        },

        // Throttle function for scroll events
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Smooth scroll to element
        smoothScrollTo: function(target, offset = 80) {
            const element = document.querySelector(target);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },

        // Check if element is in viewport
        isInViewport: function(element, threshold = 0.1) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            
            const vertInView = (rect.top <= windowHeight * (1 - threshold)) && 
                              ((rect.top + rect.height) >= (windowHeight * threshold));
            const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
            
            return vertInView && horInView;
        }
    };

    // ================================
    // NAVIGATION MANAGEMENT
    // ================================
    const navigation = {
        // Toggle mobile menu
        toggleMobileMenu: function() {
            elements.navMenu.classList.toggle('show-menu');
            document.body.style.overflow = elements.navMenu.classList.contains('show-menu') ? 'hidden' : '';
            
            // Animate hamburger icon
            const icon = elements.navToggle.querySelector('i');
            if (elements.navMenu.classList.contains('show-menu')) {
                icon.className = 'fas fa-times';
                elements.navToggle.style.transform = 'rotate(90deg)';
            } else {
                icon.className = 'fas fa-bars';
                elements.navToggle.style.transform = 'rotate(0deg)';
            }
        },

        // Close mobile menu
        closeMobileMenu: function() {
            elements.navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
            
            const icon = elements.navToggle.querySelector('i');
            icon.className = 'fas fa-bars';
            elements.navToggle.style.transform = 'rotate(0deg)';
        },

        // Update active navigation link
        updateActiveNavLink: function(targetId) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                }
            });
        },

        // Handle navigation link clicks
        handleNavLinkClick: function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                utils.smoothScrollTo(targetId, 100);
                navigation.updateActiveNavLink(targetId);
                navigation.closeMobileMenu();
            }
        },

        // Initialize navigation events
        init: function() {
            // Mobile menu toggle
            if (elements.navToggle) {
                elements.navToggle.addEventListener('click', this.toggleMobileMenu);
            }

            if (elements.navClose) {
                elements.navClose.addEventListener('click', this.closeMobileMenu);
            }

            // Navigation links
            elements.navLinks.forEach(link => {
                link.addEventListener('click', this.handleNavLinkClick);
            });

            // Close menu when clicking outside
            elements.navMenu.addEventListener('click', function(e) {
                if (e.target === elements.navMenu) {
                    navigation.closeMobileMenu();
                }
            });

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && elements.navMenu.classList.contains('show-menu')) {
                    navigation.closeMobileMenu();
                }
            });
        }
    };

    // ================================
    // SCROLL EFFECTS & ANIMATIONS
    // ================================
    const scrollEffects = {
        // Header scroll effect
        handleHeaderScroll: function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
        },

        // Update active navigation based on scroll position
        handleNavLinkHighlight: function() {
            const scrollPosition = window.scrollY + 150;
            
            elements.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = '#' + section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navigation.updateActiveNavLink(sectionId);
                }
            });
        },

        // Initialize scroll effects
        init: function() {
            const handleScroll = utils.throttle(() => {
                this.handleHeaderScroll();
                this.handleNavLinkHighlight();
            }, 16); // ~60fps

            window.addEventListener('scroll', handleScroll);
        }
    };

    // ================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ================================
    const animations = {
        // Fade in up animation
        observerOptions: {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        },

        // Section reveal animations
        initSectionAnimations: function() {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        
                        // Trigger specific animations based on section
                        const sectionId = entry.target.id;
                        switch(sectionId) {
                            case 'projects':
                                this.animateSkillBars();
                                break;
                            case 'interests':
                                this.animateInterestCards();
                                break;
                            case 'experience':
                                this.animateExperienceCards();
                                break;
                        }
                    }
                });
            }, this.observerOptions);

            elements.sections.forEach(section => {
                sectionObserver.observe(section);
            });
        },

        // Animate skill progress bars
        animateSkillBars: function() {
            elements.skillBars.forEach((bar, index) => {
                const progress = bar.getAttribute('data-progress');
                if (progress) {
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                        
                        // Add counter animation
                        const skillItem = bar.closest('.skill-item');
                        const percentage = skillItem?.querySelector('.skill-percentage');
                        if (percentage) {
                            this.animateCounter(percentage, parseInt(progress));
                        }
                    }, index * 200);
                }
            });
        },

        // Animate interest cards with stagger
        animateInterestCards: function() {
            elements.interestCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            });
        },

        // Animate experience cards
        animateExperienceCards: function() {
            elements.experienceCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
            });
        },

        // Counter animation for numbers
        animateCounter: function(element, target) {
            let start = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target + '%';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.ceil(start) + '%';
                }
            }, 20);
        },

        // Initialize all animations
        init: function() {
            // Set initial states for animated elements
            elements.interestCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.9)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            elements.experienceCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.9)';
                card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            this.initSectionAnimations();
        }
    };

    // ================================
    // MICRO-INTERACTIONS
    // ================================
    const microInteractions = {
        // Enhanced button hover effects
        initButtonEffects: function() {
            elements.buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px) scale(1.05)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
                
                button.addEventListener('mousedown', function() {
                    this.style.transform = 'translateY(-1px) scale(1.02)';
                });
                
                button.addEventListener('mouseup', function() {
                    this.style.transform = 'translateY(-2px) scale(1.05)';
                });
            });
        },

        // Enhanced social link effects
        initSocialLinkEffects: function() {
            elements.socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-4px) scale(1.1)';
                    this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '';
                });
            });
        },

        // Card hover effects
        initCardEffects: function() {
            const cards = document.querySelectorAll('.card, .interest-card, .experience-card, .profile-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '';
                });
            });
        },

        // Form field focus effects
        initFormEffects: function() {
            const formInputs = document.querySelectorAll('.form-control');
            
            formInputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'scale(1.02)';
                    this.style.transform = 'translateY(-2px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'scale(1)';
                    this.style.transform = 'translateY(0)';
                });
            });
        },

        // Initialize all micro-interactions
        init: function() {
            this.initButtonEffects();
            this.initSocialLinkEffects();
            this.initCardEffects();
            this.initFormEffects();
        }
    };

    // ================================
    // FORM HANDLING
    // ================================
    const formHandling = {
        // Form validation
        validateForm: function(formData) {
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const message = formData.get('message')?.trim();

            const errors = [];

            if (!name) {
                errors.push('Name is required');
            }

            if (!email) {
                errors.push('Email is required');
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    errors.push('Please enter a valid email address');
                }
            }

            if (!message) {
                errors.push('Message is required');
            } else if (message.length < 10) {
                errors.push('Message must be at least 10 characters long');
            }

            return errors;
        },

        // Create mailto link
        createMailtoLink: function(formData) {
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject') || 'Portfolio Contact Form Submission';
            const message = formData.get('message');

            const mailtoSubject = encodeURIComponent(`${subject} - From ${name}`);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Subject: ${subject}\n\n` +
                `Message:\n${message}\n\n` +
                `---\n` +
                `This message was sent from your portfolio website contact form.\n` +
                `Sent at: ${new Date().toLocaleString()}`
            );

            return `mailto:akshaymuthushankar@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        },

        // Show form message
        showMessage: function(message, type = 'info', duration = 5000) {
            // Remove existing messages
            const existingMessages = document.querySelectorAll('.form-message');
            existingMessages.forEach(msg => msg.remove());

            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = `form-message status status--${type}`;
            messageElement.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                ${message}
            `;

            // Insert after form
            elements.contactForm.parentNode.insertBefore(messageElement, elements.contactForm.nextSibling);

            // Animate in
            requestAnimationFrame(() => {
                messageElement.style.opacity = '1';
                messageElement.style.transform = 'translateY(0)';
            });

            // Remove after duration
            setTimeout(() => {
                messageElement.style.opacity = '0';
                messageElement.style.transform = 'translateY(-10px)';
                setTimeout(() => messageElement.remove(), 300);
            }, duration);
        },

        // Handle form submission
        handleSubmit: function(e) {
            e.preventDefault();

            const formData = new FormData(elements.contactForm);
            const errors = this.validateForm(formData);

            if (errors.length > 0) {
                this.showMessage(`Please fix the following errors:<br>• ${errors.join('<br>• ')}`, 'error');
                
                // Focus first invalid field
                const firstInvalidField = elements.contactForm.querySelector('input:invalid, textarea:invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
                return;
            }

            // Show loading state
            const submitButton = elements.contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;

            // Simulate processing delay for better UX
            setTimeout(() => {
                try {
                    // Create and open mailto link
                    const mailtoLink = this.createMailtoLink(formData);
                    window.location.href = mailtoLink;

                    // Show success message
                    this.showMessage(
                        'Thank you for your message! Your email client should open now. If it doesn\'t, please copy the email address and reach out directly.',
                        'success',
                        8000
                    );

                    // Reset form
                    elements.contactForm.reset();

                } catch (error) {
                    console.error('Error creating mailto link:', error);
                    this.showMessage(
                        'There was an issue with the contact form. Please email me directly at akshaymuthushankar@gmail.com',
                        'error'
                    );
                } finally {
                    // Reset button
                    setTimeout(() => {
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                    }, 1000);
                }
            }, 800);
        },

        // Initialize form handling
        init: function() {
            if (elements.contactForm) {
                elements.contactForm.addEventListener('submit', this.handleSubmit.bind(this));

                // Add styles for form message
                const style = document.createElement('style');
                style.textContent = `
                    .form-message {
                        margin-top: 20px;
                        padding: 16px 20px;
                        border-radius: 12px;
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        font-weight: 500;
                        opacity: 0;
                        transform: translateY(-10px);
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .form-message i {
                        font-size: 18px;
                        margin-top: 2px;
                        flex-shrink: 0;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };

    // ================================
    // PERFORMANCE & ACCESSIBILITY
    // ================================
    const performance = {
        // Lazy load images and heavy content
        initLazyLoading: function() {
            if ('IntersectionObserver' in window) {
                const lazyElements = document.querySelectorAll('[data-lazy]');
                
                const lazyObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const element = entry.target;
                            element.classList.add('loaded');
                            lazyObserver.unobserve(element);
                        }
                    });
                });
                
                lazyElements.forEach(element => lazyObserver.observe(element));
            }
        },

        // Optimize scroll performance
        optimizeScrolling: function() {
            let ticking = false;
            
            function updateScrollElements() {
                scrollEffects.handleHeaderScroll();
                scrollEffects.handleNavLinkHighlight();
                ticking = false;
            }
            
            function requestScrollUpdate() {
                if (!ticking) {
                    requestAnimationFrame(updateScrollElements);
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', requestScrollUpdate, { passive: true });
        },

        // Preload critical resources
        preloadResources: function() {
            const criticalImages = [
                // Add any critical images here
            ];
            
            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = src;
                link.as = 'image';
                document.head.appendChild(link);
            });
        },

        // Initialize performance optimizations
        init: function() {
            this.initLazyLoading();
            this.preloadResources();
        }
    };

    // ================================
    // ACCESSIBILITY ENHANCEMENTS
    // ================================
    const accessibility = {
        // Keyboard navigation
        initKeyboardNavigation: function() {
            // Skip link for screen readers
            const skipLink = document.createElement('a');
            skipLink.href = '#about';
            skipLink.textContent = 'Skip to main content';
            skipLink.className = 'sr-only';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--color-primary);
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                z-index: 9999;
                transition: top 0.3s;
            `;
            
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
            });
            
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);

            // Focus management for mobile menu
            elements.navMenu.addEventListener('keydown', function(e) {
                const focusableElements = elements.navMenu.querySelectorAll('a[href], button:not([disabled])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        },

        // ARIA enhancements
        initARIA: function() {
            // Add ARIA labels and descriptions
            const menuButton = elements.navToggle;
            if (menuButton) {
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-controls', 'nav-menu');
                menuButton.setAttribute('aria-label', 'Toggle navigation menu');
            }

            // Update ARIA states on menu toggle
            const originalToggleMenu = navigation.toggleMobileMenu;
            navigation.toggleMobileMenu = function() {
                originalToggleMenu.call(this);
                const isOpen = elements.navMenu.classList.contains('show-menu');
                menuButton.setAttribute('aria-expanded', isOpen.toString());
            };
        },

        // Reduced motion preferences
        initReducedMotion: function() {
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                // Disable animations for users who prefer reduced motion
                const style = document.createElement('style');
                style.textContent = `
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                `;
                document.head.appendChild(style);
            }
        },

        // Initialize accessibility features
        init: function() {
            this.initKeyboardNavigation();
            this.initARIA();
            this.initReducedMotion();
        }
    };

    // ================================
    // ANALYTICS & TRACKING
    // ================================
    const analytics = {
        // Track user interactions
        trackInteraction: function(action, label = '', value = null) {
            // Analytics tracking (replace with your preferred service)
            console.log('User Interaction:', {
                action: action,
                label: label,
                value: value,
                timestamp: new Date().toISOString(),
                page: window.location.pathname
            });
            
            // Example: Google Analytics 4
            // gtag('event', action, {
            //     event_category: 'engagement',
            //     event_label: label,
            //     value: value
            // });
        },

        // Track button clicks
        initButtonTracking: function() {
            // Track CTA buttons
            document.querySelectorAll('[href^="mailto:"], [href^="https://calendly"], [href^="https://linkedin"], [href^="https://github"]').forEach(button => {
                button.addEventListener('click', (e) => {
                    const href = button.getAttribute('href');
                    let action = 'click';
                    let label = button.textContent.trim();
                    
                    if (href.startsWith('mailto:')) {
                        action = 'email_click';
                        label = 'email';
                    } else if (href.includes('calendly')) {
                        action = 'calendar_click';
                        label = 'schedule_meeting';
                    } else if (href.includes('linkedin')) {
                        action = 'social_click';
                        label = 'linkedin';
                    } else if (href.includes('github')) {
                        action = 'social_click';
                        label = 'github';
                    }
                    
                    this.trackInteraction(action, label);
                });
            });

            // Track form submission
            if (elements.contactForm) {
                elements.contactForm.addEventListener('submit', () => {
                    this.trackInteraction('form_submit', 'contact_form');
                });
            }
        },

        // Initialize analytics
        init: function() {
            this.initButtonTracking();
        }
    };

    // ================================
    // MAIN INITIALIZATION
    // ================================
    const app = {
        init: function() {
            try {
                // Initialize all modules
                navigation.init();
                scrollEffects.init();
                animations.init();
                microInteractions.init();
                formHandling.init();
                performance.init();
                accessibility.init();
                analytics.init();

                // Initial setup
                this.handleResize();
                this.showLoadingComplete();

                console.log('🚀 Portfolio website initialized successfully!');
            } catch (error) {
                console.error('Error initializing portfolio:', error);
            }
        },

        // Handle window resize
        handleResize: function() {
            const debouncedResize = utils.debounce(() => {
                // Close mobile menu on desktop resize
                if (window.innerWidth >= 768 && elements.navMenu.classList.contains('show-menu')) {
                    navigation.closeMobileMenu();
                }
            }, 250);

            window.addEventListener('resize', debouncedResize);
        },

        // Show loading complete
        showLoadingComplete: function() {
            document.body.classList.remove('loading');
            
            // Trigger initial animations
            setTimeout(() => {
                const heroElements = document.querySelectorAll('.hero__title, .hero__tagline, .hero__stats, .hero__cta, .hero__social, .hero__image');
                heroElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 100);
        }
    };

    // ================================
    // START APPLICATION
    // ================================
    
    // Add loading class initially
    document.body.classList.add('loading');
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', app.init.bind(app));
    } else {
        app.init();
    }

    // Initialize on window load for any remaining resources
    window.addEventListener('load', () => {
        // Final initialization tasks
        scrollEffects.handleHeaderScroll();
        scrollEffects.handleNavLinkHighlight();
    });

    // Global error handling
    window.addEventListener('error', (e) => {
        console.error('Global error caught:', e.error);
    });

    // Expose app to global scope for debugging (only in development)
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        window.portfolioApp = {
            elements,
            utils,
            navigation,
            scrollEffects,
            animations,
            microInteractions,
            formHandling,
            performance,
            accessibility,
            analytics
        };
    }
});

// ================================
// SERVICE WORKER REGISTRATION (Future PWA Support)
// ================================
if ('serviceWorker' in navigator && 'production' === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}