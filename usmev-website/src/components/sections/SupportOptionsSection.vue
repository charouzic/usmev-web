<script setup lang="ts">
defineProps<{
  title: string;
  description: string[];
  options: { image: string; text: string }[];
}>();
</script>

<template>
  <section class="support-options-section">
    <div class="content">
      <h1 class="heading">
        <span class="decorative-element-top"></span>
        {{ title }}
      </h1>
      <div class="description-wrapper">
        <span class="decorative-element-description"></span>
        <p v-for="line in description" :key="line" class="description">{{ line }}</p>
      </div>
      <div class="options-container">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="option-card"
        >
          <img :src="option.image" alt="" class="option-image" />
          <p class="option-text">{{ option.text }}</p>
        </div>
      </div>
    </div>
    <span class="decorative-element-bottom"></span>
  </section>
</template>

<style scoped>
/* Section Styling */
.support-options-section {
  margin-top: 50px;
  padding: 1.5rem 1rem;
  text-align: center;
  position: relative; /* Needed for absolute positioning of decorative elements */
}

/* Content Styling */
.content {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.heading {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2e3e4d;
  margin-bottom: 1rem;
  text-align: left;
  position: relative;
}

.heading .decorative-element-top {
  position: absolute;
  top: -30px;
  left: -50px;
  width: 80px;
  height: 80px;
  background: url('@/assets/icons/nejste_na_to_sami_decor.svg') no-repeat center;
  background-size: contain;
  z-index: -1;
}

/* Description Wrapper */
.description-wrapper {
  position: relative; /* Needed for decorative element behind it */
}

.description-wrapper .decorative-element-description {
  position: absolute;
  top: 180px; /* Adjust as needed */
  right: -48px; /* Adjust as needed */
  width: 200px;
  height: 200px;
  background: url('@/assets/icons/nejste_na_to_sami_decor_description.svg') no-repeat center;
  background-size: contain;
  z-index: -1; /* Send behind the description */
}

/* Bottom Decorative Element */
.decorative-element-bottom {
  position: absolute;
  bottom: -10px; /* Adjust as needed to place below the section */
  right: -30px; /* Adjust as needed */
  width: 250px;
  height: 250px;
  background: url('@/assets/icons/nejste_na_to_sami_decor_bottom_decor.svg') no-repeat center;
  background-size: contain;
  z-index: -1;
}

/* Description Styling */
.description {
  font-size: 0.88rem;
  text-align: left;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

/* Options Container */
.options-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 1rem;
  align-items: center;
}

/* Option Card */
.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 14rem;
}

.option-image {
  width: 110px;
  height: 110px;
  margin-bottom: 0.8rem;
}

.option-text {
  font-size: 1.1rem;
  font-weight: bold;
  color: #4a4a4a;
}
</style>
