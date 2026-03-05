<template>
  <div class="donate">
    <!-- Header -->
    <section class="page-header">
      <div class="header-bg">
        <div class="bg-gradient"></div>
        <div class="bg-glow glow-1"></div>
        <div class="bg-glow glow-2"></div>
        <div class="grid-pattern"></div>
      </div>
      <div class="container">
        <div class="page-header-content">
          <h1>Faire un don</h1>
          <p class="subtitle">Soutenez l'aventure OpenExistence</p>
        </div>
      </div>
    </section>

    <!-- Donate Content -->
    <section class="section">
      <div class="container">
        <div class="donate-grid">
          <!-- Wallet Section -->
          <div class="wallet-section">
            <div class="wallet-card glass-card">
              <div class="wallet-header">
                <h2>Adresse du portefeuille</h2>
                <div class="network-badge">
                  <span class="network-dot"></span>
                  {{ currentCrypto.network }}
                </div>
              </div>
              
              <div class="warning-box">
                ⚠️ Envoyez uniquement {{ currentCrypto.name }}. Les autres tokens seront perdus.
              </div>

              <!-- Current Trip Banner -->
              <div class="current-trip-banner">
                <div class="trip-info">
                  <span class="trip-label">🎯 Destination en cours</span>
                  <span class="trip-name">{{ currentTrip.name }}</span>
                </div>
                <div class="trip-progress-mini">
                  <div class="progress-bar-mini">
                    <div class="progress-fill-mini" :style="{ width: currentTrip.progress + '%' }"></div>
                  </div>
                  <span class="progress-text">{{ currentTrip.raised }} / {{ currentTrip.goal }} ETH</span>
                </div>
              </div>

              <!-- Crypto Dropdown -->
              <div class="crypto-dropdown">
                <label>Cryptomonnaie</label>
                <div class="dropdown-wrapper">
                  <button class="dropdown-btn" @click="dropdownOpen = !dropdownOpen">
                    <span class="crypto-icon">{{ currentCrypto.icon }}</span>
                    <span class="crypto-name">{{ currentCrypto.name }}</span>
                    <svg class="dropdown-arrow" :class="{ open: dropdownOpen }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="dropdown-menu" v-show="dropdownOpen">
                    <button 
                      v-for="crypto in cryptos" 
                      :key="crypto.id"
                      class="dropdown-item"
                      :class="{ active: selectedCrypto === crypto.id }"
                      @click="selectCrypto(crypto.id)"
                    >
                      <span class="crypto-icon">{{ crypto.icon }}</span>
                      <span class="crypto-name">{{ crypto.name }}</span>
                      <span class="crypto-symbol">{{ crypto.symbol }}</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Address Display -->
              <div class="address-section">
                <label>{{ currentCrypto.name }} Address</label>
                <div class="address-box">
                  <code>{{ currentCrypto.address }}</code>
                  <button class="copy-btn" @click="copyAddress">
                    <svg v-if="!copied" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- QR Code -->
              <div class="qr-section">
                <div class="qr-placeholder">
                  <div class="qr-code-display">
                    <!-- Simple QR pattern -->
                    <div class="qr-pattern"></div>
                  </div>
                  <span>Scannez pour donner</span>
                </div>
              </div>

              <!-- Amount Input -->
              <div class="amount-section">
                <label>Montant ({{ currentCrypto.symbol }})</label>
                <div class="amount-input-wrapper">
                  <input 
                    type="number" 
                    v-model="customAmount"
                    :placeholder="'Entrez un montant en ' + currentCrypto.symbol"
                    step="0.001"
                    min="0"
                    class="amount-input"
                  >
                  <span class="amount-suffix">{{ currentCrypto.symbol }}</span>
                </div>
                
                <div class="quick-amounts">
                  <button 
                    v-for="amount in quickAmounts" 
                    :key="amount"
                    class="quick-amount-btn"
                    @click="customAmount = amount"
                    :class="{ active: customAmount === amount }"
                  >
                    {{ amount }} {{ currentCrypto.symbol }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Info Section -->
          <div class="info-section">
            <!-- How to Donate -->
            <div class="info-card glass-card">
              <h3>Comment faire un don ?</h3>
              <ol class="steps-list">
                <li>
                  <span class="step-num">1</span>
                  <span>Choisissez la cryptomonnaie</span>
                </li>
                <li>
                  <span class="step-num">2</span>
                  <span>Copiez l'adresse ou scannez le QR</span>
                </li>
                <li>
                  <span class="step-num">3</span>
                  <span>Envoyez depuis votre portefeuille</span>
                </li>
                <li>
                  <span class="step-num">4</span>
                  <span>C'est fait ! Merci 🙌</span>
                </li>
              </ol>
            </div>

            <!-- Supported Cryptos -->
            <div class="info-card glass-card">
              <h3>Cryptomonnaies acceptées</h3>
              <div class="crypto-list">
                <div v-for="crypto in cryptos" :key="crypto.id" class="crypto-item">
                  <span class="crypto-icon">{{ crypto.icon }}</span>
                  <span class="crypto-name">{{ crypto.name }}</span>
                  <span class="crypto-symbol">{{ crypto.symbol }}</span>
                </div>
              </div>
            </div>

            <!-- Tips -->
            <div class="info-card glass-card tips-card">
              <h3>💡 Conseils</h3>
              <ul class="tips-list">
                <li>Vérifiez toujours l'adresse avant d'envoyer</li>
                <li>Chaque satoshi compte !</li>
                <li>Restez anonyme si vous le souhaitez</li>
                <li>Les dons sont irréversibles</li>
              </ul>
            </div>

            <!-- Thank You -->
            <div class="thank-you-card glass-card">
              <div class="thank-you-icon">✨</div>
              <h3>Merci pour votre soutien !</h3>
              <p>Chaque don nous rapproche de la liberté.</p>
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
const customAmount = ref(null)
const copied = ref(false)
const dropdownOpen = ref(false)

const currentTrip = {
  name: 'New York',
  emoji: '🗽',
  goal: 5,
  raised: 2.3,
  progress: 46
}

const cryptos = [
  { 
    id: 'eth', 
    name: 'Ethereum', 
    symbol: 'ETH', 
    network: 'Ethereum',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f4Eb5', 
    icon: '⟐' 
  },
  { 
    id: 'usdc', 
    name: 'USD Coin (ERC-20)', 
    symbol: 'USDC', 
    network: 'Ethereum',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f4Eb5', 
    icon: '$' 
  },
  { 
    id: 'usdt', 
    name: 'Tether (ERC-20)', 
    symbol: 'USDT', 
    network: 'Ethereum',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f4Eb5', 
    icon: '₮' 
  },
  { 
    id: 'sol', 
    name: 'Solana', 
    symbol: 'SOL', 
    network: 'Solana',
    address: '7EcDhSYGxXyscszYEP2CqqHfjrGmPNq9U7Y7x7uJ', 
    icon: '◎' 
  }
]

const quickAmounts = [0.01, 0.05, 0.1, 0.5, 1]

const currentCrypto = computed(() => {
  return cryptos.find(c => c.id === selectedCrypto.value) || cryptos[0]
})

const selectCrypto = (id) => {
  selectedCrypto.value = id
  dropdownOpen.value = false
}

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
/* Page Header */
.page-header {
  padding: 8rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 245, 212, 0.1) 0%, transparent 60%);
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.glow-1 {
  width: 500px;
  height: 500px;
  background: rgba(0, 245, 212, 0.15);
  top: -200px;
  right: -100px;
}

