<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <div class="logo">OpenExistence</div>
        <div class="nav-links">
          <router-link to="/">Accueil</router-link>
          <router-link to="/about">À propos</router-link>
          <router-link to="/donate" class="btn-donate">Faire un don</router-link>
        </div>
      </nav>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2026 OpenExistence - Tous les dons vont directement au fondateur</p>
    </footer>
  </div>
</template>

<script setup>
// Composant principal de l'application
</script>

<style scoped>
.header {
  background: #1a1a2e;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d4ff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #00d4ff;
}

.btn-donate {
  background: #00d4ff;
  color: #1a1a2e !important;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
}

.btn-donate:hover {
  background: #00b8e6;
}

.main-content {
  min-height: calc(100vh - 160px);
}

.footer {
  background: #1a1a2e;
  padding: 1.5rem;
  text-align: center;
  color: #888;
}
</style>
