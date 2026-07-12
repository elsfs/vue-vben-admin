<script setup lang="ts">
import { useStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const store = useStore();
const { count } = storeToRefs(store);
</script>

<template>
  <button class="counter" @click="store.increment">
    宿主 计数器 : {{ count }}
  </button>
</template>

<style scoped>
.counter {
  padding: 0.5rem 1rem;
  margin-top: 10px;
  font-weight: 700;
  color: rgb(24 24 24);
  background-color: rgb(246 179 82);
  border: 0 solid #e2e8f0;
  border-radius: 0.25rem;
}
</style>
