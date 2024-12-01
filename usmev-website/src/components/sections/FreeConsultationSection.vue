<script setup lang="ts">
defineProps<{
  subHeading: string;
  time: string;
  phone: string;
  note: string;
}>();
</script>

<template>
  <section class="consultation-section">
    <div class="content">
      <h1 class="heading">
        <span class="decorative-element"></span>
        Konzultace <span class="highlight">zdarma</span>
      </h1>
      <p class="sub-heading">{{ subHeading }} {{ time }}</p>
      <a :href="`tel:${phone}`" class="phone">{{ phone }}</a>
      <p class="note">{{ note }}</p>
    </div>
  </section>
</template>

<style scoped>
/* Section Container */
.consultation-section {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  text-align: center;
  position: relative;
}

/* Content Wrapper */
.content {
  width: 100%;
  max-width: 320px; /* Center and limit width for mobile */
  position: relative;
}

/* Heading Styling */
.heading {
  font-size: 1.4rem;
  color: #2e3e4d;
  position: relative; /* Position needed for the decorative element */
}

.heading .highlight {
  font-weight: bold;
  color: #5f67dc; /* Highlight color for "zdarma" */
}

/* Decorative Element (Visible Behind Text) */
.heading .decorative-element {
  position: absolute;
  top: 0;
  left: -30px; /* Adjust as needed */
  width: 100px; /* Adjust size */
  height: 90px;
  background: url('@/assets/icons/konzultace_decor.svg') no-repeat center;
  background-size: contain;
  z-index: -1; /* Send behind the text */
  opacity: 1; /* Adjust for visibility */
}

/* Subheading Styling */
.sub-heading {
  font-size: 1.4rem;
  color: #2e3e4d;
  margin-bottom: 1rem;
}

/* Phone Number Styling */
.phone {
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  color: #2e3e4d;
  text-decoration: none;
  margin: 1rem 0;
  position: relative;
}

/* Add decorative element to the phone number */
.phone::after {
  content: '';
  position: absolute;
  right: -30px;
  top: -40px;
  width: 100px;
  height: 100px;
  background: url('@/assets/icons/phone_decor.svg') no-repeat center;
  background-size: contain;
}

/* Note Styling */
.note {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #4a4a4a;
}
</style>
