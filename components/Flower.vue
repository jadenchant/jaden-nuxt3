<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="h-96 lg:h-[400px] w-full lg:w-[500px] xl:w-[600px] z-10"
  >
    <TresCanvas v-bind="gl" class="!touch-auto">
      <TresPerspectiveCamera
        :position="new Vector3(0, 0, props.zPos)"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <TresAmbientLight :color="new Color(0xffffff)" :intensity="0.75" />
      <TresDirectionalLight
        :position="new Vector3(0, 8, 20)"
        :intensity="1.4"
        cast-shadow
      />
      <TresMesh>
        <Suspense>
          <LazyGLTFModel
            ref="modelRef"
            :path="props.modelPath"
            draco
            @error="onModelError"
          />
        </Suspense>
      </TresMesh>
    </TresCanvas>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useRenderLoop } from "@tresjs/core";
import {
  BasicShadowMap,
  NoToneMapping,
  SRGBColorSpace,
  Vector3,
  Color,
} from "three";
const props = defineProps<{
  modelPath: string;
  zPos: number;
  link: string;
  turnRight?: boolean;
  tiltRight?: boolean;
}>();
const { onLoop } = useRenderLoop();
const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const modelRef = shallowRef<any>();

const onModelError = (error: any) => {
  console.error("Error loading model:", error);
};

watch(modelRef, (newValue, oldValue) => {
  if (
    modelRef.value &&
    modelRef.value.instance &&
    modelRef.value.instance.rotation &&
    newValue !== oldValue
  ) {
    modelRef.value.instance.rotation.x = Math.PI / 2;
    modelRef.value.instance.rotation.y = props.tiltRight
      ? Math.PI / 8
      : -Math.PI / 8;
  }
});

onLoop(({ delta, elapsed }) => {
  if (modelRef.value && modelRef.value.instance) {
    let baseline = delta * 0.9;
    if (elapsed < 2.5) {
      baseline *= 2.5 / elapsed;
    }
    modelRef.value.instance.rotation.z += props.turnRight
      ? -baseline
      : baseline;
  }
});
</script>
