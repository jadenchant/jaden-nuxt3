<template>
  <title>Jaden Chant</title>
  <NuxtImg
    v-if="$device.isMobile"
    src="/images/jaden_nyc.png"
    alt="Jaden Chant"
    class="absolute z-0 right-0 bottom-0"
    sizes="sm:500px"
    preload
  />
  <div class="relative z-10">
    <h1 class="text-2xl md:text-4xl mb-6 lg:ml-4">Hi, I'm Jaden!</h1>
    <div
      class="flex flex-col text-lg ml-2 md:ml-4 lg:ml-8 lg:h-56 lg:justify-between lg:text-2xl"
    >
      <p class="mb-4">
        I am a CS and Math graduate from St. Olaf College in Northfield, MN.
      </p>
      <p class="mb-4">
        If you would like to contact me, feel free to send me an email at
        <NuxtLink
          to="mailto:contact@jadenchant.com"
          target="_blank"
          class="underline"
          >contact@jadenchant.com</NuxtLink
        >!
      </p>
      <p>
        If you're curious about yesterday's
        <NuxtLink to="/health" class="underline">health data...</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Jaden Chant",
});

useSeoMeta({
  title: "Jaden Chant",
  ogTitle: "Jaden Chant",
  author: "Jaden Chant",
  description: "Recent CS College Graduate from St. Olaf College",
  ogDescription: "Recent CS College Graduate from St. Olaf College",
  ogImage: "https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png",
});
</script>
