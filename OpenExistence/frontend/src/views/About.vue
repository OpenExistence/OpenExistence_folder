<template>
  <div class="about">
    <section class="page-header">
      <div class="container">
        <h1>À propos d'OpenExistence</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="about-section">
          <h2>Notre mission</h2>
          <p>
            OpenExistence est un projet unique en son genre : permettre au fondateur de consacrer sa vie à ce qu'il aime,
            grâce au soutien financier de la communauté sous forme de dons en cryptomonnaie.
          </p>
          <p>
            Nous croyons que tout le monde mérite de pouvoir profiter de la vie, et que la cryptomonnaie offre un moyen
            simple, transparent et international de soutenir un projet personnel.
          </p>
        </div>

        <div class="about-section">
          <h2>Pourquoi la cryptomonnaie ?</h2>
          <ul>
            <li><strong>Transparence totale</strong> — Toutes les transactions sont visibles sur la blockchain</li>
            <li><strong>Frais minimaux</strong> — Pas d'intermédiaires bancaires</li>
            <li><strong>International</strong> — Tout le monde peut donner, partout dans le monde</li>
            <li><strong>Instantané</strong> — Les dons sont reçus en quelques secondes</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>L'avatar communautaire</h2>
          <p>
            Grâce à vos dons, un avatar virtuel "profite" de la vie — et vous pouvez décider de quoi !
            Votes communautaires, achats, voyages, expériences... Tout est possibles.
          </p>
          <p>
            C'est une nouvelle forme de divertissement participatif : vous ne donnez pas seulement,
            vous participez à une aventure.
          </p>
        </div>

        <div class="about-section">
          <h2>Transparence</h2>
          <p>
            Nous nous engageons à une transparence totale :
          </p>
          <ul>
            <li>Adresse du portefeuille visible publiquement</li>
            <li>Suivi des transactions en temps réel</li>
            <li>Rapports réguliers sur l'utilisation des fonds</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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

.content {
  padding: 4rem 0;
}

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--bg-dark);
  border-radius: 15px;
}

.about-section h2 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.about-section p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about-section ul {
  list-style: none;
  padding: 0;
}

.about-section li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.about-section li::before {
  content: "✓";
  color: var(--primary);
  position: absolute;
  left: 0;
}
</style>
