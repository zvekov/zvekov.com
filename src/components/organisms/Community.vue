<template>
  <div class="pt-12">
    <h2 class="text-2xl font-bold">Community</h2>
    <p>Look, read, teach, be friends.</p>
    <ul class="pt-2">
      <li>
        <a href="https://github.com/zvekov">
          <Github />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Github from "@/components/atoms/icons/Github";
export default {
  components: {
    Github,
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
