<script setup lang="ts">
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';

// Import the icons
import helpIcon from '@/assets/icons/potrebuji_pomoc_icon.png';
import donateIcon from '@/assets/icons/chci_darovat_icon.png';

const onHelpClick = () => {
  console.log('Navigate to the "Potřebuji pomoc" page');
  // Add navigation logic here
};

const onDonateClick = () => {
  console.log('Navigate to the "Chci darovat" page');
  // Add navigation logic here
};
</script>

<template>
  <Header />

  <main class="main">
    <Button
      variant="primary"
      label="Potřebuji pomoc"
      :icon="helpIcon"
      @click="onHelpClick"
    />

    <Button
      variant="secondary"
      label="Chci darovat"
      :icon="donateIcon"
      @click="onDonateClick"
    />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  background-color: #f5f5f5; /*  Light background color for contrast */
}
</style>
