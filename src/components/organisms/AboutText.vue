<template>
  <section>
    <h1 class="text-2xl font-bold">{{ $t("organisms.about_text.title") }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="$t('organisms.about_text.text')"></div>
  </section>
</template>
