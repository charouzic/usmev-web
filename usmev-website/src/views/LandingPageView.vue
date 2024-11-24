<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Button from '@/components/common/Button.vue';
import IntroductionSection from '@/components/sections/IntroductionSection.vue';

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

const targetVideoSectionId = ''; // ID of the section with the video

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

    <IntroductionSection
      title="Nadační fond věnovaný všem, jejichž úsměv zmizel v důsledku onkologického onemocnění."
      description="Naše stránky Vám pomohou zorientovat se v nelehké situaci způsobené onkologickým onemocněním. Naleznete zde odpovědi na mnoho přirozených otázek, informace o nemoci a jejím průběhu, včetně praktických rad, jak s nemocí žít. Zaměřujeme se na předání zkušeností, doporučení a kontaktů pro zajištění kvality života a chodu rodiny v průběhu léčby."
      buttonText="Přehrát video: Náš příběh"
      :targetSectionId="targetVideoSectionId"
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
}
</style>
