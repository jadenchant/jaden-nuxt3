<template>
  <title>Costume Design</title>
  <div class="flex flex-col items-center justify-center z-10">
    <NuxtImg
      src="images/fannypack.png"
      alt="Fanny Pack"
      class="w-60 md:w-96 h-full z-10"
      sizes="sm:300px md:500px lg:700px"
      format="webp"
      preload
    />
    <h2 class="mt-4 text-3xl">Fanny Khak</h2>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Costume Design",
});
</script>
