<template>
  <title>Jaden Chant</title>
  <NuxtImg
    src="/images/jaden_nyc.png"
    alt="Jaden Chant"
    class="md:hidden absolute z-0 right-0 bottom-0"
    sizes="sm:500px"
    preload
  />
  <div class="relative z-10">
    <h1 class="text-2xl md:text-4xl mb-6 lg:ml-4">Hi, I'm Jaden!</h1>
    <div
      class="flex flex-col text-lg ml-2 md:ml-4 lg:ml-8 lg:h-56 lg:justify-between lg:text-2xl"
    >
      <p class="mb-4">
        I am an Epic Client Systems Administrator at
        <NuxtLink to="https://www.healthpartners.com/" target="_blank"
          >Health Partners</NuxtLink
        >.
      </p>
      <p class="mb-4">
        I am a CS and Math graduate from
        <NuxtLink to="https://wp.stolaf.edu/" target="_blank"
          >St. Olaf College</NuxtLink
        >.
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
        Or if you're curious about yesterday's
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
  description:
    "Jaden is an Epic Client Systems Administrator at Health Partners",
  ogDescription:
    "Jaden is an Epic Client Systems Administrator at Health Partners",
  ogImage: "https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png",
});
</script>
