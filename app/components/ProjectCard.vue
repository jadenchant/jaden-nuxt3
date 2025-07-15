<template>
  <NuxtLink
    :to="props.link"
    class="flex flex-col justify-between h-72 lg:h-80 w-80 md:w-96 p-2 border-2 rounded bg-gray-700 z-10"
    :target="props.internal ? '_self' : '_blank'"
  >
    <div class="flex-grow flex flex-col justify-center items-center">
      <NuxtImg
        v-if="props.img"
        :src="props.img"
        :alt="props.alt"
        class="max-h-52"
        sizes="sm:250px lg:300px"
        format="webp"
        preload
      />
    </div>

    <div class="justify-self-end">
      <h2 class="text-lg md:text-2xl mt-1">{{ props.title }}</h2>
      <p class="text-xs md:text-sm mt-1">
        {{ props.desc }}
      </p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  img?: string;
  alt?: string;
  link: string;
  internal?: boolean;
}>();
</script>
