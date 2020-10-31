<template>
  <select v-model="currentLocale" @change="localeChanged">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
  <!-- <div>
    <div v-for="locale in availableLocales" :key="locale">
      <g-link :to="'/' +locale + $route.path">{{ locale }}</g-link>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    };
  },
  methods: {
    localeChanged() {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true),
      });
    },
  },
};
</script>
