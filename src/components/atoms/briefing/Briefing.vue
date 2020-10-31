<template>
  <div class="w-full h-full">
    <iframe
      v-if="this.$i18n.locale == 'ru-ru'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/QKH8f3"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'en-gb'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/Nx9DWn"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'es-es'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://dev524888.typeform.com/to/eU19aq"
    ></iframe>
    <iframe
      v-if="this.$i18n.locale == 'fr-fr'"
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://zvekov.typeform.com/to/zocspB"
    ></iframe>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://embed.typeform.com/embed.js",
        },
      ],
    }
  },
}
</script>
