<template>
  <button @click="toggle" class="hover:cursor-pointer">
    <svg
      width="400"
      height="200"
      viewBox="-30 -30 120 60"
      xmlns="http://www.w3.org/2000/svg"
      :class="isOn ? 'rotate-180' : 'rotate-0'"
    >
      <path
        d="M 0,-25 A 25,25 0 1,1 0,25 A 25,25 0 1,1 0,-25"
        fill="none"
        stroke="black"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
        ref="circle1"
      >
        <animate
          id="c1"
          ref="anim1"
          attributeName="stroke-dashoffset"
          values="0; -157.08"
          keyTimes="0; 1"
          begin="indefinite"
          :dur="`${props.animationTime / 3}s`"
          repeatCount="1"
        />
      </path>
      <path
        d="M 0, -25 L 60, -25"
        stroke="black"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="157.08; 0; -157.08"
          keyTimes="0; 0.5; 1"
          begin="c1.begin"
          :dur="`${(2 * props.animationTime) / 3}s`"
        />
      </path>
      <path
        d="M 60,-25 A 25,25 0 1,1 60,25 A 25,25 0 1,1 60,-25"
        fill="none"
        stroke="black"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          id="c2"
          ref="c2"
          attributeName="stroke-dashoffset"
          values="157.08; 0"
          keyTimes="0; 1"
          :begin="`c1.begin+${props.animationTime / 8}s`"
          :dur="`${props.animationTime / 3}s`"
          @end="endC2"
        />
      </path>
      <path
        d="M 60,-25 A 25,25 0 1,1 60,25 A 25,25 0 1,1 60,-25"
        fill="none"
        stroke="black"
        stroke-width="6"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
</template>
<script setup lang="ts">
import { useToggle } from "~/compostables/useToggle";

const props = withDefaults(
  defineProps<{
    animationTime?: number;
    toggleOn?: boolean;
  }>(),
  { animationTime: 2, toggleOn: false },
);

const [isOn, toggle] = useToggle(props.toggleOn);
const anim1 = ref(null);
const c2 = ref<SVGAnimateElement | null>(null);

watch(isOn, () => {
  if (anim1.value) {
    anim1.value.beginElement();
  }
});

onMounted(() => {
  if (c2.value) {
    c2.value.addEventListener("endEvent", () => {
      console.log("c2 ended");
    });
  }
});
</script>
