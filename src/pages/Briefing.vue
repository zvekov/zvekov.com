<template>
  <Fullscreen>
    <div class="flex items-center justify-center w-full h-screen">
      <div class="absolute">{{ $t("pages.briefing.loading") }}</div>
      <Briefing class="z-30" />
      <div class="fixed bottom-0 right-0 pr-4 pb-3">
        <Pogonya />
      </div>
    </div>
  </Fullscreen>
</template>
<script>
import Briefing from "~/components/atoms/briefing/Briefing";
import Pogonya from "@/components/atoms/Pogonya";
export default {
  layout: "fullscreen",
  components: {
    Briefing,
    Pogonya,
  },
  metaInfo() {
    return {
      title: this.$t("pages.briefing.title"),
      titleTemplate: "%s – " + this.$t("atoms.name"),
      // script: [
      //   { innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json" },
      // ],
      meta: [
        {
          name: "description",
          content: this.$t("pages.index.meta.desc"),
        },
        {
          property: "og:title",
          content:
            this.$t("pages.briefing.title") + " – " + this.$t("atoms.name"),
        },
        {
          property: "og:description",
          content: this.$t("pages.index.meta.desc"),
        },
        // {
        //   property: "og:image",
        //   content: this.$page.strapi.articles[0].Seo.shareImage.image.url,
        // },
      ],
    };
  },
};
</script>
