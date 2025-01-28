<template>
  <div class="h-96 w-[350px] z-10">
    <TresCanvas v-bind="gl" class="!touch-auto">
      <TresPerspectiveCamera
        :position="new Vector3(0, 2.3, 6.2)"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <TresAmbientLight :color="new Color(0xffffff)" :intensity="0.75" />
      <TresDirectionalLight
        :position="new Vector3(0, 8, 5)"
        :intensity="1"
        cast-shadow
      />
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
  </div>
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
const { onLoop } = useRenderLoop();
const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const modelRef = shallowRef<any>(null);

const onModelError = (error: Error) => {
  console.error("Error loading model:", error);
};

onLoop(({ delta, elapsed }) => {
  if (modelRef.value && modelRef.value.instance) {
    let baseline = delta * 0.7;
    if (elapsed < 2.5) {
      baseline *= 2.5 / elapsed;
    }

    modelRef.value.instance.rotation.y -= baseline;
  }
});
</script>
