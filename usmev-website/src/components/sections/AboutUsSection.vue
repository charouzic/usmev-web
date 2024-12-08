<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  description1: string;
  description2: string;
  signatureImage: string; // Signature as an image
  image: string;
  buttonText: string;
  buttonLink: string;
}>();

// Method to handle button click
const redirectToLink = () => {
  window.location.href = props.buttonLink;
};
</script>

<template>
  <section class="about-section">
    <div class="content">
      <h1 class="heading">{{ title }}</h1>
      <p class="description">
        {{ description1 }} 
      </p>
      <p class="description">
        {{ description2 }} 
      </p>
      <div class="signature-container">
        <img :src="signatureImage" alt="Signature" class="signature-image" />
      </div>
    </div>

    <div class="image-container">
      <img :src="image" alt="About Us" class="about-image" />
    </div>

    <div class="button-container">
      <button class="action-button" @click="redirectToLink">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Section Styling */
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  text-align: center;
  background-color: #ffffff;
}

.heading {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2e3e4d;
  margin-bottom: 1rem;
  text-align: left;
}

.description {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  text-align: left;
}

.signature-container {
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;
}

.signature-image {
  height: auto;
  width: 250px;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.about-image {
  width: 250px;
  height: 220px;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.action-button {
  background-color: #5f67dc;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.action-button:hover {
  background-color: #4752b6;
  transform: scale(1.05);
}
</style>
