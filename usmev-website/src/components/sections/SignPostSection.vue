<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

// Props for cards
const props = defineProps<{
  title: string;
  subHeading: string;
  helpText: string;
  contactLink: string;
  cards: {
    id: number;
    title: string;
    description: string;
    details: {
      label: string;
      url: string;
    }[];
    image: string;
  }[];
}>();

// Initialize the expanded state for cards
const expandedState = ref<Record<number, boolean>>(
  props.cards.reduce((state, card) => {
    state[card.id] = false; // All cards start as not expanded
    return state;
  }, {} as Record<number, boolean>)
);

// Redirect to the URL
const redirectToDetail = (url: string) => {
  if (url) {
    window.location.href = url; // Redirect to the specified URL
  } else {
    console.log('No URL specified for this detail.');
  }
};

// Watch for changes in the cards prop to reinitialize expandedState
watch(
  () => props.cards,
  (newCards) => {
    expandedState.value = newCards.reduce((state, card) => {
      state[card.id] = false; // All cards start as not expanded
      return state;
    }, {} as Record<number, boolean>);
  },
  { immediate: true } // Ensure it runs on component load
);

// Toggle the state of a card
const toggleCard = (id: number) => {
  expandedState.value[id] = !expandedState.value[id];
};
</script>

<template>
  <section class="faq-section">
    <div class="content">
      <h1 class="heading"> {{ title }}</h1>
      <p class="subheading">
        {{ subHeading }}
      </p>
      <p class="help-link">
        {{ helpText }} <a href="#"> {{ contactLink }}</a>
      </p>
    </div>

    <div class="cards">
      <div
        v-for="card in props.cards"
        :key="card.id"
        class="card"
        :class="{ expanded: expandedState[card.id] }"
      >
        <div class="card-content">
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-description">{{ card.description }}</p>
          <img :src="card.image" alt="Card Icon" class="card-image" />
          <button class="info-button">Více informací</button>
        </div>

        <!-- Expanded Content -->
        <div class="card-details" v-if="expandedState[card.id]">
          <div class="pill-container">
            <button
              v-for="detail in card.details"
              :key="detail.label"
              class="pill-button"
              @click="redirectToDetail(detail.url)"
            >
              {{ detail.label }}
            </button>
          </div>
        </div>

        <!-- Toggle Button -->
        <button class="toggle-button" @click="toggleCard(card.id)">
          <span v-if="expandedState[card.id]">▲</span>
          <span v-else>▼</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Styling */
.faq-section {
  padding: 1.5rem 1rem;
}

.content {
  text-align: center;
  margin-bottom: 2rem;
}

.heading {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2e3e4d;
  margin-bottom: 0.5rem;
}

.subheading {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.help-link {
  font-size: 0.9rem;
  color: #2e3e4d;
}

.help-link a {
  color: #5f67dc;
  text-decoration: underline;
}

/* Cards Styling */
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  transition: transform 0.3s;
}

.card.expanded {
  transform: translateY(-5px);
  background-color: #F1F4F8;
}

.card-content {
  text-align: center; /* Align everything in the center */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align image and content */
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #2e3e4d;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.card-image {
  width: 80px; /* Adjust as necessary */
  height: 80px; /* Adjust as necessary */
  margin: 1rem 0; /* Add space above and below */
}

.info-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #5f67dc;
  background: transparent;
  border: 2px solid #5f67dc;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.info-button:hover {
  background-color: #5f67dc;
  color: #ffffff;
}

/* Pill Buttons for Expanded Details */
.pill-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: left;
}

.pill-button {
  border: 2px solid #F1F4F8;
  padding: 0.4rem 0.8rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
}

.pill-button:hover {
  background-color: #5f67dc;
  color: #ffffff;
}

/* Expanded Content */
.card-details {
  margin-top: 2rem;
}

.card-details ul {
  padding: 0;
  list-style: none;
}

/* Toggle Button */
.toggle-button {
  position: relative; /* Relative to avoid overlap */
  margin-top: 1rem; /* Add spacing below "Více informací" */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #2e3e4d;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Ensure it spans full width for centering */
}
</style>
