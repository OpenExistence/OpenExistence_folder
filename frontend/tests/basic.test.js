/**
 * Tests de base pour OpenExistence
 * Vérifie que les pages et composants fonctionnent correctement
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'
import Legal from '../src/views/Legal.vue'
import Transparency from '../src/views/Transparency.vue'
import FAQ from '../src/views/FAQ.vue'

describe('OpenExistence - Tests de base', () => {
  
  describe('Page Home (Home.vue)', () => {
    it('doit avoir du contenu', () => {
      const wrapper = mount(Home)
      expect(wrapper.html().length).toBeGreaterThan(100)
    })
  })
  
  describe('Page Transparence (Transparency.vue)', () => {
    it('doit avoir du contenu', () => {
      const wrapper = mount(Transparency)
      expect(wrapper.html().length).toBeGreaterThan(500)
    })
  })
  
  describe('Page Mentions Légales (Legal.vue)', () => {
    it('doit avoir du contenu', () => {
      const wrapper = mount(Legal)
      expect(wrapper.html()).toContain('Mentions')
    })
  })
  
  describe('Page FAQ (FAQ.vue)', () => {
    it('doit avoir du contenu', () => {
      const wrapper = mount(FAQ)
      expect(wrapper.html().length).toBeGreaterThan(500)
    })
  })
})
