<template>
  <div class="h-96 w-[350px] z-10">
    <TresCanvas
      v-bind="gl"
      class="!touch-auto"
      :clear-color="0x000000"
      :clear-alpha="0"
      @loop="onLoop"
    >
      <TresPerspectiveCamera
        :position="new Vector3(0, 2.3, 6.2)"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <TresAmbientLight :intensity="0.75" />
      <TresDirectionalLight
        :position="new Vector3(0, 8, 5)"
        :intensity="1"
        cast-shadow
      />
      <TresGroup ref="wrapperRef">
        <GLTFModel path="/models/face.glb" draco />
      </TresGroup>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from "three";

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
    let baseline = delta * 10;
    if (elapsed < 2.5) {
      baseline *= 2 / elapsed;
    }
    wrapperRef.value.rotation.y += baseline;
  }
};
</script>
