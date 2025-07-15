<template>
  <div class="z-20 w-full mt-4">
    <div class="flex justify-center align-middle mb-4">
      <NuxtLink
        to="https://www.linkedin.com/in/jaden-chant/"
        target="_blank"
        class="flex items-center mr-3 md:mr-5"
        aria-label="LinkedIn"
      >
        <Icon name="mdi:linkedin" :size="$device.isMobile ? '4em' : '6em'" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/jadenchant"
        target="_blank"
        class="flex items-center ml-3 md:ml-5"
        aria-label="GitHub"
        ><Icon name="mdi:github" :size="$device.isMobile ? '3.8em' : '5.7em'"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
