<template>
  <title>Baking</title>
  <div
    class="flex flex-col md:flex-row items-center md:items-start justify-between lg:mx-20 z-10 gap-10"
  >
    <NuxtLink
      to="https://preppykitchen.com/ultimate-chocolate-cake/"
      target="_blank"
      class="flex flex-col w-min"
    >
      <NuxtImg
        src="images/chocolate-layered-cake.jpg"
        alt="Chocolate Layer Cake"
        class="h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-auto object-cover z-10 max-w-none"
        sizes="sm:250px md:300px lg:500px"
        format="webp"
        preload
      />
      <p class="text-xl mt-2 px-2 w-full leading-snug">
        Chocolate Cake with Chocolate Buttercream and a Chocolate Ganache Glaze
      </p>
    </NuxtLink>

    <NuxtLink
      to="https://preppykitchen.com/cheesecake-recipe/"
      target="_blank"
      class="flex flex-col w-min"
    >
      <NuxtImg
        src="images/biscoff-cheesecake.jpg"
        alt="Biscoff Cheesecake"
        class="h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-auto object-cover z-10 max-w-none"
        sizes="sm:250px md:300px lg:500px"
        format="webp"
        preload
      />
      <p class="text-xl mt-2 px-2 w-full">Biscoff Cheesecake</p>
    </NuxtLink>

    <NuxtLink
      to="https://preppykitchen.com/creme-brulee/"
      target="_blank"
      class="flex flex-col w-min"
    >
      <NuxtImg
        src="images/creme-brulee.jpg"
        alt="Crème Brûlée"
        class="h-[500px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-auto object-cover z-10 max-w-none"
        sizes="sm:250px md:300px lg:500px"
        format="webp"
      />
      <p class="text-xl mt-2 px-2 w-full">Crème Brûlée</p>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Baking",
});

useSeoMeta({
  title: "Baking",
  ogTitle: "Baking",
  author: "Jaden Chant",
  description: "Favorite baked goods",
  ogDescription: "Favorite baked goods",
});
</script>
