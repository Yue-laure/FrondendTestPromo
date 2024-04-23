<template>
  <nav class="navbar">
    <!-- search -->
    <div class="search-container">
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <i class="bi bi-search"></i>
      </button>
    </div>

    <!-- announce -->
    <div class="announce-bell">
      <i class="bi bi-bell"></i>
    </div>

    <!-- user info -->
    <div class="user-info">
      <!-- avatar and name -->
      <img
        src="@/assets/img/user-avatar.jpg"
        alt="User Avatar"
        class="user-avatar"
      />
      <span class="username">Amelia Stone</span>
    </div>

    <!-- user role -->
    <div class="user-details">
      <span class="role">Maitre d'oeuvre</span>
    </div>
  </nav>
</template>

<script setup>
// Script setup area
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-container {
  display: flex;
  margin-right: 0.05rem;
}
.search-container input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.search-container button {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
}

.bi-search,
.bi-bell {
  font-size: 1.25rem; /* size icon */
}
.announce-bell {
  margin-right: 1rem;
  cursor: pointer;
}
.user-info {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.user-avatar {
  width: 30px; /* Adjust the size as needed */
  height: 30px; /* Adjust the size as needed */
  margin: 0.5rem;
}
.username {
  font-size: 0.75rem;
  margin-right: 0.05rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.role {
  font-size: 0.8rem;
  color: #4d4d4d;
  font-weight: bold;
}
</style>
