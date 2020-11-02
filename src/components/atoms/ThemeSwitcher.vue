<template>
  <a
    href="#"
    class="text-default hover:text-gray-600"
    title="Toggle theme between light and dark"
    aria-label="Toggle theme between light and dark"
    @click.prevent="toggleTheme"
  >
    <Brightness4 v-if="theme === 'theme-light'" />
    <Brightness7 v-else />
  </a>
</template>

<script>
import Brightness4 from "vue-material-design-icons/Brightness4";
import Brightness7 from "vue-material-design-icons/Brightness7";

export default {
  components: {
    Brightness4,
    Brightness7,
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme =
        this.theme === "theme-light" ? "theme-dark" : "theme-light";
      this.$emit("themeChanged", newTheme);
    },
  },
};
</script>