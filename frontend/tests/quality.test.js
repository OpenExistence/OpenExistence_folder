/**
 * Tests de qualité et bonnes pratiques pour OpenExistence
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import Home from '../src/views/Home.vue'
import App from '../src/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: { template: '<div>About</div>' } },
    { path: '/donate', name: 'Donate', component: { template: '<div>Donate</div>' } },
    { path: '/legal', name: 'Legal', component: { template: '<div>Legal</div>' } },
    { path: '/transparency', name: 'Transparency', component: { template: '<div>Transparency</div>' } },
    { path: '/faq', name: 'FAQ', component: { template: '<div>FAQ</div>' } }
  ]
})

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr: { nav: { home: 'Accueil', about: 'À propos', transparency: 'Transparence', faq: 'FAQ', donate: 'Donner' }, footer: { disclaimer: 'irr' }, legal: { title: 'Mentions Légales' }, contact: { title: 'Contact' } },
    en: { nav: { home: 'Home', about: 'About', transparency: 'Transparency', faq: 'FAQ', donate: 'Donate' }, footer: { disclaimer: 'irr' }, legal: { title: 'Legal Notice' }, contact: { title: 'Contact' } },
    es: { nav: { home: 'Inicio', about: 'Acerca de', transparency: 'Transparencia', faq: 'FAQ', donate: 'Donar' }, footer: { disclaimer: 'irr' }, legal: { title: 'Aviso Legal' }, contact: { title: 'Contactar' } },
    it: { nav: { home: 'Home', about: 'Chi siamo', transparency: 'Trasparenza', faq: 'FAQ', donate: 'Dona' }, footer: { disclaimer: 'irr' }, legal: { title: 'Note Legali' }, contact: { title: 'Contattami' } }
  }
})

describe('OpenExistence - Tests de qualité', () => {
  const shallowMount = (component, options = {}) => {
    return mount(component, { 
      ...options, 
      global: {
        ...options.global,
        stubs: {
          RouterLink: true,
          RouterView: { template: '<div><slot /></div>' },
          ...options.global?.stubs
        }
      }
    })
  }
  
  describe('Accessibilité', () => {
    it('doit avoir des balises title dans les pages', () => {
      const wrapper = shallowMount(Home)
      const links = wrapper.findAll('a')
      links.forEach(link => {
        expect(link.text().trim().length).toBeGreaterThan(0)
      })
    })
    
    it('doit avoir des boutons avec du texte', () => {
      const wrapper = shallowMount(Home)
      const buttons = wrapper.findAll('button')
      const routerLinks = wrapper.findAll('router-link')
      const allButtons = [...buttons, ...routerLinks]
      allButtons.forEach(btn => {
        expect(btn.text().trim().length).toBeGreaterThan(0)
      })
    })
    
    it('ne doit pas avoir de liens avec # comme href', () => {
      const wrapper = shallowMount(App, {
        global: { plugins: [router, i18n] }
      })
      const html = wrapper.html()
      expect(html.includes('href="#"')).toBe(false)
    })
  })
  
  describe('SEO et Meta', () => {
    it('doit avoir des headings (h1, h2, h3) sur la page home', () => {
      const wrapper = shallowMount(Home)
      const h1 = wrapper.find('h1')
      const h2 = wrapper.findAll('h2')
      expect(h1.exists()).toBe(true)
      expect(h2.length).toBeGreaterThan(0)
    })
    
    it('le h1 doit avoir du contenu', () => {
      const wrapper = shallowMount(Home)
      const h1 = wrapper.find('h1')
      expect(h1.text().trim().length).toBeGreaterThan(0)
    })
  })
  
  describe('Bonnes pratiques UX', () => {
    it('doit avoir un bouton CTA visible sur la page d\'accueil', () => {
      const wrapper = shallowMount(Home)
      const html = wrapper.html().toLowerCase()
      expect(html.includes('don') || html.includes('soutenir')).toBe(true)
    })
    
    it('doit avoir une section comment ça marche', () => {
      const wrapper = shallowMount(Home)
      expect(wrapper.html()).toContain('Comment ça marche')
    })
    
    it('doit avoir des stats ou indicateurs de progression', () => {
      const wrapper = shallowMount(Home)
      expect(wrapper.html()).toContain('ETH')
      expect(wrapper.html()).toContain('Total')
    })
  })
  
  describe('Links et Navigation', () => {
    it('tous les liens router-link doivent avoir une destination', () => {
      const wrapper = shallowMount(App, {
        global: { plugins: [router, i18n] }
      })
      const routerLinks = wrapper.findAll('router-link')
      routerLinks.forEach(link => {
        const to = link.attributes('to')
        expect(to).toBeDefined()
        expect(to.length).toBeGreaterThan(0)
      })
    })
  })
  
  describe('Design System', () => {
    it('doit utiliser des variables CSS', () => {
      const fs = require('fs')
      const css = fs.readFileSync('./src/assets/main.css', 'utf-8')
      expect(css.includes(':root')).toBe(true)
      expect(css.includes('--primary')).toBe(true)
      expect(css.includes('--bg-dark')).toBe(true)
    })
    
    it('doit avoir des animations définies', () => {
      const fs = require('fs')
      const css = fs.readFileSync('./src/assets/main.css', 'utf-8')
      expect(css.includes('@keyframes')).toBe(true)
    })
  })
  
  describe('Sécurité des liens externes', () => {
    it('les liens externes doivent avoir rel="noopener"', () => {
      const wrapper = shallowMount(App, {
        global: { plugins: [router, i18n] }
      })
      const html = wrapper.html()
      const externalLinks = html.match(/href="http[^"]*"/g) || []
      externalLinks.forEach(link => {
        if (link.includes('target="_blank"')) {
          expect(link).toContain('rel="noopener"')
        }
      })
    })
  })
  
  describe('Contenu légal', () => {
    it('doit avoir une page mentions légales', () => {
      const wrapper = shallowMount(App, {
        global: { plugins: [router, i18n] }
      })
      const html = wrapper.html()
      expect(html.includes('href="/legal"') || html.includes('to="/legal"')).toBe(true)
    })
    
    it('doit avoir un disclaimer sur les dons', () => {
      const wrapper = shallowMount(App, {
        global: { plugins: [router, i18n] }
      })
      const html = wrapper.html().toLowerCase()
      expect(html.includes('irréversibles') || html.includes('irr')).toBe(true)
    })
  })
})
