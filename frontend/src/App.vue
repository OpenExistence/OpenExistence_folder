<template>
  <div class="app">
    <div class="noise-overlay"></div>
    
    <header class="header">
      <div class="header-bg"></div>
      <nav class="nav container">
        <router-link to="/" class="logo">
          <span class="logo-icon">◈</span>
          <span class="logo-text">Open<span class="text-gradient">Existence</span></span>
        </router-link>
        
        <!-- Desktop Menu -->
        <div class="nav-links desktop-only">
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <router-link to="/about">{{ $t('nav.about') }}</router-link>
          <router-link to="/transparency">{{ $t('nav.transparency') }}</router-link>
          <router-link to="/faq">{{ $t('nav.faq') }}</router-link>
          <router-link to="/donate" class="btn btn-primary">
            <span>{{ $t('nav.donate') }}</span>
          </router-link>
          
          <!-- Language Selector -->
          <div class="lang-selector">
            <button class="lang-btn" @click="langMenuOpen = !langMenuOpen">
              {{ currentLangFlag }}
            </button>
            <div class="lang-menu" v-show="langMenuOpen">
              <button @click="changeLang('fr')" :class="{ active: locale === 'fr' }">🇫🇷 FR</button>
              <button @click="changeLang('en')" :class="{ active: locale === 'en' }">🇬🇧 EN</button>
              <button @click="changeLang('es')" :class="{ active: locale === 'es' }">🇪🇸 ES</button>
              <button @click="changeLang('it')" :class="{ active: locale === 'it' }">🇮🇹 IT</button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="mobile-right">
          <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
        <router-link to="/" @click="mobileMenuOpen = false">{{ $t('nav.home') }}</router-link>
        <router-link to="/about" @click="mobileMenuOpen = false">{{ $t('nav.about') }}</router-link>
        <router-link to="/transparency" @click="mobileMenuOpen = false">{{ $t('nav.transparency') }}</router-link>
        <router-link to="/faq" @click="mobileMenuOpen = false">{{ $t('nav.faq') }}</router-link>
        <router-link to="/donate" class="btn btn-primary" @click="mobileMenuOpen = false">
          <span>{{ $t('nav.donate') }}</span>
        </router-link>
        
        <div class="mobile-langs">
          <button @click="changeLang('fr')" :class="{ active: locale === 'fr' }">🇫🇷</button>
          <button @click="changeLang('en')" :class="{ active: locale === 'en' }">🇬🇧</button>
          <button @click="changeLang('es')" :class="{ active: locale === 'es' }">🇪🇸</button>
          <button @click="changeLang('it')" :class="{ active: locale === 'it' }">🇮🇹</button>
        </div>
      </div>
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
            <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
          </div>
          
          <div class="footer-links-group">
            <div class="footer-column">
              <h4>{{ $t('footer.navigation') }}</h4>
              <router-link to="/">{{ $t('nav.home') }}</router-link>
              <router-link to="/about">{{ $t('nav.about') }}</router-link>
              <router-link to="/transparency">{{ $t('nav.transparency') }}</router-link>
              <router-link to="/faq">{{ $t('nav.faq') }}</router-link>
              <router-link to="/donate">{{ $t('nav.donate') }}</router-link>
              <router-link to="/contact">{{ $t('contact.title') }}</router-link>
            </div>
            
            <div class="footer-column">
              <h4>{{ $t('footer.legal') }}</h4>
              <router-link to="/legal">{{ $t('legal.title') }}</router-link>
            </div>
            
            <div class="footer-column">
              <h4>{{ $t('footer.community') }}</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
              <a href="https://discord.com" target="_blank" rel="noopener">Discord</a>
              <a href="https://github.com/OpenExistence" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p class="footer-copyright">{{ $t('footer.copyright') }}</p>
            <p class="footer-disclaimer">{{ $t('footer.disclaimer') }}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const mobileMenuOpen = ref(false)
const langMenuOpen = ref(false)

const langFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  it: '🇮🇹'
}

const currentLangFlag = computed(() => langFlags[locale.value] || '🌐')

const changeLang = (lang) => {
  locale.value = lang
  langMenuOpen.value = false
  localStorage.setItem('openexistence-lang', lang)
}

// Load saved language
const savedLang = localStorage.getItem('openexistence-lang')
if (savedLang && ['fr', 'en', 'es', 'it'].includes(savedLang)) {
  locale.value = savedLang
}
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

.header-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(248, 245, 240, 0.95) 0%, rgba(248, 245, 240, 0.8) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
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
  gap: 2rem;
}

.nav-links a:not(.btn) {
  color: var(--text-gray);
  font-weight: 500;
  transition: all 0.3s ease;
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

.nav-links .router-link-active:not(.btn)::after {
  width: 100%;
}

.nav-links .btn {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

/* Language Selector */
.lang-selector {
  position: relative;
}

.lang-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  border-color: var(--primary);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.lang-menu button {
  display: block;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  color: var(--text-gray);
}

.lang-menu button:hover {
  background: var(--bg-card-hover);
  color: var(--text-light);
}

.lang-menu button.active {
  background: rgba(0, 168, 150, 0.1);
  color: var(--primary);
}

.mobile-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--text-light);
  padding: 0.5rem;
  cursor: pointer;
}

main {
  flex: 1;
  padding-top: 80px;
}

/* Footer */
.footer {
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.08) 100%);
  border-top: 1px solid var(--border);
  padding: 5rem 0 2rem;
  margin-top: 4rem;
  position: relative;
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
  gap: 3rem;
  padding: 2.5rem 0;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-column h4 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.footer-column a {
  color: var(--text-gray);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-column a:hover {
  color: var(--primary);
  transform: translateX(4px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.footer-copyright {
  color: var(--text-gray-dark);
  font-size: 0.85rem;
}

.footer-disclaimer {
  color: var(--text-gray-dark);
  font-size: 0.75rem;
  opacity: 0.7;
  font-style: italic;
  margin-top: 0.5rem;
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

/* Responsive */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-menu-btn {
    display: flex !important;
  }
  
  /* Mobile Menu */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(248, 245, 240, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--border);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .mobile-menu.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  
  .mobile-menu a {
    padding: 1rem;
    color: var(--text-gray);
    border-radius: var(--radius-md);
    transition: all 0.3s ease;
  }
  
  .mobile-menu a:hover {
    background: var(--bg-card);
    color: var(--text-light);
  }
  
  .mobile-menu .btn {
    margin-top: 0.5rem;
    text-align: center;
    justify-content: center;
  }
  
  .mobile-langs {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    border-top: 1px solid var(--border);
    margin-top: 0.5rem;
    justify-content: center;
  }
  
  .mobile-langs button {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-sm);
    font-size: 1.25rem;
    cursor: pointer;
  }
  
  .mobile-langs button.active {
    border-color: var(--primary);
    background: rgba(0, 168, 150, 0.1);
  }
  
  .footer-links-group {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .footer-column {
    align-items: center;
  }
  
  .footer-column a:hover {
    transform: none;
  }
}
</style>
