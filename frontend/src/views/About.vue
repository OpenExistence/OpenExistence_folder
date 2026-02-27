<template>
  <div class="about">
    <!-- Header -->
    <section class="page-header">
      <div class="header-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
      <div class="container">
        <h1>À propos</h1>
        <p class="subtitle">Découvrez le projet OpenExistence</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="section">
      <div class="container">
        <div class="content-card">
          <div class="card-icon">🎯</div>
          <h2>Notre mission</h2>
          <p>
            OpenExistence est un projet unique en son genre : permettre au fondateur de consacrer sa vie 
            à ce qu'il aime, grâce au soutien financier de la communauté sous forme de cryptomonnaie.
          </p>
          <p>
            Nous croyons que tout le monde mérite de pouvoir profiter de la vie, et que la cryptomonnaie 
            offre un moyen simple, transparent et international de soutenir un projet personnel.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Crypto -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Pourquoi la cryptomonnaie ?</h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Transparence totale</h3>
            <p>Toutes les transactions sont visibles sur la blockchain. Impossible de tricher.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">💸</div>
            <h3>Frais minimaux</h3>
            <p>Pas d'interméraires bancaires. Plus d'argent parvient au fondateur.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>International</h3>
            <p>Tout le monde peut donner, partout dans le monde, en quelques secondes.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Instantané</h3>
            <p>Les dons sont reçus en quelques secondes. Pas d'attente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Avatar Section -->
    <section class="section avatar-section">
      <div class="container">
        <div class="avatar-showcase">
          <div class="avatar-card card">
            <div class="avatar-visual">
              <div class="avatar-orb">
                <span>◈</span>
              </div>
            </div>
            <div class="avatar-details">
              <div class="avatar-badge">Avatar communautaire</div>
              <h3>Existence</h3>
              <p class="avatar-bio">
                Je suis l'avatar virtuel d'OpenExistence. Grâce à vos dons, je vis la vie que vous rendez possible. 
                Voyages, expériences, découvertes — chaque don finance mes aventures.
              </p>
              <div class="avatar-tags">
                <span class="tag">Voyages</span>
                <span class="tag">Tech</span>
                <span class="tag">Lifestyle</span>
                <span class="tag">Web3</span>
              </div>
            </div>
          </div>
          
          <div class="avatar-info">
            <h2>L'avatar communautaire</h2>
            <p>
              Votre soutien ne sert pas seulement à financer ma vie — il crée une communauté entière 
              autour d'un concept nouveau : le financement participatif divertissant.
            </p>
            <ul class="benefits-list">
              <li>
                <span class="benefit-icon">🗳️</span>
                <div>
                  <strong>Votes communautaires</strong>
                  <p>Décidez de mes prochaines activités</p>
                </div>
              </li>
              <li>
                <span class="benefit-icon">🎬</span>
                <div>
                  <strong>Suivi en temps réel</strong>
                  <p>Regardez mes aventures sur les réseaux sociaux</p>
                </div>
              </li>
              <li>
                <span class="benefit-icon">🤝</span>
                <div>
                  <strong>Communauté active</strong>
                  <p>Rejoignez un projet innovant et transparent</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparency -->
    <section class="section">
      <div class="container">
        <div class="transparency-card">
          <div class="transparency-header">
            <h2>🔒 Transparence totale</h2>
          </div>
          <div class="transparency-grid">
            <div class="transparency-item">
              <h4>Adresse publique</h4>
              <p>L'adresse du portefeuille est visible sur la page de dons</p>
            </div>
            <div class="transparency-item">
              <h4>Suivi blockchain</h4>
              <p>Toutes les transactions sont traçables</p>
            </div>
            <div class="transparency-item">
              <h4>Rapports réguliers</h4>
              <p>Des bilans sur l'utilisation des fonds</p>
            </div>
            <div class="transparency-item">
              <h4>Anonymat respecté</h4>
              <p>Les donateurs peuvent rester anonymes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Prêt à participer ?</h2>
          <p>Chaque don compte. Rejoignez l'aventure OpenExistence.</p>
          <router-link to="/donate" class="btn btn-primary">
            Faire un don
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-header {
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--primary);
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.3;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-gray);
  position: relative;
}

.section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
}

.content-card {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.content-card h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
}

.content-card p {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--text-gray);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Avatar Section */
.avatar-section {
  background: rgba(123, 44, 191, 0.05);
}

.avatar-showcase {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.avatar-card {
  padding: 2rem;
  text-align: center;
}

.avatar-visual {
  margin-bottom: 1.5rem;
}

.avatar-orb {
  width: 150px;
  height: 150px;
  background: var(--gradient-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--bg-dark);
  margin: 0 auto;
  animation: pulse-glow 3s ease-in-out infinite;
}

.avatar-badge {
  display: inline-block;
  background: rgba(0, 245, 212, 0.1);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.avatar-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.avatar-bio {
  color: var(--text-gray);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.avatar-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: var(--text-gray);
}

.avatar-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.avatar-info > p {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefits-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.benefit-icon {
  font-size: 1.5rem;
}

.benefits-list strong {
  display: block;
  margin-bottom: 0.25rem;
}

.benefits-list p {
  color: var(--text-gray);
  font-size: 0.9rem;
}

/* Transparency */
.transparency-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem;
}

.transparency-header {
  text-align: center;
  margin-bottom: 2rem;
}

.transparency-header h2 {
  font-size: 2rem;
}

.transparency-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.transparency-item h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.transparency-item p {
  color: var(--text-gray);
  font-size: 0.9rem;
}

/* CTA */
.cta-section {
  padding-bottom: 6rem;
}

.cta-box {
  text-align: center;
  background: var(--gradient-1);
  border-radius: 30px;
  padding: 4rem;
}

.cta-box h2 {
  font-size: 2.5rem;
  color: var(--bg-dark);
  margin-bottom: 1rem;
}

.cta-box p {
  font-size: 1.25rem;
  color: var(--bg-dark);
  opacity: 0.8;
  margin-bottom: 2rem;
}

.cta-box .btn {
  background: var(--bg-dark);
  color: var(--text-light);
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .avatar-showcase {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .transparency-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .features-grid,
  .transparency-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box {
    padding: 2.5rem;
  }
  
  .cta-box h2 {
    font-size: 1.75rem;
  }
}
</style>
