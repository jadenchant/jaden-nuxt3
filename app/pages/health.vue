<template>
  <title>Health Data</title>
  <h1 class="text-2xl md:text-4xl mb-4 lg:ml-4">
    Health Data {{ formatDate(prevData.date) }}
  </h1>
  <div class="relative lg:flex z-10">
    <div v-if="!prevError" class="text-xl md:text-2xl lg:text-3xl ml-4 lg:ml-8">
      <div
        class="show-graph w-60 lg:w-72 cursor-pointer"
        @click="fetchGraphData('/api/distances/30days')"
      >
        <p class="show-graph-text py-2 lg:py-4">
          Distance: {{ prevData?.distance.count }} mi
        </p>
      </div>
      <div
        class="show-graph w-60 lg:w-72 cursor-pointer"
        @click="fetchGraphData('/api/steps/30days')"
      >
        <p class="show-graph-text py-2 lg:py-4">
          Steps: {{ prevData?.steps.count.toLocaleString() }} steps
        </p>
      </div>
      <div
        class="show-graph w-60 lg:w-72 cursor-pointer"
        @click="fetchGraphData('/api/flights/30days')"
      >
        <p class="show-graph-text py-2 lg:py-4">
          Flights: {{ prevData?.flights.count }} flights
        </p>
      </div>
    </div>
    <p v-if="prevError">Error: {{ prevError.message }}</p>
    <div class="mt-4 lg:ml-20">
      <HealthGraph
        v-if="graphData"
        :data="graphData"
        :dataType="graphDataType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Health Data",
});

useSeoMeta({
  title: "Health Data",
  ogTitle: "Jaden Chant Health Data",
  author: "Jaden Chant",
  description: "Jaden Chant's Walking Distance, Steps, and Flights Data",
  ogDescription: "Jaden Chant's Walking Distance, Steps, and Flights Data",
});

type DistanceData = { date: any; distance: any; units: any };
type FlightsData = { date: any; flights: any; units: any };
type StepsData = { date: any; steps: any; units: any };

let graphData = ref<DistanceData[] | FlightsData[] | StepsData[]>([]);
let graphDataType = ref("");

const { data: prevData, error: prevError } = await useFetch("/api/health");

onMounted(async () => {
  const distData = await $fetch<DistanceData[]>("/api/distances/30days");
  if (distData) {
    graphData.value = distData;
    graphDataType.value = "distance";
  }
});

const fetchGraphData = async (apiUrl: string) => {
  try {
    const data = await $fetch<DistanceData[] | FlightsData[] | StepsData[]>(
      apiUrl,
    );
    graphData.value = data;

    if (apiUrl.includes("distances")) {
      graphDataType.value = "distance";
    } else if (apiUrl.includes("flights")) {
      graphDataType.value = "flights";
    } else if (apiUrl.includes("steps")) {
      graphDataType.value = "steps";
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const formatDate = (raw: Date) => {
  const date = new Date(raw);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return `${month}/${Number(day)}/${year}`;
};
</script>

<style>
.show-graph .show-graph-text::after {
  content: "⇒";
  position: relative;
  opacity: 0;
  left: 0em;
  text-decoration: none;
  transition:
    opacity 0.15s ease-in-out,
    left 0.2s ease-in-out;
}

.show-graph:hover .show-graph-text::after {
  opacity: 1;
  left: 0.3em;
  text-decoration: none;
}
</style>
