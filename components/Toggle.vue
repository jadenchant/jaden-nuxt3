<template>
  <button
    @click="toggle"
    :class="`hover:cursor-pointer p-2 bg-gray-500 rounded-full ${props.class || ''}`"
  >
    <svg
      :width="props.size"
      :height="props.size / 2"
      viewBox="-30 -30 120 60"
      xmlns="http://www.w3.org/2000/svg"
      :class="isOn ? 'rotate-180' : 'rotate-0'"
    >
      <path
        d="M 0,-25 A 25,25 0 1,1 0,25 A 25,25 0 1,1 0,-25"
        fill="none"
        :stroke="props.color"
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
        :stroke="props.color"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          id="line1"
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
        :stroke="props.color"
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
        v-show="c2end"
        d="M 60,-25 A 25,25 0 1,1 60,25 A 25,25 0 1,1 60,-25"
        fill="none"
        :stroke="props.color"
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
    class?: string;
    size?: number;
    animationTime?: number;
    toggleOn?: boolean;
    color?: string;
  }>(),
  { size: 400, animationTime: 0.8, toggleOn: false, color: "white" },
);

const [isOn, toggle] = useToggle(props.toggleOn);
const anim1 = ref(null);
const c2 = ref<SVGAnimateElement | null>(null);
const c2end = ref(true);

watch(isOn, () => {
  if (anim1.value) {
    c2end.value = false;
    anim1.value.beginElement();
  }
});

onMounted(() => {
  if (c2.value) {
    c2.value.addEventListener("beginEvent", () => {
      setTimeout(
        () => {
          c2end.value = true;
        },
        (props.animationTime * 1000 * 5) / 16,
      );
    });
  }
});
</script>
