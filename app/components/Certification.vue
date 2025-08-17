<template>
  <div
    class="w-full flex flex-col justify-items-center justify-center md:flex-row md:mb-6"
  >
    <NuxtLink
      :to="link"
      target="_blank"
      class="flex items-center justify-center"
    >
      <NuxtImg
        :src="props.src"
        :alt="props.alt"
        sizes="sm:120px md:120px lg:120px"
        format="webp"
        preload
        class="w-32 max-w-32 h-32 object-contain bg-white/80 rounded-4xl"
    /></NuxtLink>
    <div class="hidden md:flex w-full md:flex-col justify-center ml-2 lg:ml-4">
      <div class="flex justify-between text-base md:text-2xl lg:mb-1">
        <h3>
          <NuxtLink :to="link" target="_blank">{{ props.title }}</NuxtLink>
        </h3>
        <h3>{{ props.dates }}</h3>
      </div>
      <div class="hidden md:flex justify-between">
        <h4>
          ID: <NuxtLink :to="link" target="_blank">{{ props.id }}</NuxtLink>
        </h4>
        <h4>Issued by: {{ props.issued }}</h4>
      </div>
    </div>
    <div class="flex md:hidden">
      <h3>
        <NuxtLink :to="link" target="_blank">{{ props.title }}</NuxtLink>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  dates: string;
  id: string;
  src: string;
  alt: string;
  issued: string;
  link: string;
}>();
</script>
