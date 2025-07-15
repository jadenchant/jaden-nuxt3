<template>
  <header class="relative w-full pl-6 pt-6 pb-8 z-50">
    <div v-if="$device.isMobile" class="flex justify-between mb-4">
      <NuxtLink to="/" class="text-5xl font-bold mr-6 relative -bottom-1"
        >JC</NuxtLink
      >
      <NuxtLink
        to="/health"
        class="flex justify-center md:w-32 w-24"
        aria-label="health"
      >
        <HealthIcon />
      </NuxtLink>
    </div>
    <nav class="w-full flex">
      <NuxtLink
        v-if="!$device.isMobile"
        to="/"
        class="text-3xl md:text-6xl font-bold mr-12 relative -bottom-1"
        >Jaden Chant</NuxtLink
      >
      <ul class="flex items-end text-2xl md:text-3xl lg:text-4xl">
        <li>
          <NuxtLink
            to="/about"
            class="mr-5 md:mr-4 lg:mr-12 relative -bottom-3 underline md:no-underline md:hover:underline"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/projects"
            class="mr-5 md:mr-4 lg:mr-12 relative -bottom-3 underline md:no-underline md:hover:underline"
            >Projects</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/resume"
            class="mr-5 md:mr-4 lg:mr-12 relative -bottom-3 underline md:no-underline md:hover:underline"
            >Resume</NuxtLink
          >
        </li>
      </ul>
      <div class="grow"></div>
      <NuxtLink
        v-if="!$device.isMobile"
        to="/health"
        class="flex justify-center md:w-32 w-24"
        aria-label="health"
      >
        <HealthIcon />
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
