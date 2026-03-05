<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-header">
        <h1>{{ $t('contact.title') }}</h1>
        <p>{{ $t('contact.subtitle') }}</p>
      </div>
      
      <div class="contact-content">
        <form @submit.prevent="handleSubmit" class="contact-form glass-card">
          <div class="form-group">
            <label for="name">{{ $t('contact.form.name') }}</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              :placeholder="$t('contact.form.namePlaceholder')"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="email">{{ $t('contact.form.email') }}</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="message">{{ $t('contact.form.message') }}</label>
            <textarea 
              id="message" 
              v-model="form.message"
              :placeholder="$t('contact.form.messagePlaceholder')"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" :disabled="sending">
            {{ sending ? $t('contact.form.sending') : $t('contact.form.submit') }}
          </button>
          
          <p v-if="sent" class="success-message">
            {{ $t('contact.form.success') }}
          </p>
        </form>
        
        <div class="contact-info">
          <div class="info-card glass-card">
            <h3>{{ $t('contact.info.title') }}</h3>
            <p>{{ $t('contact.info.desc') }}</p>
          </div>
          
          <div class="info-card glass-card">
            <h3>{{ $t('contact.response.title') }}</h3>
            <p>{{ $t('contact.response.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sending = ref(false)
const sent = ref(false)

const handleSubmit = async () => {
  sending.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // In production, this would send to a backend
  console.log('Contact form submitted:', form.value)
  
  sending.value = false
  sent.value = true
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  
  // Reset success message after 5 seconds
  setTimeout(() => {
    sent.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-page {
  padding: 6rem 0;
  min-height: 80vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-header p {
  color: var(--text-gray);
  font-size: 1.1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-form {
  padding: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: var(--bg-dark);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-light);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 168, 150, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form .btn {
  width: 100%;
  padding: 1rem;
}

.contact-form .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 168, 150, 0.1);
  border-radius: var(--radius-md);
  color: var(--primary);
  text-align: center;
  font-weight: 500;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  padding: 2rem;
}

.info-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--primary);
}

.info-card p {
  color: var(--text-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
