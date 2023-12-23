<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";

const img = useImage()
const icon = computed(() => {
  return img('https://avatars.githubusercontent.com/u/39777699', {width: 48})
});
useHead({
  link: [{rel: "icon", type: "image/x-icon", href: icon}],
});
</script>
<template>
  <div>
    <LazyNuxtPage/>
    <AppFooter/>
  </div>
</template>