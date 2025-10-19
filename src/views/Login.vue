<script setup lang="ts">
import { ref } from 'vue'
import { login } from "@/services/axios";
import axios from 'axios';

const email = ref('Enter your email');
const password = ref('Enter your password');

const answer = ref<String | null>(null);

const onLogin = async (): Promise<String> => {
  try{
    answer.value = await login(email.value, password.value);
    console.log("answer", answer.value);
    return answer.value;
  }
  catch (error: unknown)  {
    if(axios.isAxiosError(error)){
      // Axios-specific error
      console.error('Axios error:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      // Regular JS error
      console.error('Error fetching sensor data:', error.message);
    } else {
      // Completely unknown case
      console.error('Unexpected error:', error);
    }
    return "Error fetching token data";
  }
}
</script>

<template>
<form name="login-form">
  <div class="mb-3">
    <label for="email">Email: </label>
    <input id="email" type="email" v-model="email" required>
  </div>
  <div class="mb-3">
    <label for="password">Password: </label>
    <input type="password" id="password" v-model="password" required >
  </div>
  <button class="btn btn-outline-dark" type="submit" v-on:click="onLogin">
    Login
  </button>
</form>
</template>

<style scoped>

</style>