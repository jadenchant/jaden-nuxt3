<template>
  <title>About</title>
  <div class="z-10 md:mt-6 lg:mt-8">
    <div
      class="flex flex-col lg:align-middle justify-between h-36 md:h-36 ml-2 md:ml-4 md:text-2xl lg:text-center"
    >
      <p class="z-10">
        CS and Math Graduate from
        <NuxtLink to="https://wp.stolaf.edu/" target="_blank" class="underline"
          >St. Olaf College</NuxtLink
        >
      </p>
      <p class="z-10">
        Laboratory Assistant @
        <NuxtLink
          to="https://www.allinahealth.org/"
          target="_blank"
          class="underline"
          >Allina Health</NuxtLink
        >
      </p>
      <p class="z-10">
        Software Engineering Intern @
        <NuxtLink
          to="https://www.target.com/finds"
          target="_blank"
          class="underline"
          >Target</NuxtLink
        >
      </p>
      <p class="z-10">
        Software Development Intern @
        <NuxtLink
          to="https://www.usbank.com/wealth-management.html"
          target="_blank"
          class="underline"
          >US Bank</NuxtLink
        >
      </p>
    </div>
    <br />
    <div class="flex justify-center w-full">
      <NuxtLink to="/face"><Face /></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "About",
});

useSeoMeta({
  title: "About",
  ogTitle: "About Jaden Chant",
  author: "Jaden Chant",
  description: "CS College Graduate from St. Olaf College",
  ogDescription: "CS College Graduate from St. Olaf College",
  ogImage: "https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png",
});
</script>
