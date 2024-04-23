<template>
  <div class="home">
    <h1 class="heading-title">Projets</h1>
    <div class="heading-bar">
      <button class="sort-button">Trier</button>
      <span class="description">
        Trier par ville, nom de projet, stade d'avancement, banque,
        commercialisation, marge, RP, etc.
      </span>
    </div>
    <div class="project-cards-container">
      <ProjectCardItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCardItem from "@/components/ProjectCardItem.vue";
import { ref } from "vue";
const projects = ref([
  {
    id: 1,
    imageUrl:
      "https://riviera-realisation.com/cache_img/522694/villa-bellevue-perspective.jpeg",
    title: "LE PARC SAINT LAURENT",
    location: "Harfleur (76)",
    status: ["Dépôt PC", "Comm.", "DCE/DAO", "En Cours", "Livraison"],
    keyDates: {
      landPurchase: "15/06/2024",
    },
    members: [
      "https://th.bing.com/th/id/R.e4d8095bccdfe33b5a4dd6192ce5eb8f?rik=rzBUPJQlU7027Q&riu=http%3a%2f%2fimg.zyedu.com%2fphoto%2f2020%2f11%2f7%2f864a6e50-a7cf-4560-aaf3-b09bababf19e.jpg-s&ehk=jaYjJGjKHUKMWVmtUnyaEFZTtkgBlIqSQGC5AS1r9kA%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.d0b2b6f9eb7e55f1145e4db99ea02a5e?rik=czWsdcOKV11b7A&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2019%2f09%2f31475-1.jpg&ehk=ZKmOhi%2bQoYOPnnpgePboFHmGq3i2dSDJWaZfi3RSF2U%3d&risl=&pid=ImgRaw&r=0",
      "https://gd-hbimg.huaban.com/f0c0e16df0ac07821107a805150d1c3c1b77cd6580b1a-vw1pg6_fw658",
      "https://th.bing.com/th/id/R.5b0df32d33805ce513600a15dc4e5439?rik=X%2bes9sAFj7O%2fRQ&riu=http%3a%2f%2fwww.missyuan.net%2fuploads%2fallimg%2f180920%2f1J4351404-0.jpg&ehk=2%2beDW7No1%2bZnOTEv0rNGF6eYyWAA1yY7jnVxseya%2bh8%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.7c7a254d0d3f33edfc19e750d69c9b5c?rik=NkhDJpGjYlshcg&riu=http%3a%2f%2fpic6.nipic.com%2f20100423%2f2988027_104625286440_2.jpg&ehk=KHkTwnhir2zPJrF%2b3%2fniPmfCJLnD64iOWqF0UG1%2fvA0%3d&risl=&pid=ImgRaw&r=0",
    ],
    financials: {
      stock: 82,
      reserved: 18,
      acte: 0,
      gfa: 40,
    },
    etats: ["Verif. Jur.", "PUV Signe", "PC Obt.", "PC Purge", "Cadre VEFA"],
    budgetStudy: "7.235 K",
    margin: "9.2 %",
    marginfees: "457 K",
    honoraires: "5.5 %",
    honorairesfees: "236 K",
    documents: ["Convention de Gest...", "Contrat de Commer..."],
    conversations: ["Comme demandé, voici...", "Merci de me donner les..."],
  },
  {
    id: 2,
    imageUrl:
      "https://riviera-realisation.com/cache_img/522694/villa-bellevue-vue-mer.jpeg",
    title: "CRYSTAL VIEW",
    location: "Auron (06)",
    status: ["Dépôt PC", "Comm.", "DCE/DAO", "En Cours", "Livraison"],
    keyDates: {
      landPurchase: "18/09/2024",
    },
    members: [
      "https://th.bing.com/th/id/R.e4d8095bccdfe33b5a4dd6192ce5eb8f?rik=rzBUPJQlU7027Q&riu=http%3a%2f%2fimg.zyedu.com%2fphoto%2f2020%2f11%2f7%2f864a6e50-a7cf-4560-aaf3-b09bababf19e.jpg-s&ehk=jaYjJGjKHUKMWVmtUnyaEFZTtkgBlIqSQGC5AS1r9kA%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.d0b2b6f9eb7e55f1145e4db99ea02a5e?rik=czWsdcOKV11b7A&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2019%2f09%2f31475-1.jpg&ehk=ZKmOhi%2bQoYOPnnpgePboFHmGq3i2dSDJWaZfi3RSF2U%3d&risl=&pid=ImgRaw&r=0",
      "https://gd-hbimg.huaban.com/f0c0e16df0ac07821107a805150d1c3c1b77cd6580b1a-vw1pg6_fw658",
      "https://th.bing.com/th/id/R.5b0df32d33805ce513600a15dc4e5439?rik=X%2bes9sAFj7O%2fRQ&riu=http%3a%2f%2fwww.missyuan.net%2fuploads%2fallimg%2f180920%2f1J4351404-0.jpg&ehk=2%2beDW7No1%2bZnOTEv0rNGF6eYyWAA1yY7jnVxseya%2bh8%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.7c7a254d0d3f33edfc19e750d69c9b5c?rik=NkhDJpGjYlshcg&riu=http%3a%2f%2fpic6.nipic.com%2f20100423%2f2988027_104625286440_2.jpg&ehk=KHkTwnhir2zPJrF%2b3%2fniPmfCJLnD64iOWqF0UG1%2fvA0%3d&risl=&pid=ImgRaw&r=0",
    ],
    financials: {
      stock: 72,
      reserved: 28,
      acte: 0,
      gfa: 30,
    },
    etats: ["Verif. Jur.", "PUV Signe", "PC Obt.", "PC Purge", "Cadre VEFA"],
    budgetStudy: "12.448 K",
    margin: "6.7 %",
    marginfees: "654 K",
    honoraires: "5.5 %",
    honorairesfees: "339 K",
    documents: ["CCTP - Menuiseries...", "CCAG - Crystal View..."],
    conversations: ["En discussion, il faut d...", "Bravo pour les pers..."],
  },
  {
    id: 3,
    imageUrl:
      "  https://riviera-realisation.com/cache_img/522683/le-clos-de-valro-perspective.jpeg",
    title: "LECLOS DE VALRO",
    location: "Antibes (06)",
    status: ["Dépôt PC", "Comm.", "DCE/DAO", "En Cours", "Livraison"],
    keyDates: {
      landPurchase: "18/09/2024",
    },
    members: [
      "https://th.bing.com/th/id/R.e4d8095bccdfe33b5a4dd6192ce5eb8f?rik=rzBUPJQlU7027Q&riu=http%3a%2f%2fimg.zyedu.com%2fphoto%2f2020%2f11%2f7%2f864a6e50-a7cf-4560-aaf3-b09bababf19e.jpg-s&ehk=jaYjJGjKHUKMWVmtUnyaEFZTtkgBlIqSQGC5AS1r9kA%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.d0b2b6f9eb7e55f1145e4db99ea02a5e?rik=czWsdcOKV11b7A&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2019%2f09%2f31475-1.jpg&ehk=ZKmOhi%2bQoYOPnnpgePboFHmGq3i2dSDJWaZfi3RSF2U%3d&risl=&pid=ImgRaw&r=0",
      "https://gd-hbimg.huaban.com/f0c0e16df0ac07821107a805150d1c3c1b77cd6580b1a-vw1pg6_fw658",
      "https://th.bing.com/th/id/R.5b0df32d33805ce513600a15dc4e5439?rik=X%2bes9sAFj7O%2fRQ&riu=http%3a%2f%2fwww.missyuan.net%2fuploads%2fallimg%2f180920%2f1J4351404-0.jpg&ehk=2%2beDW7No1%2bZnOTEv0rNGF6eYyWAA1yY7jnVxseya%2bh8%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/R.7c7a254d0d3f33edfc19e750d69c9b5c?rik=NkhDJpGjYlshcg&riu=http%3a%2f%2fpic6.nipic.com%2f20100423%2f2988027_104625286440_2.jpg&ehk=KHkTwnhir2zPJrF%2b3%2fniPmfCJLnD64iOWqF0UG1%2fvA0%3d&risl=&pid=ImgRaw&r=0",
    ],
    financials: {
      stock: 8,
      reserved: 18,
      acte: 74,
    },
    etats: ["Verif. Jur.", "PUV Signe", "PC Obt.", "PC Purge", "Cadre VEFA"],
    budgetStudy: "12.448 K",
    margin: "6.7 %",
    marginfees: "789 K",
    honoraires: "6.2 %",
    honorairesfees: "457 K",
    documents: ["CCTP - Menuiseries...", "CCAG - Crystal View..."],
    conversations: ["En discussion, il faut d...", "Bravo pour les pers..."],
  },
]);
</script>

<style scoped>
.home {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

.heading-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  width: 100%;
}

.heading-bar {
  display: flex;
  text-align: center;
  margin-bottom: 2rem;
}
.sort-button {
  height: 32px;
  text-align: center;
  color: #0056b3;
  border-color: #0056b3;
  padding: 1px 40px;
  margin-bottom: 0.02rem;
  cursor: pointer;
  border-radius: 5px;
}
.sort-button:hover {
  background-color: #6a9bd3;
  color: white;
}

.description {
  color: rgb(57, 56, 56);
  font-size: 1rem;
  margin-left: 0.25rem;
}

.project-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: flex-start;
}
</style>
