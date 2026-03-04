<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-content">
        <h1>Mentions Légales</h1>
        <p class="last-update">Dernière mise à jour : Mars 2026</p>

        <section>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site OpenExistence est éditée par :<br>
            <strong>OpenExistence</strong><br>
            Fondateur : César<br>
            Email : contact@openexistence.io<br>
            Site web : https://openexistence.io
          </p>
        </section>

        <section>
          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :<br>
            <strong>[Nom de l'hébergeur]</strong><br>
            [Adresse]<br>
            [Coordonnées]
          </p>
        </section>

        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
            est protégé par le droit d'auteur et le droit de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, 
            totale ou partielle du site ou de ses contenus, est interdite sans autorisation préalable écrite.
          </p>
        </section>

        <section>
          <h2>4. Collecte et traitement des données</h2>
          <p>
            Ce site ne collecte pas de données personnelles. Aucune cookies de traçage n'est utilisé.
            Les seules données collectées sont :
          </p>
          <ul>
            <li>Adresse钱包 crypto (si vous faites un don) - stockée de manière sécurisée</li>
            <li>Adresse email (optionnelle, pour recevoir des mises à jour)</li>
          </ul>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            Pour toute demande, contactez-nous à : contact@openexistence.io
          </p>
        </section>

        <section>
          <h2>5. Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre purement informatif. 
            OpenExistence s'efforce d'assurer l'exactitude des informations, mais ne peut garantir l'absence d'erreurs.
          </p>
          <p>
            Les dons en cryptomonnaie sont irréversibles. Veuillez vérifier attentivement l'adresse avant toute transaction.
          </p>
        </section>

        <section>
          <h2>6. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. OpenExistence n'exerce aucun contrôle sur ces sites 
            et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2>7. Acceptation</h2>
          <p>
            L'utilisation de ce site implique l'acceptation pleine et entière des présentes mentions légales.
          </p>
        </section>

        <div class="back-link">
          <router-link to="/" class="btn btn-secondary">← Retour à l'accueil</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding: 4rem 0;
  min-height: calc(100vh - 80px);
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
}

.legal-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-update {
  color: var(--text-gray);
  font-size: 0.9rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

section {
  margin-bottom: 2.5rem;
}

section h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

section p {
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 1rem;
}

section ul {
  margin-left: 1.5rem;
  color: var(--text-gray);
  line-height: 1.8;
}

section li {
  margin-bottom: 0.5rem;
}

.back-link {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 768px) {
  .legal-content h1 {
    font-size: 2rem;
  }
}
</style>
