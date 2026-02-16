<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="h-96 lg:h-[400px] w-full lg:w-[500px] xl:w-[600px] z-10"
  >
    <TresCanvas
      v-bind="gl"
      class="!touch-auto"
      :clear-color="0x000000"
      :clear-alpha="0"
      @loop="onLoop"
    >
      <TresPerspectiveCamera
        :position="new Vector3(0, 0, props.zPos)"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <TresAmbientLight :intensity="0.75" />
      <TresDirectionalLight
        :position="new Vector3(0, 8, 20)"
        :intensity="1.4"
        cast-shadow
      />
      <TresGroup ref="wrapperRef" :rotation="[Math.PI * 0.5, 0, 0]">
        <GLTFModel :path="props.modelPath" draco
      /></TresGroup>
    </TresCanvas>
  </NuxtLink>
</template>

<script setup lang="ts">
import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from "three";
const props = defineProps<{
  modelPath: string;
  zPos: number;
  link: string;
  turnRight?: boolean;
  tiltRight?: boolean;
}>();

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const wrapperRef = shallowRef(null);

const onLoop = ({ delta, elapsed }: { delta: number; elapsed: number }) => {
  if (wrapperRef.value?.rotation) {
    let baseline = delta * 0.9;
    if (elapsed < 4) {
      baseline *= 4 / elapsed;
    }
    wrapperRef.value.rotation.z += props.turnRight ? -baseline : baseline;
  }
};
</script>
