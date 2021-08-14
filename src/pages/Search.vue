<template>
  <Fullscreen>
    <div class="max-w-3xl mx-auto pt-4 relative">
      <NotesSearchMobile class="px-4"/>
    </div>
  </Fullscreen>
</template>
<script>
import NotesSearchMobile from "~/components/organisms/NotesSearchMobile";

export default {
  layout: "Fullscreen",
  components: {
    NotesSearchMobile,
  },
  data() {
    return {
      jsonld: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": process.env.APP_URL,
              name: this.$t("homepage"),
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": process.env.APP_URL + this.$route.path,
              name: this.$t("atoms.links.notes"),
            },
          },
        ],
      },
    };
  },
  metaInfo() {
    return {
      title: this.$t("pages.notes.title"),
      titleTemplate: "%s – " + this.$t("atoms.name"),
      script: [
        {innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json"},
      ],
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
