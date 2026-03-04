<template>
  <div class="transparency">
    <!-- Header -->
    <div class="transparency-header">
      <h1>Transparence Totale</h1>
      <p>Chaque euro compte. Voici où en sont vos dons.</p>
    </div>

    <!-- Current Goal -->
    <div class="current-goal">
      <div class="goal-badge">Destination actuelle</div>
      <h2>{{ currentTrip.name }}</h2>
      <p class="goal-description">{{ currentTrip.description }}</p>
      
      <div class="progress-container">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>
        <div class="progress-stats">
          <span class="raised">{{ formatAmount(raised) }} ETH</span>
          <span class="goal">/ {{ formatAmount(currentTrip.goal) }} ETH</span>
        </div>
        <div class="progress-percent">{{ progressPercent }}%</div>
      </div>
      
      <div class="goal-actions">
        <router-link to="/donate" class="btn btn-primary">
          Contribuer à ce voyage
        </router-link>
      </div>
    </div>

    <!-- All Trips -->
    <div class="trips-list">
      <h3>Prochaines destinations</h3>
      
      <div class="trips-grid">
        <div 
          v-for="(trip, index) in trips" 
          :key="trip.name"
          class="trip-card"
          :class="{ 
            'completed': trip.completed,
            'active': index === currentIndex 
          }"
        >
          <div class="trip-image" :style="{ backgroundImage: 'url(' + trip.image + ')' }"></div>
          <div class="trip-rank">{{ index + 1 }}</div>
          <div class="trip-content">
            <div class="trip-header">
              <span class="trip-name">{{ trip.name }}</span>
              <h4>{{ trip.name }}</h4>
            </div>
            <p class="trip-description">{{ trip.description }}</p>
            <div class="trip-progress">
              <div class="trip-progress-bar">
                <div 
                  class="trip-progress-fill" 
                  :style="{ width: (trip.raised / trip.goal * 100) + '%' }"
                ></div>
              </div>
              <span class="trip-amount">
                {{ formatAmount(trip.raised) }} / {{ formatAmount(trip.goal) }} ETH
              </span>
            </div>
          </div>
          <div class="trip-status">
            <span v-if="trip.completed" class="status-completed">✅ Atteint</span>
            <span v-else-if="index === currentIndex" class="status-active">🔄 En cours</span>
            <span v-else class="status-pending">⏳ En attente</span>
          </div>
        </div>
      </div>
    </div>

    <!-- History -->
    <div class="history-section">
      <h3>Historique des voyages</h3>
      <div class="history-list">
        <div v-for="trip in completedTrips" :key="trip.name" class="history-item">
          <span class="history-name">{{ trip.name }}</span>
          <span class="history-name">{{ trip.name }}</span>
          <span class="history-amount">{{ formatAmount(trip.raised) }} ETH</span>
        </div>
        <div v-if="completedTrips.length === 0" class="history-empty">
          Aucun voyage financé pour le moment. Soyez le premier ! 🚀
        </div>
      </div>
    </div>

    <!-- Transparency Note -->
    <div class="transparency-note">
      <div class="note-icon">🔒</div>
      <p>
        <strong>100% transparent.</strong> Les adresses钱包 sont publiques. 
        Chaque transaction peut être vérifiée sur la blockchain. 
        Aucun fonds n'est utilisé autre que pour financer les voyages.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Données des voyages
const trips = ref([
  {
    name: 'New York',
    description: 'La ville qui ne dort jamais - Times Square, Central Park, Brooklyn Bridge',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    goal: 5,
    raised: 2.3,
    completed: false
  },
  {
    name: 'Polynésie',
    description: 'Bora Bora, Papeete, îles Maldives françaises',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800',
    goal: 10,
    raised: 0,
    completed: false
  },
  {
    name: 'Chili',
    description: 'Santiago, désert d\'Atacama, Patagonie',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    goal: 8,
    raised: 0,
    completed: false
  },
  {
    name: 'Mongolie',
    description: 'Oulan-Bator, steppes, yourtes traditionnelles',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    goal: 6,
    raised: 0,
    completed: false
  }
])

