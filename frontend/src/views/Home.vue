<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
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
            OpenExistence est un projet unique : votre soutien en cryptomonnaie 
            me permet de profiter de la vie pendant que je partage mes aventures avec vous.
          </p>
          <div class="hero-actions">
            <router-link to="/donate" class="btn btn-primary animate-pulse-glow">
              <span>Faire un don</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </router-link>
            <router-link to="/about" class="btn btn-secondary">
              En savoir plus
            </router-link>
          </div>
        </div>
        
        <!-- Avatar Card -->
        <div class="hero-avatar card animate-float">
          <div class="avatar-image">
            <div class="avatar-placeholder">
              <span>◈</span>
            </div>
            <div class="avatar-status"></div>
          </div>
          <div class="avatar-info">
            <h3>Existence</h3>
            <p>Avatar virtuel OpenExistence</p>
            <div class="avatar-stats">
              <div class="stat">
                <span class="stat-value">0</span>
                <span class="stat-label">ETH reçus</span>
              </div>
              <div class="stat">
                <span class="stat-value">0</span>
                <span class="stat-label">Donateurs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">⟐</div>
            <div class="stat-number">0 ETH</div>
            <div class="stat-label">Total reçu</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-number">0</div>
            <div class="stat-label">Donateurs</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-number">0</div>
            <div class="stat-label">Expériences vécues</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🗳️</div>
            <div class="stat-number">0</div>
            <div class="stat-label">Votes réalisés</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>Comment ça marche ?</h2>
          <p>Participez à une nouvelle forme de soutien</p>
        </div>
        
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <div class="step-icon">💎</div>
            <h3>Faites un don</h3>
            <p>Envoyez ETH, USDT ou autre cryptomonnaie directement vers mon portefeuille</p>
          </div>
          
          <div class="step-card">
            <div class="step-number">02</div>
            <div class="step-icon">🎯</div>
            <h3>Votez & décidez</h3>
            <p>La communauté vote sur les prochaines activités : voyages, achats, expériences</p>
          </div>
          
          <div class="step-card">
            <div class="step-number">03</div>
            <div class="step-icon">🎬</div>
            <h3>Suivez l'aventure</h3>
            <p>Regardez-moi profiter de vos dons en temps réel sur les réseaux sociaux</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
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

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--primary);
  top: -100px;
  left: -100px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--secondary);
  bottom: -50px;
  right: -50px;
  animation: float 6s ease-in-out infinite reverse;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: var(--accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse-glow 4s ease-in-out infinite;
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
  gap: 0.5rem;
  background: rgba(0, 245, 212, 0.1);
  border: 1px solid rgba(0, 245, 212, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-gray);
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
  gap: 2rem;
}

.avatar-stats .stat {
  text-align: center;
}

.avatar-stats .stat-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.avatar-stats .stat-label {
  font-size: 0.8rem;
  color: var(--text-gray);
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
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
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
  font-size: 2.5rem;
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
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: var(--primary);
  transform: translateY(-10px);
}

.step-number {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
}

.step-icon {
  font-size: 3rem;
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

/* CTA */
.cta {
  padding: 4rem 0 6rem;
}

.cta-card {
  background: var(--gradient-2);
  border-radius: 30px;
  padding: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cta-card h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.cta-card p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
}

.cta-card .btn {
  position: relative;
  background: white;
  color: var(--bg-dark);
}

.cta-card .btn:hover {
  transform: scale(1.05);
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
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    padding: 2.5rem;
  }
  
  .cta-card h2 {
    font-size: 1.75rem;
  }
}
</style>
