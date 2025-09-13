<template>
  <div
    v-if="!error && data"
    class="flex fixed bottom-4 right-4 h-32 p-4 bg-black/85 text-slate-300 z-50"
  >
    <NuxtImg
      v-if="data.album.images[1]?.url"
      :src="data.album.images[1]?.url"
      alt="Album"
      class="max-h-24"
      sizes="sm:50px lg:50px"
      format="webp"
    />
    <div class="ml-3">
      <h3 class="text-slate-300/70">
        {{ data.type === "current" ? "Current Listening:" : "Last Played:" }}
      </h3>
      <div>
        <NuxtLink
          :to="data.external_urls.spotify"
          target="_blank"
          class="text-2xl hover:underline"
          >{{ data.name }}</NuxtLink
        >
      </div>
      <div>
        <NuxtLink
          :to="data.artists[0]?.external_urls.spotify"
          target="_blank"
          class="text-slate-300/85 hover:underline"
          >{{ data.artists[0]?.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
  <p v-if="error">{{ error }}</p>
</template>

<script setup lang="ts">
const { data, error, refresh } = await useFetch<SpotifyCurrentlyPlaying>(
  "/api/spotify/playing",
);

const count = ref(0);

const total = ref(0);

let interval: NodeJS.Timer;

watch(data, (newData) => {
  if (newData && newData.type === "current") {
    count.value = newData.progress_ms / 1000;
    total.value = newData.duration_ms / 1000;
  }
});

onMounted(() => {
  interval = setInterval(() => {
    if (total.value - count.value <= 0) {
      refresh();
    } else {
      count.value++;
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
