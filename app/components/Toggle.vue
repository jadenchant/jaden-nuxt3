<template>
  <button
    @click="toggle"
    :disabled="isAnimating"
    :class="`${props.bgColor} rounded-full shadow hover:cursor-pointer flex items-center justify-center ${props.class || ''}`"
    :style="{ width: `${sz + 2 * pad}px`, height: `${sz / 2 + 2 * pad}px` }"
  >
    <svg
      :width="sz"
      :height="sz / 2"
      viewBox="-30 -30 120 60"
      xmlns="http://www.w3.org/2000/svg"
      :class="isOn ? 'rotate-0' : 'rotate-180'"
    >
      <rect
        x="-25"
        y="-25"
        width="110"
        height="50"
        rx="25"
        ry="25"
        :fill="props.onColor"
        :stroke-opacity="0.5"
        :fill-opacity="isOn ? '0.5' : '0'"
        :style="{
          transition: `fill-opacity ${animTime / 3}s ease-in-out`,
        }"
      ></rect>
      <path
        d="M 0,-25 A 25,25 0 1,1 0,25 A 25,25 0 1,1 0,-25"
        fill="none"
        :stroke="props.color"
        :stroke-width="strokeW"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          :id="`c1-${uniqueId}`"
          ref="c1Anim"
          attributeName="stroke-dashoffset"
          values="0; -157.08"
          keyTimes="0; 1"
          begin="indefinite"
          :dur="`${animTime / 3}s`"
        />
      </path>
      <path
        d="M 0, -25 L 60, -25"
        :stroke="props.color"
        :stroke-width="strokeW"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          id="line"
          attributeName="stroke-dashoffset"
          values="157.08; 0; -157.08"
          keyTimes="0; 0.5; 1"
          :begin="`c1-${uniqueId}.begin+0`"
          :dur="`${(2 * animTime) / 3}s`"
        />
      </path>
      <path
        d="M 60,-25 A 25,25 0 1,1 60,25 A 25,25 0 1,1 60,-25"
        fill="none"
        :stroke="props.color"
        :stroke-width="strokeW"
        stroke-linecap="round"
        stroke-dasharray="157.08"
        stroke-dashoffset="157.08"
      >
        <animate
          id="c2"
          ref="c2Anim"
          attributeName="stroke-dashoffset"
          values="157.08; 0"
          keyTimes="0; 1"
          :begin="`c1-${uniqueId}.begin+${animTime / 8}s`"
          :dur="`${animTime / 3}s`"
        />
      </path>
      <path
        v-show="showC1"
        d="M 60,-25 A 25,25 0 1,1 60,25 A 25,25 0 1,1 60,-25"
        fill="none"
        :stroke="props.color"
        :stroke-width="strokeW"
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
    size?: Numberish;
    padding?: Numberish;
    strokeWidth?: Numberish;
    animationTime?: Numberish;
    toggleOn?: boolean;
    color?: string;
    bgColor?: string;
    onColor?: string;
  }>(),
  {
    size: 100,
    padding: 5,
    strokeWidth: 10,
    animationTime: 0.8,
    toggleOn: false,
    color: "oklch(98.4% 0.003 247.858)",
    bgColor: "bg-slate-500",
    onColor: "oklch(72.3% 0.219 149.579)",
  },
);

const uniqueId = ref(`toggle-${Math.random().toString(36).substring(2, 9)}`);

const sz = Number(props.size);
const animTime = Number(props.animationTime);
const strokeW = Number(props.strokeWidth);
const pad = Number(props.padding);

const [isOn, toggle] = useToggle(props.toggleOn);
const c1Anim = ref<SVGAnimateElement | null>(null);
const c2Anim = ref<SVGAnimateElement | null>(null);
const showC1 = ref(true);
const isAnimating = ref(false);

watch(isOn, () => {
  if (c1Anim.value && !isAnimating.value) {
    isAnimating.value = true;
    showC1.value = false;
    c1Anim.value.beginElement();
  }
});

onMounted(() => {
  if (c2Anim.value) {
    c2Anim.value.addEventListener("beginEvent", () => {
      setTimeout(
        () => {
          showC1.value = true;
        },
        (animTime * 1000) / 4,
      );
    });
    c2Anim.value.addEventListener("endEvent", () => {
      isAnimating.value = false;
    });
  }
});
</script>
