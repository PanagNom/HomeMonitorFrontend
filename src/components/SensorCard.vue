<script setup lang="ts">
import { computed } from "vue";

interface Props {
  icon: string;
  title: string;
  value: string | number;
  color: string; // gradient tailwind classes like from-blue-400 to-red-500
}

const props = defineProps<Props>();

// Convert color string into full tailwind class
const colorClass = computed(() => `bg-gradient-to-r ${props.color}`);
</script>

<template>
  <div
      class="rounded-2xl shadow-md p-4 bg-white dark:bg-gray-800
           flex flex-col items-center justify-center
           text-center hover:shadow-lg transition"
  >
    <!-- Icon -->
    <div
        class="text-4xl mb-2 bg-gradient-to-r text-transparent bg-clip-text"
        :class="colorClass"
    >
      {{ icon }}
    </div>

    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-200">
      {{ title }}
    </h2>

    <!-- Value -->
    <p class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
      {{ value }}
    </p>
  </div>
</template>