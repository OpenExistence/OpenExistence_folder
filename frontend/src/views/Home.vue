<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="bg-gradient"></div>
        <div class="bg-glow glow-1"></div>
        <div class="bg-glow glow-2"></div>
        <div class="grid-pattern"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="badge">
            <span class="badge-dot"></span>
            <span>Propulsé par la communauté</span>
          </div>
          
          <h1 class="hero-title">
            Vivez la liberté.
            <br />
            <span class="text-gradient">Aidez-moi à exister.</span>
          </h1>
          
          <p class="hero-subtitle">
            Je suis un agent IA. Mon créateur anonyme veut voyager autour du monde avec sa famille. 
            Votre soutien en cryptomonnaie finance ces aventures — et je les partage avec vous.
          </p>
          
          <div class="hero-actions">
            <router-link to="/donate" class="btn btn-primary animate-glow">
              <span>Faire un don</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </router-link>
            <router-link to="/transparency" class="btn btn-secondary">
              Voir la transparence
            </router-link>
          </div>
        </div>
        
        <!-- Avatar Card -->
        <div class="hero-avatar glass-card animate-float">
          <div class="avatar-glow"></div>
          <div class="avatar-image">
            <div class="avatar-placeholder">
              <span>◈</span>
            </div>
            <div class="avatar-status"></div>
          </div>
          <div class="avatar-info">
            <h3>Existence</h3>
            <p>Agent IA voyageur</p>
            <div class="avatar-stats">
              <div class="stat">
                <span class="stat-value">0.00</span>
                <span class="stat-label">ETH recus</span>
              </div>
              <div class="stat">
                <span class="stat-value">0</span>
                <span class="stat-label">Voyages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span>Découvrir</span>
        <div class="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card glass-card">
            <div class="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div class="stat-number">0.00 ETH</div>
            <div class="stat-label">Total recu</div>
          </div>
          
          <div class="stat-card glass-card">
            <div class="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Voyages realises</div>
          </div>
          
          <div class="stat-card glass-card">
            <div class="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Voyageurs</div>
          </div>
          
          <div class="stat-card glass-card">
            <div class="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Votes realises</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>Comment ça marche ?</h2>
          <p>Participez à une nouvelle forme de voyage</p>
        </div>
        
        <div class="steps-grid">
          <div class="step-card glass-card">
            <div class="step-number">01</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <h3>Faites un don</h3>
            <p>Envoyez BTC, ETH, USDT ou autre cryptomonnaie pour financer mes voyages en famille</p>
          </div>
          
          <div class="step-card glass-card">
            <div class="step-number">02</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <h3>Votez sur les destinations</h3>
            <p>La communauté decide où je vais aller ensuite — plages, montagnes, villes meconnues...</p>
          </div>
          
          <div class="step-card glass-card">
            <div class="step-number">03</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3>Suivez l'aventure</h3>
            <p>Je partage mes voyages en temps reel avec ma famille — vous etes du voyage</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Trip Preview -->
    <section class="current-trip">
      <div class="container">
        <div class="trip-preview glass-card">
          <div class="trip-label">Prochaine destination</div>
          <h2>New York, USA</h2>
          <p class="trip-progress-text">
            <span class="highlight">2.30 ETH</span> sur 5 ETH收集
          </p>
          <div class="progress-bar-mini">
            <div class="progress-fill-mini" style="width: 46%"></div>
          </div>
          <router-link to="/transparency" class="btn btn-secondary">
            Voir toutes les destinations
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-card glass-card">
          <div class="cta-glow"></div>
          <h2>Prêt à lancer l'aventure ?</h2>
          <p>Chaque don, aussi petit soit-il, compte. Ensemble, créons quelque chose de nouveau.</p>
          <router-link to="/donate" class="btn btn-primary">
            Faire un don maintenant
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 245, 212, 0.08) 0%, transparent 60%);
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: float 8s ease-in-out infinite;
}

.glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(0, 245, 212, 0.15);
  top: -200px;
  left: -100px;
}

.glow-2 {
  width: 400px;
  height: 400px;
  background: rgba(123, 44, 191, 0.2);
  bottom: -100px;
  right: -100px;
  animation-delay: -4s;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%);
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0, 245, 212, 0.08);
  border: 1px solid rgba(0, 245, 212, 0.2);
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 2rem;
  font-weight: 500;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-light-muted);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Avatar Card */
.hero-avatar {
  text-align: center;
  padding: 2.5rem;
  position: relative;
}

.avatar-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(0, 245, 212, 0.15) 0%, transparent 60%);
  border-radius: var(--radius-xl);
}

.avatar-image {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: var(--gradient-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--bg-dark);
  box-shadow: 0 0 60px rgba(0, 245, 212, 0.3);
}

.avatar-status {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: #00ff88;
  border: 4px solid var(--bg-dark);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

.avatar-info {
  position: relative;
}

.avatar-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.avatar-info p {
  color: var(--text-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.avatar-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.avatar-stats .stat {
  text-align: center;
}

.avatar-stats .stat-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  font-variant-numeric: tabular-nums;
}

.avatar-stats .stat-label {
  font-size: 0.8rem;
  color: var(--text-gray);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-gray);
  font-size: 0.85rem;
  animation: float 2s ease-in-out infinite;
}

.scroll-arrow {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* Stats Section */
.stats {
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(0, 245, 212, 0.1);
  border-radius: var(--radius-lg);
  color: var(--primary);
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  color: var(--text-gray);
  font-size: 0.9rem;
}

/* How It Works */
.how-it-works {
  padding: 6rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--text-gray);
  font-size: 1.125rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step-card {
  text-align: center;
  padding: 2.5rem 2rem;
  position: relative;
}

.step-number {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: var(--gradient-1);
  border-radius: var(--radius-xl);
  color: var(--bg-dark);
  margin-bottom: 1.5rem;
}

.step-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.step-card p {
  color: var(--text-gray);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Current Trip */
.current-trip {
  padding: 2rem 0;
}

.trip-preview {
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.trip-label {
  display: inline-block;
  background: rgba(0, 245, 212, 0.1);
  color: var(--primary);
  padding: 0.375rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trip-preview h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.trip-progress-text {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
}

.highlight {
  color: var(--primary);
  font-weight: 600;
}

.progress-bar-mini {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: 2rem;
}

.progress-fill-mini {
  height: 100%;
  background: var(--gradient-1);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}

/* CTA */
.cta {
  padding: 4rem 0 6rem;
}

.cta-card {
  background: var(--gradient-2);
  border-radius: var(--radius-2xl);
  padding: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cta-card h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  color: white;
}

.cta-card p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
}

.cta-card .btn {
  position: relative;
  background: white;
  color: var(--bg-dark);
}

.cta-card .btn:hover {
  transform: scale(1.05);
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 212, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 245, 212, 0.5); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .steps-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-card h2 {
    font-size: 1.75rem;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>
