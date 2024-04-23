<template>
  <div class="project-card-item">
    <!-- header :titre image -->
    <div class="card-header">
      <h2 class="project-title">
        {{ project.title }}<br />{{ project.location }}
      </h2>
      <img :src="project.imageUrl" alt="Project Image" class="project-image" />
    </div>
    <!-- card-body -->
    <div class="card-body">
      <!-- 1 status -->
      <div class="status-container">
        <span
          class="status"
          :class="{
            'status-depot-pc': status === 'Dépôt PC',
            'status-comm': status === 'Comm.',
            'status-dceao': status === 'DCE/DAO',
            'status-en-cours': status === 'En Cours',
            'status-livraison': status === 'Livraison',
          }"
          v-for="status in project.status"
          :key="status"
          >{{ status }}</span
        >
      </div>
      <!-- 2 landPurchase -->
      <div class="landPurchase">
        <h4>Achat terrain le {{ project.keyDates.landPurchase }}</h4>
      </div>
      <!-- 3 member -->
      <hr class="divider" />
      <div class="member-acteur">
        <span class="member" v-for="member in project.members" :key="member">
          <img :src="member" alt="member Image" class="member-image" />
        </span>
      </div>
      <!-- 4 etats -->
      <hr class="divider" />
      <div class="etats-container">
        <span class="etats" v-for="etat in project.etats" :key="etat">{{
          etat
        }}</span>
      </div>
      <hr class="divider" />
      <!-- 5 financials -->
      <div class="financials">
        <canvas :id="canvasId" class="financials-chart"></canvas>
        <div class="financials-datacontainner">
          <div><strong>STOCK:</strong></div>
          <div><strong>RESERVED:</strong></div>
          <div><strong>ACTE:</strong></div>
          <div v-if="typeof project.financials.gfa !== 'undefined'">
            <strong>GFA:</strong>
          </div>
        </div>
        <div class="financials-data">
          <div>{{ project.financials.stock }}%</div>
          <div>{{ project.financials.reserved }}%</div>
          <div>{{ project.financials.acte }}%</div>
          <div v-if="typeof project.financials.gfa !== 'undefined'">
            {{ project.financials.gfa }}%
          </div>
        </div>
      </div>

      <!-- 6 budget -->
      <hr class="divider" />
      <div class="budget">
        <h4>Budget Study<br />{{ project.budgetStudy }}</h4>
        <h4>Margin<br />{{ project.margin }}<br />{{ project.marginfees }}</h4>
        <h4>
          Honoraires<br />{{ project.honoraires }}<br />{{
            project.honorairesfees
          }}
        </h4>
      </div>
    </div>
    <!-- 7 card-footer -->
    <hr class="divider" />
    <div class="card-footer">
      <ul class="documents">
        <h4>Documents</h4>
        <li v-for="document in project.documents" :key="document">
          {{ document }}
        </li>
      </ul>
      <ul class="conversations">
        <h4>Conversations</h4>
        <li v-for="conversation in project.conversations" :key="conversation">
          {{ conversation }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
import Chart from "chart.js/auto";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
// ref creer un variable canvasId
const canvasId = ref(`financialsChart-${props.project.id}`);
onMounted(() => {
  const ctx = document.getElementById(canvasId.value).getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      // labels: ["STOCK", "RESERVED", "ACTE"],
      datasets: [
        {
          // label: "Financials",
          data: [
            props.project.financials.stock,
            props.project.financials.reserved,
            props.project.financials.acte,
          ],
          backgroundColor: ["Red", "Orange", "Green"],
          borderColor: ["Gray", "Gray", "Gray"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
    },
  });
});
// console.log(props.project.financials.stock)
</script>

<style scoped>
.project-card-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
  margin: 1rem;
  width: 300px; /* or 100% if you want it to be full width */
}

.card-header {
  padding: 0.5rem;
}

.project-image {
  width: 100%;
  object-fit: cover;
  height: 150px; /* Adjust the height as needed */
}

.project-title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.project-location {
  font-size: 1rem;
  color: grey;
}

.card-body {
  padding: 0.5rem;
}

/* 1 status */
.status-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  justify-content: space-between;
}
.status {
  color: white;
  padding: 8px 8px;
  border-radius: 25%;
  font-size: 8px;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  max-width: 50px;
}
.status-depot-pc {
  background-color: #007bff;
}
.status-comm {
  background-color: #303096;
}
.status-dceao {
  background-color: #6692be;
}
.status-en-cours {
  background-color: #5a5a5a;
}
.status-livraison {
  background-color: #898781;
}
/* 2 landPurchase */
.landPurchase {
  text-align: center;
}
/* 3 member */
.member-acteur {
  justify-content: space-between;
  display: flex;
}
.member-image {
  margin: 0.2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
/* 4 etats */
.etats-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  justify-content: space-between;
}
.etats {
  display: inline-flex;
  justify-content: center;
  background-color: rgb(74, 59, 152);
  color: white;
  padding: 20px 20px;
  border-radius: 50%;
  font-size: 0.6rem;
  max-height: 50px;
  max-width: 50px;
  white-space: normal;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 5px;
}
/* 5 financials */
.financials-chart {
  max-width: 90px;
  max-height: 90px;
}
.financials-chart-container {
  max-width: 300px;
  margin: auto;
}
.financials {
  display: flex;
  justify-content: space-between;
}
.financials-datacontainner div {
  margin: 0;
  text-align: left;
  justify-content: center;
}
.financials-datacontainner div {
  color: inherit; /* Icon will inherit color from the parent */
}
.financials-datacontainner > div:first-child {
  color: red;
}
.financials-datacontainner > div:nth-child(2) {
  color: orange;
}
.financials-datacontainner > div:nth-child(3) {
  color: green;
}
.financials-datacontainner > div:nth-child(4) {
  color: gray;
}
.financials-data{
  text-align: end;
}
/* 6 budget  */
.budget {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.budget h4 {
  font-weight: 500;
}
/* 7 card-footer  */
.card-footer {
  background-color: #f4f4f4;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.card-footer h4 {
  text-align: left;
  font-weight: 500;
}
.documents,
.conversations {
  list-style-type: none;
  font-size: smaller;
  padding: 5px;
  margin: 0;
}
</style>
