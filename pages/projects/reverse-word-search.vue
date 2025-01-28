<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-5">
      <div
        v-for="(cell, index) in matrixArray.flat()"
        :key="index"
        class="p-2 text-center text-2xl border border-gray-300"
      >
        {{ cell }}
      </div>
    </div>
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

const stringToMatrix = (str: string) => {
  return str.split(";").map((row) => row.split(""));
};

const matrixToString = (matrix: Array<Array<string>>) => {
  return matrix.map((row) => row.join("")).join(";");
};

// b - a - -     angle   blank
// s - - - -     leap    link
// t - - - -     sink    snack
// - * - - -     stop    tag
// - - - l s

const matrix = useCookie("matrix");

const defaultMatrix = "b-a--;s----;t----;-*---;---ls;";

matrix.value = matrix.value || defaultMatrix;

const matrixArray = ref(stringToMatrix(matrix.value));
</script>
