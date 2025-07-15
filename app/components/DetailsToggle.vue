<template>
  <div :class="props.class">
    <div class="flex justify-center h-14 mb-4">
      <button @click="toggle" class="px-16 pt-2 rounded cursor-pointer">
        <h4 class="text-lg">
          {{ isOpen ? "Hide" : "Show" }}
          {{ props.buttonText ? props.buttonText : "Details" }}
        </h4>
        <Icon
          v-if="!isOpen"
          name="material-symbols:keyboard-arrow-down"
          size="2.5em"
          class="arrow"
        />
        <Icon
          v-else
          name="material-symbols:keyboard-arrow-up"
          size="2.5em"
          class="arrow"
        />
      </button>
    </div>
    <div v-if="showContent" :class="isOpen ? 'animate-open' : 'animate-close'">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useToggle } from "~/compostables/useToggle";

const props = defineProps<{
  buttonText?: string;
  initialOpen?: boolean;
  class?: string;
}>();

const [isOpen, toggle] = useToggle(props.initialOpen);
const showContent = ref(isOpen.value);

watch(isOpen, (newVal) => {
  if (newVal) {
    showContent.value = true;
  } else {
    setTimeout(() => {
      showContent.value = false;
    }, 600);
  }
});
</script>

<style>
.arrow {
  position: relative;
  top: -0.35em;
  animation: arrow 0.4s ease-in 8 alternate;
}

@keyframes arrow {
  from {
    top: -0.35em;
  }

  to {
    top: 0em;
  }
}

@keyframes uparrow {
  from {
    top: -0.3em;
  }

  to {
    top: 0em;
  }
}

@keyframes open {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes close {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-open {
  animation: open 0.6s ease-in;
}

.animate-close {
  animation: close 0.6s ease-out backwards;
}
</style>
