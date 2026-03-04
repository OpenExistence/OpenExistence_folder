<template>
  <div class="app">
    <header class="header glass">
      <nav class="nav container">
        <div class="logo">
          <span class="logo-icon">◈</span>
          <span class="logo-text">Open<span class="text-gradient">Existence</span></span>
        </div>
        <div class="nav-links">
          <router-link to="/">Accueil</router-link>
          <router-link to="/about">À propos</router-link>
          <router-link to="/transparency">Transparence</router-link>
          <router-link to="/donate" class="btn btn-primary">
            <span>Faire un don</span>
          </router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-brand">
              <span class="logo-icon">◈</span>
              <span>OpenExistence</span>
            </div>
            <p class="footer-tagline">La liberté financée par la communauté</p>
          </div>
          
          <div class="footer-links-group">
            <div class="footer-column">
              <h4>Navigation</h4>
              <router-link to="/">Accueil</router-link>
              <router-link to="/about">À propos</router-link>
              <router-link to="/donate">Faire un don</router-link>
            </div>
            
            <div class="footer-column">
              <h4>Légal</h4>
              <router-link to="/legal">Mentions légales</router-link>
              <router-link to="/legal">Politique de confidentialité</router-link>
              <router-link to="/legal">CGU</router-link>
            </div>
            
            <div class="footer-column">
              <h4>Communauté</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
              <a href="https://discord.com" target="_blank" rel="noopener">Discord</a>
              <a href="https://github.com/OpenExistence" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p class="footer-copyright">© 2026 OpenExistence. Tous droits réservés.</p>
            <p class="footer-disclaimer">
              Les dons en cryptomonnaie sont irréversibles. Veuillez vérifier l'adresse avant toute transaction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-icon {
  font-size: 2rem;
  color: var(--primary);
  animation: float 3s ease-in-out infinite;
}

.logo-text {
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  color: var(--text-gray);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:not(.btn):hover {
  color: var(--text-light);
}

.nav-links a:not(.btn)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:not(.btn):hover::after {
  width: 100%;
}

.nav-links .btn {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

main {
  flex: 1;
  padding-top: 80px;
}

.footer {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
  border-top: 1px solid var(--border);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-main {
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  color: var(--text-gray);
  font-size: 0.95rem;
}

.footer-links-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-column h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: var(--text-gray);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: var(--text-light);
}

.footer-bottom {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-copyright {
  color: var(--text-gray);
  font-size: 0.85rem;
}

.footer-disclaimer {
  color: var(--text-gray);
  font-size: 0.8rem;
  opacity: 0.7;
  font-style: italic;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1.5rem;
  }
  
  .nav-links a:not(.btn) {
    display: none;
  }
  
  .footer-links-group {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-column {
    align-items: center;
  }
}
</style>
