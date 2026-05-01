/**
 * ID Cricket Online - Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const games = [
        { id: 1, name: 'Live Cricket', category: 'cricket', players: '1.2L+', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800', tag: 'Hot' },
        { id: 2, name: 'Teen Patti', category: 'casino', players: '85K+', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800', tag: 'Trending' },
        { id: 3, name: 'Dragon Tiger', category: 'casino', players: '42K+', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800', tag: 'New' },
        { id: 4, name: 'Andar Bahar', category: 'casino', players: '96K+', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=800', tag: 'Popular' },
        { id: 5, name: 'IPL 2024 Special', category: 'cricket', players: '2.5L+', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800', tag: 'Featured' },
        { id: 6, name: 'Virtual Horse Racing', category: 'virtual', players: '15K+', image: 'https://images.unsplash.com/photo-1534491336317-42809f05ee2f?auto=format&fit=crop&q=80&w=800', tag: 'Virtual' },
        { id: 7, name: 'Roulette Live', category: 'casino', players: '38K+', image: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?auto=format&fit=crop&q=80&w=800', tag: 'Premium' },
        { id: 8, name: 'World Cup Exchange', category: 'cricket', players: '1.8L+', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=800', tag: 'Exchange' }
    ];

    const matches = [
        { id: 101, team1: 'India', team2: 'Australia', score1: '245/6', score2: '18/0', overs: '15.2', status: 'Live', league: 'IPL 2024', odds: { t1: '1.45', draw: '15.0', t2: '2.80' } },
        { id: 102, team1: 'England', team2: 'Pakistan', score1: '—', score2: '—', status: 'Starts in 10m', league: 'T20 Series', odds: { t1: '1.90', draw: '12.0', t2: '1.90' } },
        { id: 103, team1: 'Mumbai Indians', team2: 'CSK', score1: '192/8', score2: '195/4', status: 'Finished', league: 'IPL 2024', odds: { t1: '2.10', draw: '25.0', t2: '1.75' } }
    ];

    const testimonials = [
        { name: 'Rahul Sharma', location: 'Mumbai', content: 'Best platform for IPL betting. I got my ID in just 2 minutes and withdrawals are super fast. Highly recommended!', rating: 5 },
        { name: 'Priya Patel', location: 'Ahmedabad', content: 'Live Casino experience is amazing. Teen Patti and Andar Bahar are my favorites. Very secure and trusted.', rating: 5 },
        { name: 'Amit Kumar', location: 'Delhi', content: 'WhatsApp support is very helpful. They solved my deposit issue instantly. Best odds in the market.', rating: 4 }
    ];

    const promos = [
        { title: '100% Welcome Bonus', label: 'NEW USERS', image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=800' },
        { title: 'Refer & Earn ₹1000', label: 'REFERRAL', image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800' },
        { title: 'Weekly Loss Cover', label: 'CASHBACK', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800' }
    ];

    // --- Selectors ---
    const gamesGrid = document.getElementById('games-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const matchesGrid = document.getElementById('matches-grid');
    const casinoGrid = document.getElementById('casino-grid');
    const promosGrid = document.getElementById('promos-grid');
    const testimonialsCarousel = document.getElementById('testimonials-carousel');
    const carouselDots = document.getElementById('carousel-dots');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const counters = document.querySelectorAll('.counter');
    const modal = document.getElementById('quick-bet-modal');
    const modalClose = document.getElementById('modal-close-btn');

    // --- Render Functions ---
    const renderGames = (filter = 'all') => {
        if (!gamesGrid) return;
        const filteredGames = filter === 'all' ? games : games.filter(g => g.category === filter);
        gamesGrid.innerHTML = filteredGames.map(game => `
            <div class="game-card" data-category="${game.category}">
                <div class="game-thumb">
                    <img src="${game.image}" alt="${game.name}">
                    <div class="game-overlay">
                        <button class="btn btn-primary" onclick="window.location.href='#cricket'">Play Now</button>
                    </div>
                </div>
                <div class="game-info">
                    <span class="game-tag">${game.tag}</span>
                    <h3 class="game-name">${game.name}</h3>
                    <p class="game-players">👤 ${game.players} playing</p>
                </div>
            </div>
        `).join('');
    };

    const renderMatches = () => {
        if (!matchesGrid) return;
        matchesGrid.innerHTML = matches.map(match => `
            <div class="match-card">
                <div class="match-status">
                    <span class="live-badge">${match.status === 'Live' ? '🔴 LIVE' : match.status}</span>
                    <span class="hmc-league">${match.league}</span>
                </div>
                <div class="hmc-teams">
                    <div class="hmc-team">
                        <span class="hmc-name">${match.team1}</span>
                        <span class="hmc-score">${match.score1}</span>
                    </div>
                    <div class="hmc-vs">VS</div>
                    <div class="hmc-team">
                        <span class="hmc-name">${match.team2}</span>
                        <span class="hmc-score">${match.score2}</span>
                    </div>
                </div>
                <div class="hmc-odds">
                    <div class="hmc-odd"><span>${match.team1}</span><strong>${match.odds.t1}</strong></div>
                    <div class="hmc-odd"><span>Draw</span><strong>${match.odds.draw}</strong></div>
                    <div class="hmc-odd"><span>${match.team2}</span><strong>${match.odds.t2}</strong></div>
                </div>
                <button class="btn btn-primary hmc-bet-btn" onclick="window.openModal('${match.id}')">Quick Bet</button>
            </div>
        `).join('');
    };

    const renderCasino = () => {
        if (!casinoGrid) return;
        const casinoGames = games.filter(g => g.category === 'casino');
        casinoGrid.innerHTML = casinoGames.map(game => `
            <div class="game-card">
                <div class="game-thumb">
                    <img src="${game.image}" alt="${game.name}">
                    <div class="game-overlay">
                        <button class="btn btn-primary">Play Live</button>
                    </div>
                </div>
                <div class="game-info">
                    <span class="game-tag">${game.tag}</span>
                    <h3 class="game-name">${game.name}</h3>
                </div>
            </div>
        `).join('');
    };

    const renderPromos = () => {
        if (!promosGrid) return;
        promosGrid.innerHTML = promos.map(promo => `
            <div class="promo-card">
                <img src="${promo.image}" class="promo-bg" alt="${promo.title}">
                <div class="promo-content">
                    <span class="promo-label">${promo.label}</span>
                    <h3 class="promo-title">${promo.title}</h3>
                    <button class="btn btn-primary btn-sm">Claim Now</button>
                </div>
            </div>
        `).join('');
    };

    const renderTestimonials = () => {
        if (!testimonialsCarousel) return;
        testimonialsCarousel.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="t-header">
                    <div class="t-avatar"></div>
                    <div>
                        <div class="t-name">${t.name}</div>
                        <div class="t-location">${t.location}</div>
                    </div>
                </div>
                <div class="t-stars">${'⭐'.repeat(t.rating)}</div>
                <p class="t-content">"${t.content}"</p>
            </div>
        `).join('');
        
        // Render Dots
        if (carouselDots) {
            carouselDots.innerHTML = testimonials.map((_, i) => `
                <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
            `).join('');
        }
    };

    // --- Interactivity ---
    
    // Filter Tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGames(tab.dataset.filter);
        });
    });

    // Mobile Menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            navLinks.style.display = isExpanded ? 'none' : 'flex';
            if (!isExpanded) {
                navLinks.classList.add('mobile-open');
            }
        });
    }

    // Counters
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.dataset.target);
                const suffix = target.dataset.suffix || '';
                let current = 0;
                const duration = 2000;
                const step = countTo / (duration / 16);
                
                const updateCounter = () => {
                    current += step;
                    if (current < countTo) {
                        target.innerText = Math.floor(current).toLocaleString() + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.innerText = countTo.toLocaleString() + suffix;
                    }
                };
                updateCounter();
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));

    // Modal Logic
    window.openModal = (id) => {
        const match = matches.find(m => m.id == id);
        if (!match || !modal) return;
        
        const info = document.getElementById('modal-match-info');
        const odds = document.getElementById('modal-odds');
        
        info.innerHTML = `<h3>${match.team1} vs ${match.team2}</h3><p>${match.league}</p>`;
        odds.innerHTML = `
            <div class="hmc-odds">
                <div class="hmc-odd"><span>${match.team1}</span><strong>${match.odds.t1}</strong></div>
                <div class="hmc-odd"><span>Draw</span><strong>${match.odds.draw}</strong></div>
                <div class="hmc-odd"><span>${match.team2}</span><strong>${match.odds.t2}</strong></div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal on overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Header transparency on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('site-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 7, 10, 0.95)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.background = 'rgba(10, 14, 23, 0.8)';
            header.style.padding = '1rem 0';
        }
    });

    // Particles
    const createParticles = () => {
        const particlesContainer = document.getElementById('hero-particles');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.animation = `floatParticle ${Math.random() * 10 + 5}s linear infinite`;
            particlesContainer.appendChild(particle);
        }
    };

    // Carousel Dots
    if (carouselDots) {
        carouselDots.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const index = parseInt(e.target.dataset.index);
                const cards = testimonialsCarousel.querySelectorAll('.testimonial-card');
                if (cards[index]) {
                    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    carouselDots.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
                    e.target.classList.add('active');
                }
            }
        });
    }

    // --- Init ---
    createParticles();
    renderGames();
    renderMatches();
    renderCasino();
    renderPromos();
    renderTestimonials();
});
