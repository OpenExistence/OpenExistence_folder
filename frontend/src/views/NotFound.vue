<template>
  <div class="error-page">
    <div class="error-content">
      <div class="error-emoji">🧭</div>
      <h1>404</h1>
      <h2>{{ $t('error.title') }}</h2>
      <p>{{ $t('error.message') }}</p>
      <router-link to="/" class="btn btn-primary">
        {{ $t('error.cta') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.error-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.error-content {
  max-width: 500px;
}

.error-emoji {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

h1 {
  font-size: 8rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-light);
}

p {
  color: var(--text-gray);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
</style>
