<script setup lang="ts">
import calendarIcon from '@/assets/icons/calendar_icon.png';

defineProps<{
  imageSrc: string; // Path to the image
  impactText: string; // Text describing the impact
  buttonText: string; // Text on the button
  onButtonClick: () => void; // Click handler for the button
}>();
</script>

<template>
  <section class="client-impact-section">
    <!-- Image Block -->
    <div class="image-container">
      <img :src="imageSrc" alt="Client Success Story" class="impact-image" />
    </div>

    <!-- Text and Button Block in a Centered Box -->
    <div class="content-container">
      <p class="impact-text">{{ impactText }}</p>
      <button class="schedule-button" @click="onButtonClick">
        <img :src="calendarIcon" alt="Calendar Icon" class="button-icon" />
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Section Layout */
.client-impact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  gap: 1rem;  /*Space between elements */
  position: relative;
}

/* Image Styling */
.image-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.impact-image {
  width: 132%; /* Size relative to container */
}

/* Content Container (Centered Box) */
/* .content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background-color: white; 
  border-radius: 30px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%; 
  max-width: 400px;
  z-index: 2;
} */
.content-container {
  position: absolute; /* Allows positioning relative to the .client-impact-section */
  bottom: -90px; /* Adjust so it overlaps the bottom of the image */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Align center with the image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background-color: white; /* White background for the box */
  border-radius: 30px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 75%; /* Responsive width */
  max-width: 400px; /* Limit box size on larger screens */
  z-index: 2; /* Ensure it's above the image */
}

/* Text Block */
.impact-text {
  font-size: 1rem;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 1rem;
  text-align: center;
}

/* Button Styling */
.schedule-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #c26487; /* Button background */
  border: none;
  border-radius: 30px; /* Pill-shaped button */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.schedule-button:hover {
  background-color: #a5526e;
}

.button-icon {
  width: 20px; /* Icon size */
  height: 20px;
}
</style>
