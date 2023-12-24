<script setup lang="ts">
useSeoMeta({
  title: "Yury Zvekau: Frontend developer",
  description: "Frontend developer",
  ogTitle: "Yury Zvekau: Frontend developer",
  ogDescription: "Frontend developer",
  ogImage: "https://avatars.githubusercontent.com/u/39777699"
})
</script>

<template>
  <main :class="index.root">
    <nuxt-img src="https://avatars.githubusercontent.com/u/39777699" format="webp" alt="Yury Zvekau"/>
    <h1>Yury Zvekau</h1>
    <span>Frontend developer</span>
    <!--      <ul class="flex items-center gap-3">-->
    <!--        <li>-->
    <!--          <span class="i-grommet-icons-github block h-10 w-10 cursor-pointer" @click="openModal"/>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href=""><span class="i&#45;&#45;heroicons-envelope block h-10 w-10 text-black"></span></a>-->
    <!--        </li>-->
    <!--      </ul>-->
  </main>
</template>
<style>
.slide-up {
  &-enter-active,
  &-leave-active {
    @apply transition-all duration-200 transform-gpu;
  }

  &-enter-from {
    transform: translateY(100%);
  }

  &-leave-to {
    transform: translateY(100%);
  }
}
</style>
<style module="index">
.root {
  @apply flex flex-col gap-1 text-center items-center justify-center flex-1;

  & img {
    @apply rounded-full overflow-hidden w-[140px] h-[140px];
  }

  & h1 {
    @apply text-2xl font-bold pt-4;
  }

  & span {
    @apply opacity-70;
  }
}
</style>