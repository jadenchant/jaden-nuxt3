<template>
  <div class="w-full h-98 flex flex-col justify-around items-center">
    <Toggle size="50" strokeWidth="10" :toggleOn="false" />
    <Toggle size="75" strokeWidth="10" :toggleOn="false" />
    <Toggle size="100" strokeWidth="10" :toggleOn="false" />
    <Toggle
      animationTime="1.2"
      size="200"
      strokeWidth="10"
      padding="10"
      :toggleOn="true"
    />
  </div>
</template>
