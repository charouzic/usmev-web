<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Button from '@/components/common/Button.vue';
import IntroductionSection from '@/components/sections/IntroductionSection.vue';
import ClientImpactSection from '@/components/sections/ClientImpactSection.vue';

// Import the icons
import helpIcon from '@/assets/icons/potrebuji_pomoc_icon.png';
import donateIcon from '@/assets/icons/chci_darovat_icon.png';
import clientSuccessImage from '@/assets/images/pomohli_jsme.png';

// Props for the sections

const introductionProps = {
  title: "Nadační fond věnovaný všem, jejichž úsměv zmizel v důsledku onkologického onemocnění.",
  description:
    "Naše stránky Vám pomohou zorientovat se v nelehké situaci způsobené onkologickým onemocněním. Naleznete zde odpovědi na mnoho přirozených otázek, informace o nemoci a jejím průběhu, včetně praktických rad, jak s nemocí žít. Zaměřujeme se na předání zkušeností, doporučení a kontaktů pro zajištění kvality života a chodu rodiny v průběhu léčby.",
  buttonText: "Přehrát video: Náš příběh",
  targetSectionId: "video-section",
};

const clientImpactProps = {
  imageSrc: clientSuccessImage,
  impactText: "Pomohli jsme již více než 300 klientům",
  buttonText: "Sjednat schůzku",
  onButtonClick: () => {
    console.log("Navigate to schedule page or open a modal.");
  },
};

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
    

    <IntroductionSection v-bind="introductionProps" />
    <ClientImpactSection v-bind="clientImpactProps" />
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
