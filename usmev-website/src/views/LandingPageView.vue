<script setup lang="ts">
// Import the individual components and sections
import Header from '@/components/layout/Header.vue';
import Button from '@/components/common/Button.vue';
import IntroductionSection from '@/components/sections/IntroductionSection.vue';
import ClientImpactSection from '@/components/sections/ClientImpactSection.vue';
import FreeConsultationSection from '@/components/sections/FreeConsultationSection.vue';
import SupportOptionsSection from '@/components/sections/SupportOptionsSection.vue';
import StorySection from '@/components/sections/StorySection.vue';
import SignPostSection from '@/components/sections/SignPostSection.vue';
import AboutUsSection from '@/components/sections/AboutUsSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';


// Import the icons
import helpIcon from '@/assets/icons/potrebuji_pomoc_icon.png';
import donateIcon from '@/assets/icons/chci_darovat_icon.png';
import clientSuccessImage from '@/assets/images/pomohli_jsme.png';
import optionImage1 from '@/assets/icons/orientace_icon.svg';
import optionImage2 from '@/assets/icons/odbornici_icon.svg';
import optionImage3 from '@/assets/icons/sluzby_icon.svg';
import optionImage4 from '@/assets/icons/prosli_icon.svg';
import tiziIcon from '@/assets/icons/tizi_icon.svg';
import cekaIcon from '@/assets/icons/ceka_icon.svg';
import zivotIcon from '@/assets/icons/zivot_icon.svg';
import aboutUsImage from '@/assets/images/about_us.svg';
import signatureImage from '@/assets/icons/signature.svg';

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

const signPostProps = {
  title: "Vyberte, co vás zajímá",
  subHeading:
    "Zde najdete rozcestník veškerých důležitých informací, které koncentrujeme u nás na webu.",
  helpText: "Nenašli jste, co jste potřebovali?",
  contactLink: "Kontaktujte nás.",
  cards: [
    {
      id: 1,
      title: "Co mě tíží?",
      description:
        "Ať už jste pacient nebo jeho blízký, na vaší cestě se budete setkávat s mnoha informacemi, kterým nemusíte vždy plně rozumět. S lepším porozuměním vám mohou pomoci texty a odkazy níže.",
        details: [
        { label: "Slovník důležitých pojmů", url: "/slovnik" },
        { label: "Druhy nádorů a jejich popis", url: "/druhy-nadoru" },
        { label: "Léčba a její stádia", url: "/stadia-lecby" },
        { label: "Práva a možnosti pacientů", url: "/prava-a-moznosti" },
      ],
      image: tiziIcon
    },
    {
      id: 2,
      title: "Co mě čeká?",
      description:
        "Otázky, na které budete hledat odpovědi, nemusí být jen ze zdravotní oblasti, ale například z oblasti sociální, ekonomické nebo jiné.",
        details: [
        { label: "Komunikace situace", url: "/komunikace" },
        { label: "Léčby, kontroly, odběry", url: "/lecba" },
        { label: "Sociální podpora nemocných", url: "/socialni-podpora" },
        { label: "Diagnóza, léčba, následky", url: "/diagnoza" },
      ],
      image: cekaIcon
    },
    {
      id: 3,
      title: "Jak dál žít",
      description:
        "Úroveň psychické pohody pacienta i okolí se odráží na zdravotním stavu nemocného. Pro zachování zdravého rozumu je důležité dodržovat psychickou i fyzickou hygienu.",
      details: [
        { label: "Nejste na to sami", url: "/nejste-sami" }, 
        { label: "Udržujte své mentální zdraví", url: "/mentalni-zdravi" },
        { label: "Péče o tělo", url: "/pece" },
        { label: "Nemocí život nekončí", url: "/zivot-nekonci" },
      ],
      image: zivotIcon
    },
  ],
};

const aboutUsProps = {
  title: 'O nás',
  description1:
    'Nadační fond založili manželé Abelovi na základě vlastní trpké zkušenosti s osteosarkomem u jejich syna Kryštofa. Při boji o záchranu synova života sami zjistili, jak nekoordinovaná je nelékařská pomoc — od psychické až po ekonomickou.',
  description2: 
    'Jsme tu proto, abychom se pokusili provést vás touto nelehkou cestou a podělili se s vámi o naše obsáhlé zkušenosti.',
  signatureImage: signatureImage,
  image: aboutUsImage,
  buttonText: 'Náš příběh',
  buttonLink: '/about-us', // Replace with the correct link
};

const faqProps = {
  title: "Nejčastější dotazy",
  subtitle: "Máte dotaz?",
  linkText: "Pomůžeme vám.",
  linkUrl: "/contact",
  faqs: [
    {
      id: 1,
      question: "Jak zajistit žádanku na sanitku - kdo ji vypíše?",
      answer:
        "Zdravotní přeprava nemocného je hrazena zdravotní službou výhradně v případě, že zdravotní stav pojištěnce neumožňuje přepravu běžným způsobem bez použití zdravotnické dopravní služby (sanitky). Odůvodnění pro přepravu musí být tedy konkrétně popsána.",
    },
    {
      id: 2,
      question: "Co znamená druhý názor?",
      answer:
        "Druhý názor znamená možnost požádat jiného odborníka o posouzení diagnózy nebo návrhu léčby.",
    },
    {
      id: 3,
      question: "Jak získat správné informace o pracovištích, kde se rakovina léčí?",
      answer:
        "Správné informace o lékařských pracovištích najdete v doporučeních od lékařů, specializovaných centrech a online zdrojích.",
    },
  ],
  buttonText: "Zobrazit více",
  buttonLink: "/faqs",
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
    <SignPostSection v-bind="signPostProps" />
    <AboutUsSection v-bind="aboutUsProps" />
    <FAQSection v-bind="faqProps" />
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

