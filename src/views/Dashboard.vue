<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import SensorCard from '@/components/SensorCard.vue'
import { getSensorData } from "@/services/axios";
import type {SensorsData} from "@/types";

const sensors = ref({
  temperature: 24.5,
  humidity: 55,
  sound: 42,
  presence: false,
  light: 320,
});

const sensorsData = ref<SensorsData | null>(null);

const fetchSensorData = async () => {
  try{
    sensorsData.value = await getSensorData();
    console.log("sensorsData", sensorsData.value);
  } catch (error) {
    console.error('Error fetching sensor data:', error.message);
  }
}

onMounted(fetchSensorData);

const alerts = ref([
  { id: 1, message: 'High temperature detected' },
  // empty for now
]);
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen dark:bg-gray-900">
    <!-- Page Title -->
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Home Monitor Dashboard</h1>

    <!-- Sensor Cards Grid -->
    <div v-if="sensorsData" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Temperature & Humidity -->
      <SensorCard
          icon="🌡️"
          title="Temperature"
          :value="`${sensorsData.temperature} °C`"
          color="from-blue-400 to-red-500"
      />
      <SensorCard
          icon="💧"
          title="Humidity"
          :value="`${sensorsData.humidity} %`"
          color="from-cyan-400 to-blue-600"
      />

      <!-- Sound Levels -->
      <SensorCard
          icon="🔊"
          title="Sound Level"
          :value="`${sensorsData.sound} dB`"
          color="from-green-400 to-yellow-500"
      />

      <!-- Presence -->
      <SensorCard
          icon="🚶"
          title="Presence"
          :value="sensorsData.presence ? 'Detected' : 'Clear'"
          color="from-purple-400 to-pink-500"
      />

      <!-- Light Levels -->
      <SensorCard
          icon="☀️"
          title="Light"
          :value="`${sensorsData.light} lx`"
          color="from-yellow-300 to-orange-500"
      />

      <!-- Alerts -->
      <SensorCard
          icon="⚠️"
          title="Alerts"
          :value="alerts.length ? `${alerts.length} active` : 'None'"
          color="from-red-400 to-red-600"
      />
    </div>
  </div>
</template>

<style scoped>

</style>