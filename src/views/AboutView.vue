<script setup lang="ts">
import { useCounterStore } from './../store/counter';
const counter = useCounterStore();
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <h1>
        {{ counter.count }} <button @click="counter.increment">count ++</button>
      </h1>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
