<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  
  // Define props
  const props = defineProps<{
    title: string;
    subtitle: string;
    linkText: string;
    linkUrl: string;
    faqs: {
      id: number;
      question: string;
      answer: string;
    }[];
    buttonText: string;
    buttonLink: string;
  }>();
  
  // Manage expanded FAQ state
  const expanded = ref<Record<number, boolean>>({});
  
  // Toggle FAQ visibility
  const toggleFAQ = (id: number) => {
    expanded.value[id] = !expanded.value[id];
  };
  </script>

<template>
    <section class="faq-section">
      <!-- Section Title -->
      <div class="faq-header">
        <h1>{{ title }}</h1>
        <span class="decorative-element"></span>
        <p>{{ subtitle }} <a :href="linkUrl">{{ linkText }}</a></p>
      </div>
  
      <!-- FAQ List -->
      <div class="faq-list">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="faq-item"
          @click="toggleFAQ(faq.id)"
        >
          <div class="faq-question">
            <h3>{{ faq.question }}</h3>
            <span class="toggle-icon">
              {{ expanded[faq.id] ? '−' : '+' }}
            </span>
          </div>
          <div class="faq-answer" v-if="expanded[faq.id]">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
        <!-- Button -->
        <div class="faq-footer">
            <a :href="buttonLink" class="faq-button">{{ buttonText }}</a>
        </div>
      </div>
    </section>
  </template>
  
  
  
  
<style scoped>
.faq-section {
  padding: 1.5rem 1rem;
  background-color: #f4f9ff;
  margin: 0; /* Remove margin */
  width: 100vw; /* Full viewport width */
  position: relative; /* Ensure it's properly aligned */
  border-radius:  0 0 50px 0;
}

.faq-header {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2e3e4d;
  position: relative; /* Make this the positioning context */
}

.faq-header h1 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.decorative-element {
  position: absolute;
  top: -20px; /* Align it with the top of the h1 */
  right: 30px; /* Position it to the right side */
  width: 70px; /* Adjust size */
  height: 70px; /* Adjust size */
  background: url('@/assets/icons/phone_decor.png') no-repeat center;
  background-size: contain;
  z-index: 2; /* Ensure it stays behind the text */
  opacity: 1; /* Adjust visibility as needed */
}

.faq-header a {
  color: #5f67dc;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  border-radius: 40px;
  padding: 0 1rem;
}

.faq-item {
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: #2e3e4d;
  border-bottom: 1px solid #e0e4e9;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: left;
  font-size: 0.9rem;
  font-weight: bolder;
  color: #2e3e4d;
}

.faq-question h3{
  display: flex;
  align-items: left;
  font-weight:600;
  color: #2e3e4d;
  padding-right: 6px;
}

.toggle-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Prevent shrinking */
  width: 25px; /* Fixed width */
  height: 25px; /* Fixed height */
  border: 2px solid #4752b6; /* Circle border */
  border-radius: 50%; /* Ensures it's a perfect circle */
  color: #4752b6; /* Text color */
  font-size: 1rem; /* Icon size */
  font-weight: bold;
  line-height: 1; /* Ensures text doesn't stretch the circle */
  text-align: center;
  padding: 0; /* Remove any padding */
  margin: 0; /* Remove any margin */
  box-sizing: border-box; /* Ensures border does not affect size */
}

.faq-answer {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #4a4a4a;
}

.faq-footer {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 30px;
}

.faq-button {
  display: inline-block;
  color: #4752b6;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #4752b6;
  transition: background-color 0.3s, color 0.3s;
}

.faq-button:hover {
  background-color: #4752b6;
  color: #ffffff;
}

</style>
  