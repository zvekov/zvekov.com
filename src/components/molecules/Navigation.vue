<template>
  <ul class="grid grid-flow-col gap-2">
    <li>
      <About class="px-3 py-1 hover:bg-gray-200 rounded-2xl"/>
    </li>
    <li>
      <Contact
          class="px-3 py-1 hover:bg-gray-200 rounded-2xl transition-all transform duration-300 transition-all hover:scale-110"/>
    </li>
    <li>
      <Notes class="px-3 py-1 hover:bg-gray-200 rounded-2xl"/>
    </li>
  </ul>
</template>
<script>
import About from "~/components/atoms/links/About";
import Contact from "~/components/atoms/links/Contact";
import Notes from "~/components/atoms/links/Notes";

export default {
  components: {
    About,
    Contact,
    Notes,
  },
};
</script>
<style lang="postcss" scoped>
.active {
  @apply bg-gray-200;
}

.sidebar-panel a.active {
  color: inherit;
}
</style>
