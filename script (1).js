// Ninja Scrolls - Interactive Navigation System
// Combining ancient wisdom, zen, and modern digital ninja arts

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the mystical experience
    initNavigation();
    initMysticalEffects();
    initAccessibility();
    initTabletSounds();
    initContentEditable();
    initDivineFrequencies();
    initWindFlow();
    initGabrielEnergy();
    initEtherealAuras();
    
    console.log('🥷 Ninja Scrolls activated - Ancient wisdom meets zen digital precision');
    console.log('⚡ Angel Gabriel\'s golden energy flowing through the scrolls...');
});

// Navigation System
function initNavigation() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const infoSections = document.querySelectorAll('.info-section');
    
    // Add click handlers to all category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const category = this.getAttribute('data-category');
            showSection(category);
            updateActiveButton(this);
            
            // Add ancient tablet sound
            playAncientTabletSound();
            
            // Add tablet opening animation
            openTabletAnimation(this);
            
            // Add mystical click effect
            createMysticalClickEffect(this);
            
            // Log the navigation (for debugging/metrics)
            logNavigation(category);
        });
        
        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Show the first section by default
    if (infoSections.length > 0) {
        const firstSection = infoSections[0].id;
        showSection(firstSection);
        updateActiveButton(categoryButtons[0]);
    }
}

