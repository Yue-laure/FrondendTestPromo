<template>
  <aside class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img
          src="@/assets/img/logo-riviera-baseline.png"
          alt="RIVIERA REALISATION"
        />
      </router-link>
    </div>

    <nav>
      <ul class="menu">
        <li><router-link to="/accueil">Accueil - Mes tâches</router-link></li>
        <li><router-link to="/recherche">Recherche Générale</router-link></li>
        <li><router-link to="/foncier">Foncier</router-link></li>
        <li><router-link to="/Operationnel">Opérationnel</router-link></li>
        <li>
          <router-link to="/gestion-documentaire"
            >Gestion Documentaire</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="spacer"></div>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/promo_logo.png" alt="Promo+ logo" />
      </router-link>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
.sidebar {
  position: relative;
  flex-direction: column;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  min-height: 500px;
}

.logo img {
  max-width: 100%;
  margin-bottom: 2rem;
}

.logo:last-child img {
  position: absolute;
  padding: 2rem 2rem 0rem 0.2rem;
  bottom: 0;
}

.menu {
  list-style: none;
  padding: 0;
  flex-grow: 1;
}

.menu li {
  margin-bottom: 1rem;
}

.menu li a {
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
  color: white;
}
.menu li.router-link:hover {
  color: #ffd700;
}

.menu li.router-link-active {
  color: #57726c;
  font-weight: bold;
}
</style>
