/**
 * Tests de base pour OpenExistence
 * Vérifie que et les pages composants fonctionnent correctement
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../src/App.vue'
import Home from '../src/views/Home.vue'
import About from '../src/views/About.vue'
import Donate from '../src/views/Donate.vue'
import Legal from '../src/views/Legal.vue'

// Router pour les tests
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/donate', name: 'Donate', component: Donate },
    { path: '/legal', name: 'Legal', component: Legal }
  ]
})

describe('OpenExistence - Tests de base', () => {
  
  describe('App.vue', () => {
    it('doit avoir le titre OpenExistence', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router]
        }
      })
      expect(wrapper.html()).toContain('OpenExistence')
    })
    
    it('doit avoir un header avec navigation', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router]
        }
      })
      expect(wrapper.html()).toContain('Accueil')
      expect(wrapper.html()).toContain('À propos')
      expect(wrapper.html()).toContain('Faire un don')
    })
    
    it('doit avoir un footer avec mentions légales', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router]
        }
      })
      expect(wrapper.html()).toContain('Mentions légales')
      expect(wrapper.html()).toContain('Politique de confidentialité')
      expect(wrapper.html()).toContain('CGU')
    })
    
    it('doit avoir des liens vers les réseaux sociaux', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router]
        }
      })
      expect(wrapper.html()).toContain('Twitter')
      expect(wrapper.html()).toContain('Discord')
      expect(wrapper.html()).toContain('GitHub')
    })
    
    it('doit avoir le disclaimer sur les dons irréversibles', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router]
        }
      })
      expect(wrapper.html()).toContain('irréversibles')
    })
  })
  
  describe('Page d\'accueil (Home.vue)', () => {
    it('doit afficher le hero avec le titre principal', () => {
      const wrapper = mount(Home)
      expect(wrapper.html()).toContain('Vivez la liberté')
      expect(wrapper.html()).toContain('Aidez-moi à exister')
    })
    
    it('doit avoir un bouton vers la page de don', () => {
      const wrapper = mount(Home)
      expect(wrapper.html()).toContain('Faire un don')
    })
    
    it('doit afficher les statistiques', () => {
      const wrapper = mount(Home)
      expect(wrapper.html()).toContain('Total')
      expect(wrapper.html()).toContain('ETH')
      expect(wrapper.html()).toContain('Voyages')
    })
    
    it('doit expliquer le fonctionnement en 3 étapes', () => {
      const wrapper = mount(Home)
      expect(wrapper.html()).toContain('Faites un don')
      expect(wrapper.html()).toContain('Votez')
      expect(wrapper.html()).toContain('Suivez l\'aventure')
    })
  })
  
  describe('Page À propos (About.vue)', () => {
    it('doit exister et avoir du contenu', () => {
      const wrapper = mount(About)
      expect(wrapper.html().length).toBeGreaterThan(100)
    })
  })
  
  describe('Page Don (Donate.vue)', () => {
    it('doit avoir un formulaire ou des adresses crypto', () => {
      const wrapper = mount(Donate)
      const html = wrapper.html().toLowerCase()
      // Devrait avoir quelque chose lié aux cryptomonnaies
      expect(html.includes('btc') || html.includes('eth') || html.includes('crypto') || html.includes('wallet') || html.includes('adresse')).toBe(true)
    })
  })
  
  describe('Page Mentions Légales (Legal.vue)', () => {
    it('doit exister et avoir du contenu', () => {
      const wrapper = mount(Legal)
      expect(wrapper.html()).toContain('Mentions Légales')
    })
    
    it('doit avoir la section éditeur du site', () => {
      const wrapper = mount(Legal)
      expect(wrapper.html()).toContain('Éditeur du site')
    })
    
    it('doit avoir la section données personnelles / RGPD', () => {
      const wrapper = mount(Legal)
      expect(wrapper.html()).toContain('données')
    })
    
    it('doit avoir un lien de retour à l\'accueil', () => {
      const wrapper = mount(Legal)
      expect(wrapper.html()).toContain('Retour à l\'accueil')
    })
  })
  
  describe('Router', () => {
    it('doit avoir toutes les routes configurées', () => {
      const routes = router.getRoutes()
      const pathes = routes.map(r => r.path)
      
      expect(pathes).toContain('/')
      expect(pathes).toContain('/about')
      expect(pathes).toContain('/donate')
      expect(pathes).toContain('/legal')
    })
  })
  
  describe('Responsive', () => {
    it('doit avoir des media queries pour le mobile', () => {
      // Vérifie que le CSS contient des breakpoints
      const fs = require('fs')
      const appCss = fs.readFileSync('./src/App.vue', 'utf-8')
      const mainCss = fs.readFileSync('./src/assets/main.css', 'utf-8')
      
      expect(appCss.includes('768px') || mainCss.includes('768px')).toBe(true)
    })
  })
})
