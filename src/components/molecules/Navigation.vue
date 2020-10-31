<template>
  <ul>
    <li class="px-3">
      <About class="hover:text-red-700" />
    </li>
    <li class="px-3">
      <Contact class="hover:text-red-700" />
    </li>
    <li class="px-3">
      <Notes class="hover:text-red-700" />
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
  @apply text-red-700;
}
.sidebar-panel a.active {
  color: inherit;
}
/* a {
  @apply py-1 px-2 bg-opacity-10;
}
a:hover {
  @apply bg-black text-white;
} */
</style>