const currentIndex = computed(() => {
  return trips.value.findIndex(t => !t.completed)
})

const currentTrip = computed(() => {
  return trips.value[currentIndex.value] || trips.value[0]
})

const raised = computed(() => currentTrip.value.raised)

const progressPercent = computed(() => {
  return Math.min(100, Math.round((raised.value / currentTrip.value.goal) * 100))
})

const completedTrips = computed(() => {
  return trips.value.filter(t => t.completed)
})

const formatAmount = (amount) => {
  return amount.toFixed(2)
}
</script>

<style scoped>
.transparency {
  padding: 6rem 0;
  max-width: 900px;
  margin: 0 auto;
}

.transparency-header {
  text-align: center;
  margin-bottom: 4rem;
}

.transparency-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.transparency-header p {
  color: var(--text-gray);
  font-size: 1.1rem;
}

/* Current Goal */
.current-goal {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.current-goal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-1);
}

.goal-badge {
  display: inline-block;
  background: rgba(0, 245, 212, 0.1);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.current-goal h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.goal-description {
  color: var(--text-gray);
  margin-bottom: 2rem;
}

.progress-container {
  max-width: 500px;
  margin: 0 auto 2rem;
}

.progress-bar {
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.progress-stats {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.progress-stats .raised {
  color: var(--primary);
  font-weight: 700;
  font-size: 1.25rem;
}

.progress-stats .goal {
  color: var(--text-gray);
}

.progress-percent {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

/* Trips List */
.trips-list {
  margin-bottom: 4rem;
}

.trips-list h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.trips-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trip-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.trip-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background-size: cover;
  background-position: center;
  border-radius: 0 16px 16px 0;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.trip-card:hover .trip-image {
  opacity: 0.6;
}

.trip-card.active .trip-image {
  opacity: 0.5;
}

.trip-card:hover {
  border-color: rgba(0, 168, 150, 0.3);
}

.trip-card.active {
  border-color: var(--primary);
  background: rgba(0, 168, 150, 0.05);
}

.trip-card.completed {
  opacity: 0.7;
}

.trip-rank {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--text-gray);
  flex-shrink: 0;
}

.trip-card.active .trip-rank {
  background: var(--primary);
  color: var(--bg-dark);
}

.trip-content {
  flex: 1;
}

.trip-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.trip-name {
  font-size: 1.25rem;
}

.trip-content h4 {
  font-size: 1.1rem;
}

.trip-description {
  color: var(--text-gray);
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.trip-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trip-progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.trip-progress-fill {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 3px;
}

.trip-amount {
  font-size: 0.8rem;
  color: var(--text-gray);
  white-space: nowrap;
}

.trip-status {
  flex-shrink: 0;
}

.status-completed {
  color: #00ff88;
}

.status-active {
  color: var(--primary);
}

.status-pending {
  color: var(--text-gray);
}

/* History */
.history-section {
  margin-bottom: 4rem;
}

.history-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.history-name {
  flex: 1;
}

.history-amount {
  color: var(--primary);
  font-weight: 600;
}

.history-empty {
  text-align: center;
  padding: 2rem;
  color: var(--text-gray);
  font-style: italic;
}

/* Transparency Note */
.transparency-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 245, 212, 0.05);
  border: 1px solid rgba(0, 245, 212, 0.2);
  border-radius: 16px;
}

.note-icon {
  font-size: 1.5rem;
}

.transparency-note p {
  color: var(--text-gray);
  font-size: 0.9rem;
  line-height: 1.6;
}

.transparency-note strong {
  color: var(--primary);
}

/* Responsive */
@media (max-width: 768px) {
  .transparency-header h1 {
    font-size: 2rem;
  }
  
  .current-goal {
    padding: 2rem;
  }
  
  .current-goal h2 {
    font-size: 1.75rem;
  }
  
  .trip-card {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .trip-status {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
}
</style>
