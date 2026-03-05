<template>
  <div class="donate">
    <section class="page-header">
      <div class="container">
        <h1>Faire un don</h1>
        <p class="subtitle">Soutenez le fondateur avec de la cryptomonnaie</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="donate-grid">
          <div class="wallet-section">
            <h2>Adresse du portefeuille</h2>
            <p class="warning">
              ⚠️ Envoyez uniquement les cryptomonnaies支持的 ci-dessous. 
              Les autres tokens pourraient être perdus.
            </p>
            
            <div class="crypto-tabs">
              <button 
                v-for="crypto in cryptos" 
                :key="crypto.id"
                :class="['crypto-tab', { active: selectedCrypto === crypto.id }]"
                @click="selectedCrypto = crypto.id"
              >
                {{ crypto.name }}
              </button>
            </div>

            <div class="wallet-address">
              <div class="address-display">
                <code>{{ currentCrypto.address }}</code>
                <button class="btn-copy" @click="copyAddress">
                  {{ copied ? '✓ Copié!' : 'Copier' }}
                </button>
              </div>
              <div class="qr-code">
                <div class="qr-placeholder">
                  QR Code - {{ currentCrypto.name }}
                </div>
              </div>
            </div>

            <div class="amount-section">
              <h3>Montant suggéré</h3>
              <div class="amount-buttons">
                <button 
                  v-for="amount in amounts" 
                  :key="amount"
                  class="amount-btn"
                  @click="selectedAmount = amount"
                  :class="{ active: selectedAmount === amount }"
                >
                  {{ amount }} {{ currentCrypto.symbol }}
                </button>
              </div>
            </div>
          </div>

          <div class="info-section">
            <div class="info-card">
              <h3>Comment faire un don ?</h3>
              <ol>
                <li>Sélectionnez la cryptomonnaie</li>
                <li>Copiez l'adresse ou scannez le QR code</li>
                <li>Envoyez le montant de votre choix depuis votre portefeuille</li>
                <li>C'est fait ! Merci pour votre soutien 🙌</li>
              </ol>
            </div>

            <div class="info-card">
              <h3>Cryptomonnaies supportées</h3>
              <ul class="crypto-list">
                <li v-for="crypto in cryptos" :key="crypto.id">
                  <span class="crypto-icon">{{ crypto.icon }}</span>
                  {{ crypto.name }} ({{ crypto.symbol }})
                </li>
              </ul>
            </div>

            <div class="info-card">
              <h3>Conseils</h3>
              <ul>
                <li>Vérifiez toujours l'adresse avant d'envoyer</li>
                <li>Les petits dons sont les bienvenus !</li>
                <li>Vous pouvez donner anonymously</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCrypto = ref('eth')
const selectedAmount = ref(null)
const copied = ref(false)

const cryptos = [
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', address: '0x...', icon: '⟐' },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', address: 'bc1q...', icon: '₿' },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', address: '0x...', icon: '₮' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', address: '...', icon: '◎' }
]

const amounts = [0.01, 0.05, 0.1, 0.5, 1, 5]

const currentCrypto = computed(() => {
  return cryptos.find(c => c.id === selectedCrypto.value) || cryptos[0]
})

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(currentCrypto.value.address)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--primary);
}

.subtitle {
  color: var(--text-gray);
  margin-top: 0.5rem;
}

.content {
  padding: 4rem 0;
}

.donate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

@media (max-width: 768px) {
  .donate-grid {
    grid-template-columns: 1fr;
  }
}

.wallet-section {
  background: var(--bg-dark);
  padding: 2rem;
  border-radius: 15px;
}

.warning {
  background: #3d2814;
  border: 1px solid #ff6b35;
  color: #ffb347;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.crypto-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.crypto-tab {
  padding: 0.75rem 1.5rem;
  background: var(--bg-darker);
  color: var(--text-light);
  border-radius: 8px;
  transition: all 0.3s;
}

.crypto-tab.active {
  background: var(--primary);
  color: var(--bg-dark);
}

.wallet-address {
  margin-bottom: 2rem;
}

.address-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-darker);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.address-display code {
  flex: 1;
  font-size: 0.85rem;
  word-break: break-all;
}

.btn-copy {
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: var(--bg-dark);
  border-radius: 5px;
  font-weight: bold;
  white-space: nowrap;
}

.qr-code {
  display: flex;
  justify-content: center;
}

.qr-placeholder {
  width: 200px;
  height: 200px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  border-radius: 10px;
  font-size: 0.9rem;
}

.amount-section h3 {
  margin-bottom: 1rem;
}

.amount-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.amount-btn {
  padding: 0.75rem 1.25rem;
  background: var(--bg-darker);
  color: var(--text-light);
  border-radius: 8px;
  transition: all 0.3s;
}

.amount-btn.active {
  background: var(--primary);
  color: var(--bg-dark);
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: var(--bg-dark);
  padding: 1.5rem;
  border-radius: 15px;
}

.info-card h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.info-card ol, .info-card ul {
  padding-left: 1.5rem;
}

.info-card li {
  margin-bottom: 0.5rem;
  color: var(--text-gray);
}

.crypto-list {
  list-style: none !important;
  padding: 0 !important;
}

.crypto-list li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.crypto-icon {
  font-size: 1.2rem;
}
</style>
