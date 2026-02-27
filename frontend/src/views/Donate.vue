<template>
  <div class="donate">
    <!-- Header -->
    <section class="page-header">
      <div class="header-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
      <div class="container">
        <h1>Faire un don</h1>
        <p class="subtitle">Soutenez l'aventure OpenExistence</p>
      </div>
    </section>

    <!-- Donate Content -->
    <section class="section">
      <div class="container">
        <div class="donate-grid">
          <!-- Wallet Section -->
          <div class="wallet-section">
            <div class="wallet-card card">
              <div class="wallet-header">
                <h2>Adresse du portefeuille</h2>
                <div class="network-badge">
                  <span class="network-dot"></span>
                  Ethereum Mainnet
                </div>
              </div>
              
              <div class="warning-box">
                ⚠️ Envoyez uniquement les cryptomonnaies ci-dessous. Les autres tokens pourraient être perdus.
              </div>

              <!-- Crypto Tabs -->
              <div class="crypto-tabs">
                <button 
                  v-for="crypto in cryptos" 
                  :key="crypto.id"
                  :class="['crypto-tab', { active: selectedCrypto === crypto.id }]"
                  @click="selectedCrypto = crypto.id"
                >
                  <span class="crypto-icon">{{ crypto.icon }}</span>
                  <span class="crypto-name">{{ crypto.name }}</span>
                </button>
              </div>

              <!-- Address Display -->
              <div class="address-section">
                <label>{{ currentCrypto.name }} Address</label>
                <div class="address-box">
                  <code>{{ currentCrypto.address }}</code>
                  <button class="copy-btn" @click="copyAddress">
                    <span v-if="copied">✓</span>
                    <span v-else>📋</span>
                  </button>
                </div>
              </div>

              <!-- QR Code -->
              <div class="qr-section">
                <div class="qr-placeholder">
                  <div class="qr-icon">⬡</div>
                  <span>QR Code</span>
                </div>
              </div>

              <!-- Amount Selection -->
              <div class="amount-section">
                <label>Montant suggéré</label>
                <div class="amount-grid">
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
          </div>

          <!-- Info Section -->
          <div class="info-section">
            <!-- How to Donate -->
            <div class="info-card card">
              <h3>Comment faire un don ?</h3>
              <ol class="steps-list">
                <li>
                  <span class="step-num">1</span>
                  <span>Sélectionnez la cryptomonnaie</span>
                </li>
                <li>
                  <span class="step-num">2</span>
                  <span>Copiez l'adresse ou scannez le QR</span>
                </li>
                <li>
                  <span class="step-num">3</span>
                  <span>Envoyez le montant depuis votre portefeuille</span>
                </li>
                <li>
                  <span class="step-num">4</span>
                  <span>C'est fait ! Merci pour votre soutien 🙌</span>
                </li>
              </ol>
            </div>

            <!-- Supported Cryptos -->
            <div class="info-card card">
              <h3>Cryptomonnaies acceptées</h3>
              <div class="crypto-grid">
                <div v-for="crypto in cryptos" :key="crypto.id" class="crypto-item">
                  <span class="crypto-icon">{{ crypto.icon }}</span>
                  <span>{{ crypto.name }}</span>
                  <span class="crypto-symbol">{{ crypto.symbol }}</span>
                </div>
              </div>
            </div>

            <!-- Tips -->
            <div class="info-card card tips-card">
              <h3>💡 Conseils</h3>
              <ul class="tips-list">
                <li>Vérifiez toujours l'adresse avant d'envoyer</li>
                <li>Les petits dons sont les bienvenus !</li>
                <li>Vous pouvez rester anonyme</li>
                <li>Les dons ne sont pas remboursables</li>
              </ul>
            </div>

            <!-- Thank You -->
            <div class="thank-you-card card">
              <div class="thank-you-icon">✨</div>
              <h3>Merci pour votre soutien !</h3>
              <p>Chaque don, aussi petit soit-il, nous rapproche de la liberté.</p>
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
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f4Eb5', icon: '⟐' },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', icon: '₿' },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f4Eb5', icon: '₮' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', address: '7EcDhSYGxXyscszYEP2CqqHfjrGmPNq9U7Y7x7uJ', icon: '◎' }
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
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--primary);
  top: -150px;
  right: -100px;
  opacity: 0.3;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--accent);
  bottom: -100px;
  left: -50px;
  opacity: 0.3;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-gray);
  position: relative;
}

.section {
  padding: 2rem 0 6rem;
}

.donate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Wallet Card */
.wallet-card {
  padding: 2rem;
}

.wallet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
  color: #f72585;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* Crypto Tabs */
.crypto-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.crypto-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.crypto-tab:hover {
  border-color: var(--primary);
}

.crypto-tab.active {
  background: rgba(0, 245, 212, 0.1);
  border-color: var(--primary);
}

.crypto-tab .crypto-icon {
  font-size: 1.5rem;
}

.crypto-tab .crypto-name {
  font-size: 0.85rem;
  color: var(--text-gray);
}

.crypto-tab.active .crypto-name {
  color: var(--primary);
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
  border-radius: 12px;
  padding: 1rem;
}

.address-box code {
  flex: 1;
  font-size: 0.8rem;
  word-break: break-all;
  color: var(--primary);
}

.copy-btn {
  background: rgba(0, 245, 212, 0.1);
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
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
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #333;
}

.qr-icon {
  font-size: 3rem;
  color: #000;
}

.qr-placeholder span {
  font-size: 0.85rem;
}

/* Amount Section */
.amount-section label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-gray);
  margin-bottom: 0.75rem;
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.amount-btn {
  padding: 0.875rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-light);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.amount-btn:hover {
  border-color: var(--primary);
}

.amount-btn.active {
  background: var(--primary);
  color: var(--bg-dark);
  border-color: var(--primary);
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
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
}

/* Crypto Grid */
.crypto-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.crypto-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-dark);
  border-radius: 10px;
  font-size: 0.9rem;
}

.crypto-item .crypto-icon {
  font-size: 1.25rem;
}

.crypto-symbol {
  margin-left: auto;
  color: var(--text-gray);
  font-size: 0.8rem;
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
}

.thank-you-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.thank-you-card h3 {
  color: var(--bg-dark);
  margin-bottom: 0.5rem;
}

.thank-you-card p {
  color: var(--bg-dark);
  opacity: 0.8;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .donate-grid {
    grid-template-columns: 1fr;
  }
  
  .crypto-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .wallet-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .crypto-grid {
    grid-template-columns: 1fr;
  }
  
  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
