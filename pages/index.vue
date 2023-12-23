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
  <main class="flex flex-col gap-1 text-center items-center justify-center flex-1">
    <nuxt-img src="https://avatars.githubusercontent.com/u/39777699" format="webp"
              class="rounded-full overflow-hidden w-[140px] h-[140px]" alt="Yury Zvekau"/>
    <h1 class="text-2xl font-bold pt-4">Yury Zvekau</h1>
    <span class="opacity-70">Frontend developer</span>
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