.glow-2 {
  width: 350px;
  height: 350px;
  background: rgba(247, 37, 133, 0.15);
  bottom: -100px;
  left: -50px;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%);
}

.page-header-content {
  position: relative;
  z-index: 1;
}

.page-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-gray);
}

/* Section */
.section {
  padding: 2rem 0 6rem;
}

.donate-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;
}

/* Wallet Card */
.wallet-card {
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.wallet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.wallet-header h2 {
  font-size: 1.25rem;
}

.network-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 245, 212, 0.1);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}

.network-dot {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse-glow 2s ease-in-out infinite;
}

.warning-box {
  background: rgba(247, 37, 133, 0.1);
  border: 1px solid rgba(247, 37, 133, 0.3);
  color: #ff5c8d;
  padding: 1rem;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* Current Trip Banner */
.current-trip-banner {
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(123, 44, 191, 0.15) 100%);
  border: 1px solid rgba(0, 245, 212, 0.3);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.trip-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.trip-label {
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trip-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.trip-progress-mini {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-bar-mini {
  width: 120px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill-mini {
  height: 100%;
  background: var(--gradient-1);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 0.85rem;
  color: var(--text-gray);
  font-weight: 500;
}

/* Crypto Dropdown */
.crypto-dropdown {
  margin-bottom: 1.5rem;
}

.crypto-dropdown label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-gray);
  margin-bottom: 0.5rem;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-light);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.dropdown-btn:hover {
  border-color: var(--primary);
}

.dropdown-btn .crypto-icon {
  font-size: 1.25rem;
}

.dropdown-btn .crypto-name {
  flex: 1;
  text-align: left;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  color: var(--text-gray);
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  z-index: 100;
  box-shadow: var(--shadow-lg);
}

.dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.dropdown-item:hover {
  background: var(--bg-card-hover);
}

.dropdown-item.active {
  background: rgba(0, 245, 212, 0.1);
}

.dropdown-item .crypto-icon {
  font-size: 1.25rem;
}

.dropdown-item .crypto-name {
  flex: 1;
  text-align: left;
}

.dropdown-item .crypto-symbol {
  color: var(--text-gray);
  font-size: 0.85rem;
}

/* Address Section */
.address-section {
  margin-bottom: 1.5rem;
}

.address-section label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-gray);
  margin-bottom: 0.5rem;
}

