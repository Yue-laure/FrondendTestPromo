<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Sidebar from "@/components/PromoSidebar.vue";
</script>

<template>
  <div class="layout">
    <Sidebar class="layout-sidebar" />
    <div class="layout-content">
      <NavBar class="layout-navbar" />
      <Router-View class="main-content" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  width: 100%;
}

.layout-sidebar {
  width: 250px;
}

.layout-content {
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.layout-navbar {
  padding: 0 20px;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
.main-content {
  overflow-y: auto; /* Défilement lorsqu'il y a trop de contenu  */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start; 
}
</style>
