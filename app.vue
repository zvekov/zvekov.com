<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

const img = useImage()
const icon = computed(() => {
  return img('https://avatars.githubusercontent.com/u/39777699', {width: 48})
});
useHead({
  link: [{rel: "icon", type: "image/x-icon", href: icon}],
});
</script>
<template>
  <div :class="app.root"
       class="bg-white text-black dark:text-white dark:bg-[#212121]">
    <AppHeader/>
    <LazyNuxtPage/>
    <AppFooter/>
  </div>
</template>
<style module="app">
.root {
  @apply flex flex-col h-screen;
}
</style>