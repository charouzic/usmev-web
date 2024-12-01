<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Button from '@/components/common/Button.vue';
import IntroductionSection from '@/components/sections/IntroductionSection.vue';
import ClientImpactSection from '@/components/sections/ClientImpactSection.vue';
import FreeConsultationSection from '@/components/sections/FreeConsultationSection.vue';
import SupportOptionsSection from '@/components/sections/SupportOptionsSection.vue';
import StorySection from '@/components/sections/StorySection.vue';

// Import the icons
import helpIcon from '@/assets/icons/potrebuji_pomoc_icon.png';
import donateIcon from '@/assets/icons/chci_darovat_icon.png';
import clientSuccessImage from '@/assets/images/pomohli_jsme.png';
import optionImage1 from '@/assets/icons/orientace_icon.svg';
import optionImage2 from '@/assets/icons/odbornici_icon.svg';
import optionImage3 from '@/assets/icons/sluzby_icon.svg';
import optionImage4 from '@/assets/icons/prosli_icon.svg';

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

const freeConsultationProps = {
  heading: "Konzultace zdarma",
  subHeading: "každý den",
  time: "9:00 - 18:00",
  phone: "+420 739 360 498",
  note: "V případě, že se nám nedovoláte, zavoláme vám zpět hned, jak to bude možné.",
};

const supportOptionsProps = {
  title: "Nejste na to sami",
  description: [
    "Nabízíme kvalitní informace a otevřené srdce.",
    "Nabízíme prostor k hovoru i společnému mlčení.",
    "Budeme trpělivě naslouchat.",
    "Poskytneme svůj čas.",
    "Pomůžeme utřídit si myšlenky a potřeby.",
  ],
  options: [
    {
      image: optionImage1,
      text: "Pomůžeme s orientací v situaci",
    },
    {
      image: optionImage2,
      text: "Spojíme vás s relevantními odborníky",
    },
    {
      image: optionImage3,
      text: "Veškeré služby poskytujeme zdarma",
    },
    {
      image: optionImage4,
      text: "Sami jsme si tím prošli",
    },
  ],
};

const onHelpClick = () => {
  console.log('Navigate to the "Potřebuji pomoc" page');
};

const onDonateClick = () => {
  console.log('Navigate to the "Chci darovat" page');
};

const storyProps = {
  title: "Taky jsme si tím prošli. Pusťte si příběh našeho syna",
  description: "Děkujeme nadačnímu fondu Lidé lidem za zprostředkování a tvorbu videa. Děkujeme Tomášovi Klusovi za propůjčení jeho hlasu a citlivý přístup.",
  buttonText: "Přehrát video",
  videoId: "PG_1MlYM5po",
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
    <FreeConsultationSection v-bind="freeConsultationProps" />
    <SupportOptionsSection v-bind="supportOptionsProps" />
    <StorySection v-bind="storyProps" />
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

