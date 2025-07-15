<template>
  <div class="absolute z-0" :class="$device.isMobile ? 'icon-sm' : 'icon-lg'">
    <Heart class="heart" />
    <Pulse class="pulse pulse1" />
    <Pulse class="pulse pulse2" />
    <!-- <Icon name="icons:heart" mode="svg" class="heart" />
    <Icon name="icons:pulse" mode="svg" class="pulse pulse1" />
    <Icon name="icons:pulse" mode="svg" class="pulse pulse2" /> -->
  </div>
</template>

<script setup>
import Heart from "~/assets/icons/Heart.vue";
import Pulse from "~/assets/icons/Pulse.vue";
</script>

<style>
.icon-lg svg.heart {
  width: 4.6em;
  height: 4.6em;
  margin-right: 2.2em;
  transition:
    width 0.15s ease-in-out,
    height 0.15s ease-in-out;
  fill: white;
}

.icon-lg:hover svg.heart {
  width: 4.9em;
  height: 4.9em;
}

.icon-lg svg.pulse {
  width: 4.8em;
  height: 1.8em;
  z-index: 10;
}

.icon-lg svg.pulse {
  top: 1.2em;
  position: absolute;
  z-index: 10;
}

svg.pulse {
  stroke: #374151;
}

.icon-lg svg.pulse1 {
  animation: 1.6s linear infinite running pulse-lg;
}

.icon-lg svg.pulse2 {
  animation: 1.6s linear 0.8s infinite running pulse-lg;
}

@keyframes pulse-lg {
  from {
    left: -4em;
  }

  to {
    left: 4em;
  }
}

.icon-sm svg.heart {
  width: 3em;
  height: 3em;
  margin-right: 1em;
  margin-top: 0.2em;
  fill: white;
}

.icon-sm svg.pulse {
  width: 3em;
  height: 1.2em;
}

.icon-sm svg.pulse {
  position: absolute;
  top: 1em;
  z-index: 10;
  /* fill: #374151; */
}

.icon-sm svg.pulse1 {
  animation: 1.6s linear infinite running pulse-sm;
}

.icon-sm svg.pulse2 {
  animation: 1.6s linear 0.8s infinite running pulse-sm;
}

@keyframes pulse-sm {
  from {
    left: -2em;
  }

  to {
    left: 2em;
  }
}
</style>
