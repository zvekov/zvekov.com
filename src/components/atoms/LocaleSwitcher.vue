<template>
  <div>
    <select v-model="currentLocale" @change="localeChanged">
      <option v-for="locale in availableLocales" :key="locale" :value="locale">
        {{ locale }}
      </option>
    </select>
    <!-- <div>
      <div class="flex flex-row">
        <a
          v-for="locale in availableLocales"
          :key="locale"
          @click="localeChanged"
          class="px-1"
        >
          {{ locale }}
        </a>
      </div>
    </div> -->
  </div>
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
<style lang="postcss">
</style>