<script setup lang="ts">
import { ref } from 'vue';

// Props
defineProps<{
  title: string;
  description: string;
  buttonText: string;
  videoId: string; // YouTube video ID
}>();

// State for toggling video play
const isVideoPlaying = ref(false);

const playVideo = () => {
  isVideoPlaying.value = true;
};
</script>

<template>
  <section class="story-section">
    <div class="content">
      <h1 class="heading">{{ title }}</h1>

      <!-- Decorative Element -->
      <div class="decorative-icon"></div>

      <p class="description">{{ description }}</p>

      <!-- Play Button -->
      <button class="play-button" v-if="!isVideoPlaying" @click="playVideo">
        {{ buttonText }}
      </button>

      <!-- Video -->
      <div
        class="video-container"
        :class="{ clickable: !isVideoPlaying }"
        @click="!isVideoPlaying && playVideo"
      >
        <iframe
          :src="`https://www.youtube.com/embed/${videoId}?autoplay=${isVideoPlaying ? 1 : 0}&rel=0&modestbranding=1`"
          frameborder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowfullscreen
          class="video-frame"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Styling */
.story-section {
  padding: 1.5rem 1rem;
  text-align: center;
}

/* Content Wrapper */
.content {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  text-align: left;
  position: relative; /* Enable positioning for child elements */
}

/* Heading */
.heading {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2e3e4d;
  margin-bottom: 1rem;
  text-align: left;
}

/* Decorative Icon */
.decorative-icon {
  position: absolute;
  top: 160px; /* Adjust to position relative to description */
  right: -35px; /* Slightly to the left for a design offset */
  width: 180px;
  height: 180px;
  background: url('@/assets/icons/video_decor.svg') no-repeat center;
  background-size: contain;
  z-index: 0; /* Place behind text */
  pointer-events: none; /* Prevent interaction */
}

/* Description */
.description {
  font-size: 0.88rem;
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative; /* Ensure stacking over decor */
  z-index: 1;
}

/* Play Button */
.play-button {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  background-color: #5f67dc;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #4954b8;
}

/* Video Container */
.video-container {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 1rem auto;
  overflow: hidden;
  border-radius: 20px;
  aspect-ratio: 16 / 9; /* Maintain 16:9 ratio */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.video-container.clickable {
  cursor: pointer; /* Show pointer only when the video is not playing */
}

/* Video Frame */
.video-frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
