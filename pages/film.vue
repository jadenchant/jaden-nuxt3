<template>
  <title>Film</title>
  <div class="grid grid-flow-row items-center lg:grid-flow-col lg:mx-20 z-10">
    <NuxtLink
      to="https://en.wikipedia.org/wiki/Rear_Window"
      target="_blank"
      class="z-10 mb-10 md:mr-10"
    >
      <NuxtImg
        src="images/rear-window.jpg"
        alt="Rear Window"
        class="w-full h-full z-10 lg:w-[700px]"
        sizes="sm:250px md:300px lg:700px"
        format="webp"
        preload
      />
    </NuxtLink>
    <NuxtLink
      to="https://en.wikipedia.org/wiki/Elevator_to_the_Gallows"
      target="_blank"
      class="z-10 mb-10 md:mr-10"
    >
      <NuxtImg
        src="images/elevator-to-the-gallows.jpg"
        alt="Elevator to the Gallows"
        class="w-full h-full z-10"
        sizes="sm:250px md:300px lg:700px"
        format="webp"
        preload
      />
    </NuxtLink>
    <NuxtLink
      to="https://en.wikipedia.org/wiki/Shutter_Island_(film)"
      target="_blank"
      class="z-10"
    >
      <NuxtImg
        src="images/shutter.jpg"
        alt="Shutter Island"
        class="w-full h-full z-10"
        sizes="sm:250px md:300px lg:700px"
        format="webp"
      />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Film",
});

useSeoMeta({
  title: "Costume Design",
  ogTitle: "Costume Design",
  author: "Jaden Chant",
  description: "Costume Design Fanny Pack",
  ogDescription: "Costume Design Fanny Pack",
});
</script>
