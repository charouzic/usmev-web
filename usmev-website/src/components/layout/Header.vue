<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo.png';


const isMenuOpen = ref(false); // State to track menu visibility

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // Toggle the menu
};
</script>

<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <button class="menu-btn" @click="toggleMenu">☰</button>

    <!-- Menu that toggles visibility -->
    <nav v-if="isMenuOpen" class="menu">
      <ul>
        <li><a href="#">ÚVOD</a></li>
        <li><a href="#">PRO PACIENTY</a></li>
        <li><a href="#">PRO DÁRCE</a></li>
        <li><a href="#">O NÁS</a></li>
        <li><a href="#">KONTAKT</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  /* background: #f8f9fa; */
  font-size: 1rem;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 60px; /* Adjust size as needed */
  height: 70px;
  margin-right: 0.5rem;
}

.menu-btn {
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 100%;
  right: 1rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 200px;
  padding: 1rem;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 0.5rem;
}

.menu li:last-child {
  margin-bottom: 0;
}

.menu a {
  text-decoration: none;
  color: #2E3E4D; /* Global text color */
  font-weight: 500;
}

.menu a:hover {
  text-decoration: underline;
}
</style>
