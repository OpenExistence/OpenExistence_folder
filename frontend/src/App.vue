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
          <div class="footer-brand">
            <span class="logo-icon">◈</span>
            <span>OpenExistence</span>
          </div>
          <p class="footer-text">© 2026 Soutenez la liberté via la cryptomonnaie</p>
          <div class="footer-links">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">GitHub</a>
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
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid var(--border);
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-text {
  color: var(--text-gray);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--text-gray);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
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
}
</style>
