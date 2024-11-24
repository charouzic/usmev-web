<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonText: string;
  targetSectionId: string; // ID for smooth scrolling
}>();

const playVideo = (targetId: string) => {
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="introduction-section">
    <h1 class="intro-title">{{ title }}</h1>
    <p class="intro-description">{{ description }}</p>
    <div class="intro-button-wrapper">
      <button class="play-circle" @click="playVideo(targetSectionId)">
        <span class="play-icon"></span>
      </button>
      <span class="play-text" @click="playVideo(targetSectionId)">{{ buttonText }}</span>
    </div>
  </section>
</template>

<style scoped>
/* Section styles */
.introduction-section {
  padding-top: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Title styles */
.intro-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2e3e4d; /* Global text color */
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Description styles */
.intro-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

/* Wrapper for button and text */
.intro-button-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between the circle and text */
}

/* Circular button */
.play-circle {
  width: 40px; /* Adjust circle size */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* White button background */
  border: 1px solid #dcdcdc; /* Light border */
  border-radius: 50%; /* Makes the button circular */
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.play-circle:hover {
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Triangle inside circle */
.play-icon {
  width: 15px; /* Smaller triangle */
  height: 15px;
  background-color: #5f67dc; /* Icon color */
  clip-path: polygon(0 0, 100% 50%, 0 100%); /* Triangle shape */
}

/* Text next to the circle */
.play-text {
  font-size: 1rem;
  font-weight: bold;
  color: #2e3e4d;
  cursor: pointer;
  transition: color 0.2s ease;
}

.play-text:hover {
  text-decoration: underline;
}
</style>
