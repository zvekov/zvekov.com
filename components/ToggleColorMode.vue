<script setup lang="ts">
import {computed} from "vue";

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
const toggleColorMode = () => {
  isDark.value = !isDark.value;
}
</script>
<template>
  <button @click="toggleColorMode">
    <UIcon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun'" class="w-6 h-6"/>
  </button>
</template>