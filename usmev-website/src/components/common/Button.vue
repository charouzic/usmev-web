<script setup lang="ts">
defineProps<{
  variant: 'primary' | 'secondary';
  label: string;
  icon?: string; // Optional prop for the icon (path or class name)
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button :class="`btn btn--${variant}`" @click="$emit('click')">
    <span v-if="icon" class="btn__icon">
      <img :src="icon" alt="" aria-hidden="true" />
    </span>
    <span class="btn__label">{{ label }}</span>
  </button>
</template>

<style scoped>
/* Base button styles */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  text-align: center;
  margin: 0.5rem 0;
  transition: background-color 0.2s ease;
}

.btn__icon {
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}

.btn__icon img {
  width: 60px;
  height: 60px;
}

/* Primary button styles */
.btn--primary {
  background: #5f67dc;
  color: white;
}

/* Secondary button styles */
.btn--secondary {
  background: #c26487;
  color: white;
}

/* Button hover effects */
.btn:hover {
  filter: brightness(0.9);
}

.btn__label {
  line-height: 1;
  font-weight: bold;
}
</style>
