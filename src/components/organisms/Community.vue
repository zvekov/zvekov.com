<template>
  <div class="pt-12">
    <h2 class="text-2xl font-bold">Community</h2>
    <p>Look, read, teach, be friends.</p>
    <ul class="pt-2 flex items-center">
      <li class="pr-6">
        <a href="https://github.com/zvekov" target="_blank">
          <Github />
        </a>
      </li>
      <li class="pr-6">
        <a href="https://wakatime.com/@zvekov" target="_blank">
          <WakaTime width="34" height="34" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Github from "@/components/atoms/icons/Github";
import WakaTime from "@/components/atoms/icons/WakaTime";
export default {
  components: {
    Github,
    WakaTime
  },
};
</script>
<style lang="postcss" scoped>
svg {
  @apply transform duration-300 transition-all;
  &:hover {
    @apply scale-125;
  }
}
</style>