.address-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-dark);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.address-box code {
  flex: 1;
  font-size: 0.75rem;
  word-break: break-all;
  color: var(--primary);
  font-family: 'JetBrains Mono', monospace;
}

.copy-btn {
  background: rgba(0, 245, 212, 0.1);
  border: none;
  padding: 0.625rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--primary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: rgba(0, 245, 212, 0.2);
}

/* QR Section */
.qr-section {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.qr-placeholder {
  width: 160px;
  height: 160px;
  background: white;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #333;
}

.qr-code-display {
  width: 120px;
  height: 120px;
  background: 
    linear-gradient(90deg, #000 25%, transparent 25%, transparent 75%, #000 75%),
    linear-gradient(#000 25%, transparent 25%, transparent 75%, #000 75%);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
  opacity: 0.8;
}

.qr-placeholder span {
  font-size: 0.75rem;
  color: #666;
}

/* Amount Input */
.amount-section label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-gray);
  margin-bottom: 0.75rem;
}

.amount-input-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.amount-input {
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-light);
  font-size: 1.25rem;
  font-weight: 600;
  font-family: inherit;
}

.amount-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 245, 212, 0.1);
}

.amount-input::placeholder {
  color: var(--text-gray-dark);
  font-weight: 400;
  font-size: 0.9rem;
}

.amount-suffix {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-gray);
  font-weight: 600;
}

.quick-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.quick-amount-btn {
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  color: var(--text-gray);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.quick-amount-btn:hover {
  border-color: var(--primary);
  color: var(--text-light);
}

.quick-amount-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--bg-dark);
}

/* Info Section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  padding: 1.5rem;
}

.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  color: var(--primary);
}

/* Steps List */
.steps-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.steps-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-gray);
}

.step-num {
  width: 28px;
  height: 28px;
  background: rgba(0, 245, 212, 0.1);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* Crypto List */
.crypto-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.crypto-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: var(--bg-dark);
  border-radius: var(--radius-md);
}

.crypto-item .crypto-icon {
  font-size: 1.25rem;
}

.crypto-item .crypto-name {
  flex: 1;
  font-weight: 500;
}

.crypto-item .crypto-symbol {
  color: var(--text-gray);
  font-size: 0.85rem;
  font-weight: 600;
}

/* Tips */
.tips-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tips-list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-gray);
  font-size: 0.9rem;
}

.tips-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary);
}

/* Thank You */
.thank-you-card {
  background: var(--gradient-1);
  text-align: center;
  padding: 2rem;
  border: none;
}

.thank-you-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.thank-you-card h3 {
  color: var(--bg-dark);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.thank-you-card p {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .donate-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 7rem 0 3rem;
  }
  
  .wallet-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .crypto-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .address-box {
    flex-direction: column;
    align-items: stretch;
  }
  
  .copy-btn {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .crypto-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
