<template>
  <title>Faces</title>

  <TresCanvas v-bind="gl" class="!touch-auto overflow-y-hidden" window-size>
    <TresPerspectiveCamera
      :position="new Vector3(0, 1, 7)"
      :fov="75"
      :near="0.1"
      :far="1000"
    />
    <OrbitControls />
    <TresDirectionalLight
      :position="new Vector3(1, 8, 5)"
      :intensity="1"
      cast-shadow
    />
    <TresDirectionalLight
      :position="new Vector3(0, 0, -5)"
      :intensity="0.5"
      cast-shadow
    />
    <!-- <TresGridHelper /> -->
    <TresMesh>
      <Suspense>
        <LazyGLTFModel
          ref="modelRef"
          path="/models/face.glb"
          draco
          @error="onModelError"
        />
      </Suspense>
    </TresMesh>
  </TresCanvas>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Jaden Face",
});

useSeoMeta({
  title: "Jaden Face",
  ogTitle: "Jaden's Face",
});

import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from "three";
const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
import { OrbitControls } from "@tresjs/cientos";

const modelRef = shallowRef<any>(null);

const onModelError = (error: Error) => {
  console.error("Error loading model:", error);
};

watch(modelRef, () => {
  modelRef.value.instance.position.y = -2;
});
</script>
