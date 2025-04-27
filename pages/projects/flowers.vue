<template>
  <title>Flowers</title>
  <h1 class="text-2xl md:text-4xl mb-6 lg:ml-4">Flowers</h1>
  <div class="flex flex-col xl:flex-row justify-between align-middle my-4">
    <Flower
      model-path="/models/rose.glb"
      :zPos="100"
      link="https://www.printables.com/model/809812-flat-rose-flower"
      turnRight
      tiltRight
    />
    <Flower
      model-path="/models/tulip.glb"
      :zPos="82"
      link="https://www.printables.com/model/809814-flat-tulip-flower"
    />
    <Flower
      model-path="/models/flower.glb"
      :zPos="110"
      link="https://www.printables.com/model/809813-flat-flower"
      turnRight
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Flowers",
});

useSeoMeta({
  title: "flowers",
  ogTitle: "Jaden's Flowers",
  author: "Jaden Chant",
  description: "Jaden's 3D Flower Models",
  ogDescription: "Jaden's 3D Flower Models",
});
</script>
