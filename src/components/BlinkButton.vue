<template>
    <button v-blink>{{ msg }}</button>
  </template>
  
  <script setup lang="ts">
  defineProps(['msg']);
  </script>
  
  <style scoped>
  button {
    font-size: 16px;
    padding: 10px 20px;
  }
  
  .blink {
    animation: blink 1s infinite alternate;
  }
  
  @keyframes blink {
    to {
      opacity: 0.1;
    }
  }
  </style>
  