<template>
  <div class="max-w-2xl mx-auto">
    <AboutText class="px-4" />
    <Works class="px-4 pb-16" />
  </div>
</template>
<script>
import AboutText from '@/components/organisms/AboutText'
import Works from '@/components/organisms/Works'
export default {
  components: {
    AboutText,
    Works,
  },
}
</script>
<style lang="postcss">
p {
  @apply pb-3;
}
</style>
