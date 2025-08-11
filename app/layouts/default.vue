<template>
  <div class="bg-gray-700 min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    <div class="px-6 py-2 flex-grow z-10">
      <slot />
    </div>
    <!-- <Spotify /> -->
    <Footer />
    <NuxtImg
      v-if="!$device.isMobile"
      src="/images/jaden_nyc.png"
      alt="Jaden Chant"
      class="fixed right-0 bottom-0 z-0 md:w-[650px] lg:w-[750px]"
      sizes="sm:375px md:500px lg:750px"
      format="webp"
      preload
    />
    <NuxtLink
      v-if="!$device.isMobile"
      class="fixed w-7 lg:w-8 h-5 -rotate-[24deg] z-10 -right-1 bottom-[167px] lg:bottom-[191px]"
      to="https://youtube.com/playlist?list=PLu-0iCdnPT9nRfpIeYpTJyE9fCArubWPf&si=P2tKtAnHWtaDVLIA"
      target="_blank"
      ><Icon
        name="mdi:youtube"
        size="1.55em"
        class="bg-gray-400 relative lg:-top-0.5"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
