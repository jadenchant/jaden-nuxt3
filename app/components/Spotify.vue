<template>
  <div
    v-if="!error && data"
    class="flex absolute bottom-4 right-4 h-32 p-4 bg-black/85 text-slate-300 z-10"
  >
    <NuxtImg
      v-if="data.item.album.images[1]?.url"
      :src="data.item.album.images[1]?.url"
      alt="Album"
      class="max-h-24"
      sizes="sm:50px lg:50px"
      format="webp"
    />
    <div class="ml-3">
      <h3>Current Listening:</h3>
      <p>{{ data.item.name }}</p>
      <!-- <p>{{ data.item.external_urls.spotify }}</p> -->
      <p>{{ data.item.artists[0]?.name }}</p>
      <!-- <p>{{ data.item.artists[0]?.external_urls.spotify }}</p> -->
    </div>
  </div>
  <p v-if="error">{{ error }}</p>
</template>

<script setup lang="ts">
const { data, error } = await useFetch<SpotifyCurrentlyPlaying>(
  "/api/spotify/playing",
);

const time = data.value?.progress_ms;
</script>
