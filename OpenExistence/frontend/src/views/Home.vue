<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Bienvenue sur OpenExistence</h1>
        <p class="tagline">Soutenez le fondateur et permettez-lui de profiter de la vie grâce à vos dons en cryptomonnaie</p>
        <div class="hero-buttons">
          <router-link to="/donate" class="btn btn-primary">Faire un don</router-link>
          <router-link to="/about" class="btn btn-secondary">En savoir plus</router-link>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stat-card">
          <div class="stat-value">0 ETH</div>
          <div class="stat-label">Total reçu</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">0</div>
          <div class="stat-label">Donateurs</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">0</div>
          <div class="stat-label">Activités financées</div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="container">
        <h2>Comment ça marche ?</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Faites un don</h3>
            <p>Envoyez de la cryptomonnaie directement depuis votre portefeuille</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>L'avatar en profite</h3>
            <p>Votre don finance des activités pour l'avatar de la communauté</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Suivez les activités</h3>
            <p>Votez et regardez l'avatar profiter de vos dons en temps réel</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
}

.btn-primary {
  background: var(--primary);
  color: var(--bg-dark);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.stats {
  padding: 4rem 0;
  background: var(--bg-dark);
}

.stats .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-darker);
  border-radius: 15px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary);
}

.stat-label {
  color: var(--text-gray);
  margin-top: 0.5rem;
}

.how-it-works {
  padding: 6rem 0;
}

.how-it-works h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 2rem;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary);
  color: var(--bg-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.step h3 {
  color: var(--primary);
}

.step p {
  color: var(--text-gray);
}
</style>
