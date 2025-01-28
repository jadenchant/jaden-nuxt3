<template>
  <div class="grid">
    <p>a</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Reverse Word Search",
});

useSeoMeta({
  title: "Reverse Word Search",
  ogTitle: "Reverse Word Search Project",
  author: "Jaden Chant",
  description: "Jaden Chant's Reverse Word Search",
  ogDescription: "Jaden Chant's Reverse Word Search",
  ogImage: "https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png",
});

// b - a - -     angle   blank
// s - - - -     leap    link
// t - - - -     sink    snack
// - * - - -     stop    tag
// - - - l s

const matrix = useCookie("matrix");

const defaultMatrix = "b-a--;s----;t----;-*---;---ls;";

matrix.value = matrix.value || defaultMatrix;
</script>