// Show specific section with smooth transitions
function showSection(categoryId) {
    const infoSections = document.querySelectorAll('.info-section');
    
    // Hide all sections first
    infoSections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show target section with delay for smooth effect
    setTimeout(() => {
        const targetSection = document.getElementById(categoryId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            
            // Scroll to section smoothly
            setTimeout(() => {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
            
            // Trigger content animation
            animateSectionContent(targetSection);
        }
    }, 200);
}

// Update active button state
function updateActiveButton(activeButton) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    activeButton.classList.add('active');
}

// Mystical Click Effect
function createMysticalClickEffect(button) {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create burst effect
    for (let i = 0; i < 6; i++) {
        const burst = document.createElement('div');
        burst.className = 'mystical-burst';
        burst.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: var(--accent-gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: mysticalBurst 600ms ease-out forwards;
        `;
        
        // Random direction
        const angle = (i / 6) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const deltaX = Math.cos(angle) * distance;
        const deltaY = Math.sin(angle) * distance;
        
        burst.style.setProperty('--deltaX', deltaX + 'px');
        burst.style.setProperty('--deltaY', deltaY + 'px');
        
        document.body.appendChild(burst);
        
        // Remove after animation
        setTimeout(() => {
            if (burst.parentNode) {
                burst.parentNode.removeChild(burst);
            }
        }, 600);
    }
}

// Add CSS for burst animation
const style = document.createElement('style');
style.textContent = `
    @keyframes mysticalBurst {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--deltaX)), calc(-50% + var(--deltaY))) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mystical Effects
function initMysticalEffects() {
    // Parallax background effect
    initParallaxEffect();
    
    // Floating particles effect
    createFloatingParticles();
    
    // Mystical cursor trail
    initMysticalCursor();
}

// Parallax Effect for Background
function initParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const mysticalBg = document.querySelector('.mystical-bg');
        
        if (mysticalBg) {
            const rate = scrolled * -0.5;
            mysticalBg.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Floating Particles
function createFloatingParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: var(--accent-gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0.3;
            animation: float${i} ${5 + Math.random() * 10}s infinite linear;
        `;
        
        // Add unique float animation
        const keyframes = `
            @keyframes float${i} {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                    opacity: 0;
                }
            }
        `;
        
        const particleStyle = document.createElement('style');
        particleStyle.textContent = keyframes;
        document.head.appendChild(particleStyle);
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                document.head.removeChild(particleStyle);
            }
        }, (5 + Math.random() * 10) * 1000);
    }
    
    // Recreate particles periodically
    setTimeout(createFloatingParticles, 5000);
}

// Mystical Cursor Trail
function initMysticalCursor() {
    const trail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', function(e) {
        // Create trail point
        const point = {
            x: e.clientX,
            y: e.clientY,
            element: document.createElement('div')
        };
        
        point.element.style.cssText = `
            position: fixed;
            left: ${point.x}px;
            top: ${point.y}px;
            width: 4px;
            height: 4px;
            background: var(--accent-gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            opacity: 0.6;
            animation: cursorTrail 800ms ease-out forwards;
        `;
        
        document.body.appendChild(point.element);
        trail.push(point);
        
        // Limit trail length
        if (trail.length > maxTrailLength) {
            const oldPoint = trail.shift();
            if (oldPoint.element.parentNode) {
                oldPoint.element.parentNode.removeChild(oldPoint.element);
            }
        }
        
        // Clean up old points
        setTimeout(() => {
            if (point.element.parentNode) {
                point.element.parentNode.removeChild(point.element);
            }
        }, 800);
    });
}

// Animate Section Content
function animateSectionContent(section) {
    const contentItems = section.querySelectorAll('.content-item, .resource-card');
    
    contentItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 400ms ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Accessibility Features
function initAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--accent-gold);
        color: var(--base-primary);
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const mainContent = document.querySelector('.content');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    // Announce page changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    document.body.appendChild(announcer);
    
    window.announceToScreenReader = function(message) {
        announcer.textContent = message;
    };
}

// Navigation Logging (for analytics/debugging)
function logNavigation(category) {
    const timestamp = new Date().toISOString();
    const logData = {
        timestamp,
        category,
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };
    
    // In a real application, you might send this to analytics
    console.log('🔮 Navigation:', logData);
    
    // Announce to screen readers
    if (window.announceToScreenReader) {
        const sectionName = getSectionName(category);
        window.announceToScreenReader(`Navigated to ${sectionName} section`);
    }
}

function getSectionName(categoryId) {
    const sectionNames = {
        'wisdom': 'Wisdom of Athena',
        'power': 'Trident of Poseidon',
        'healing': 'Rod of Asclepius',
        'music': 'Lyre of Apollo',
        'secrets': 'Secrets of Hermes',
        'art': 'Art of Dionysus',
        'strategy': 'Strategy of Athena',
        'gaming': 'Gaming Nexus'
    };
    
    return sectionNames[categoryId] || categoryId;
}

// Performance Optimization
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

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any size-dependent elements
    console.log('🔮 Window resized - adjusting mystical dimensions');
}, 250));

// Error Handling
window.addEventListener('error', function(e) {
    console.error('🔮 Mystical error occurred:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('🔮 Performance metrics:', {
                loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                totalTime: perfData.loadEventEnd - perfData.navigationStart
            });
        }, 0);
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        updateActiveButton,
        getSectionName,
        playAncientTabletSound,
        openTabletAnimation
    };
}

// Ancient Tablet Sound System
function initTabletSounds() {
    // Create audio context for tablet sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    window.tabletAudioContext = audioContext;
}

// Play ancient tablet opening sound
function playAncientTabletSound() {
    if (!window.tabletAudioContext) return;
    
    const audioContext = window.tabletAudioContext;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Ancient tablet sound: deep, resonant, mystical
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
    oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.3); // A2
    oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.6); // A4
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.8);
}

// Tablet Opening Animation
function openTabletAnimation(button) {
    const section = button.closest('.category-nav').parentElement;
    const tabletContainer = document.querySelectorAll('.tablet-container');
    
    // Add tablet opening effect to all tablet containers
    tabletContainer.forEach(container => {
        container.classList.add('tablet-opening');
        
        // Add zen sound effect
        setTimeout(() => {
            playZenTabletSound();
        }, 400);
        
        // Remove the class after animation
        setTimeout(() => {
            container.classList.remove('tablet-opening');
        }, 1000);
    });
}

// Play zen tablet sound
function playZenTabletSound() {
    if (!window.tabletAudioContext) return;
    
    const audioContext = window.tabletAudioContext;
    
    // Create a more zen-like sound
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Zen sound: gentle, peaceful
            oscillator.frequency.setValueAtTime(200 + (i * 100), audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100 + (i * 50), audioContext.currentTime + 0.5);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);
        }, i * 200);
    }
}

// Content Editable Support
function initContentEditable() {
    const editableSections = document.querySelectorAll('.contentEditable-section');
    
    editableSections.forEach(section => {
        // Add placeholder functionality
        section.addEventListener('focus', function() {
            if (this.textContent.trim() === '' || this.textContent === this.getAttribute('data-placeholder')) {
                this.textContent = '';
            }
        });
        
        section.addEventListener('blur', function() {
            if (this.textContent.trim() === '') {
                this.textContent = this.getAttribute('data-placeholder');
                this.style.opacity = '0.6';
            } else {
                this.style.opacity = '1';
            }
        });
        
        // Save content to localStorage
        section.addEventListener('input', function() {
            const sectionId = this.closest('.info-section').id;
            localStorage.setItem(`content_${sectionId}`, this.innerHTML);
        });
        
        // Load saved content
        const sectionId = section.closest('.info-section').id;
        const savedContent = localStorage.getItem(`content_${sectionId}`);
        if (savedContent) {
            section.innerHTML = savedContent;
            section.style.opacity = '1';
        }
        
        // Add visual feedback for editing
        section.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                // Insert tab character
                document.execCommand('insertText', false, '    ');
            }
        });
    });
}

// Divine Frequencies System
function initDivineFrequencies() {
    // 432Hz and 528Hz frequency playing system
    const frequencyEmbeds = document.querySelectorAll('.frequency-embeds audio');
    
    // Start 432Hz and 528Hz audio when page loads (subtle background)
    setTimeout(() => {
        frequencyEmbeds.forEach(audio => {
            const frequency = audio.getAttribute('data-frequency');
            if (frequency === '432' || frequency === '528') {
                // Create subtle frequency synthesis instead of audio
                playDivineFrequency(parseInt(frequency), 0.05, 30000); // 30 seconds, low volume
            }
        });
    }, 2000);
    
    // Add frequency indicators interaction
    const freqDisplays = document.querySelectorAll('.freq-display');
    freqDisplays.forEach(display => {
        display.addEventListener('click', function() {
            const freq = parseInt(this.getAttribute('data-freq'));
            playDivineFrequency(freq, 0.1, 5000); // 5 seconds, medium volume
            createFrequencyEffect(this, freq);
        });
    });
    
    // Add frequency effects to quotes
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        quote.addEventListener('mouseenter', function() {
            const freq = this.getAttribute('data-frequency');
            if (freq) {
                playDivineFrequency(parseInt(freq), 0.03, 1000);
            }
        });
    });
}

// Play divine frequency using Web Audio API
function playDivineFrequency(frequency, volume = 0.05, duration = 5000) {
    if (!window.tabletAudioContext) {
        window.tabletAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const audioContext = window.tabletAudioContext;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set frequency
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    // Gentle fade in/out
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + (duration / 1000) - 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + (duration / 1000));
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + (duration / 1000));
}

// Create visual frequency effect
function createFrequencyEffect(element, frequency) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: ${frequency === 432 ? 'linear-gradient(45deg, #4A90E2, #7BB3F0)' : 'linear-gradient(45deg, #D4AF37, #FFD700)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            animation: frequencyPulse 2s ease-out forwards;
        `;
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 40 + Math.random() * 20;
        const deltaX = Math.cos(angle) * distance;
        const deltaY = Math.sin(angle) * distance;
        
        particle.style.setProperty('--deltaX', deltaX + 'px');
        particle.style.setProperty('--deltaY', deltaY + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
}

// Wind Flow System
function initWindFlow() {
    const mysticalWind = document.querySelector('.mystical-wind');
    if (!mysticalWind) return;
    
    // Create wind particles
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createWindParticle();
        }, i * 200);
    }
    
    // Recreate wind particles periodically
    setInterval(() => {
        createWindParticle();
    }, 3000);
}

// Create individual wind particle
function createWindParticle() {
    const particle = document.createElement('div');
    particle.className = 'wind-particle';
    particle.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}%;
        left: -50px;
        width: ${20 + Math.random() * 40}px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        z-index: 1;
        pointer-events: none;
        animation: windFlow ${8 + Math.random() * 4}s linear forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 12000);
}

