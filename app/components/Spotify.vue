<template>
  <div v-if="!error && data">
    <p>{{ data.item }}</p>
    <NuxtImg
      v-if="data.item.album.images[1].url"
      :src="data.item.album.images[1].url"
      alt="Album"
      class="max-h-52"
      sizes="sm:250px lg:300px"
      format="webp"
      preload
    />
  </div>
  <p v-if="error">{{ error }}</p>
</template>

<script setup lang="ts">
const { data, error } = await useFetch<SpotifyCurrentlyPlaying>(
  "/api/spotify/playing",
);
</script>