// Gabriel's Energy System
function initGabrielEnergy() {
    const gabrielOverlay = document.querySelector('.gabriel-energy-overlay');
    if (!gabrielOverlay) return;
    
    // Create Gabriel's golden energy effects
    setInterval(() => {
        createGabrielEnergy();
    }, 8000);
    
    // Initial blessing effect
    setTimeout(() => {
        createGabrielBlessing();
    }, 3000);
}

// Create Gabriel's golden energy burst
function createGabrielEnergy() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const energy = document.createElement('div');
            energy.style.cssText = `
                position: fixed;
                left: ${Math.random() * screenWidth}px;
                top: ${Math.random() * screenHeight}px;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(255, 215, 0, 0.2) 30%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 2;
                animation: gabrielEnergy 4s ease-out forwards;
            `;
            
            document.body.appendChild(energy);
            
            setTimeout(() => {
                if (energy.parentNode) {
                    energy.parentNode.removeChild(energy);
                }
            }, 4000);
        }, i * 500);
    }
}

// Create initial Gabriel blessing
function createGabrielBlessing() {
    const blessing = document.createElement('div');
    blessing.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, rgba(212, 175, 55, 0.9), rgba(255, 215, 0, 0.8));
        color: #000;
        padding: 20px 40px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.2em;
        pointer-events: none;
        z-index: 1000;
        animation: gabrielBlessing 3s ease-out forwards;
        box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
    `;
    
    blessing.textContent = '⚡ Angel Gabriel\'s Blessing Upon the Scrolls ⚡';
    document.body.appendChild(blessing);
    
    setTimeout(() => {
        if (blessing.parentNode) {
            blessing.parentNode.removeChild(blessing);
        }
    }, 3000);
}

// Ethereal Auras System
function initEtherealAuras() {
    const etherealButtons = document.querySelectorAll('.category-btn.ethereal-energy');
    
    etherealButtons.forEach(button => {
        // Add aura interaction
        button.addEventListener('mouseenter', function() {
            const auraType = this.classList.contains('blue') ? 'blue' :
                           this.classList.contains('golden') ? 'golden' :
                           this.classList.contains('green') ? 'green' :
                           this.classList.contains('psychic-purple') ? 'psychic-purple' :
                           this.classList.contains('black') ? 'black' :
                           this.classList.contains('white') ? 'white' :
                           this.classList.contains('psi') ? 'psi' :
                           this.classList.contains('white-gold') ? 'white-gold' : 'golden';
            
            createEtherealAura(this, auraType);
        });
    });
}

// Create ethereal aura effect
function createEtherealAura(button, type) {
    const rect = button.getBoundingClientRect();
    const colors = {
        blue: ['#0047AB', '#4169E1', '#87CEEB'],
        golden: ['#D4AF37', '#FFD700', '#FFA500'],
        green: ['#228B22', '#32CD32', '#90EE90'],
        'psychic-purple': ['#6A0DAD', '#9932CC', '#DA70D6'],
        black: ['#000000', '#2F2F2F', '#696969'],
        white: ['#FFFFFF', '#F0F8FF', '#E6E6FA'],
        psi: ['#8A2BE2', '#9370DB', '#BA55D3'],
        'white-gold': ['#FFFFFF', '#D4AF37', '#FFD700']
    };
    
    const auraColors = colors[type] || colors.golden;
    
    const aura = document.createElement('div');
    aura.style.cssText = `
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: radial-gradient(circle, ${auraColors[0]} 0%, ${auraColors[1]} 50%, ${auraColors[2]} 100%);
        border-radius: 8px;
        opacity: 0;
        pointer-events: none;
        z-index: -1;
        animation: etherealAura 2s ease-out forwards;
    `;
    
    button.appendChild(aura);
    
    setTimeout(() => {
        if (aura.parentNode) {
            aura.parentNode.removeChild(aura);
        }
    }, 2000);
}