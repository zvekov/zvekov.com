<template>
  <Layout>
  <div class="max-w-2xl mx-auto">
    <section class="px-4">
      <h1 class="text-2xl font-bold">{{ $t("organisms.search.title") }}</h1>
    </section>
    <NotesSearch class="px-4" />
  </div>
  </Layout>
</template>
<script>
import NotesSearch from "@/components/organisms/NotesSearch";
export default {
  components: {
    NotesSearch,
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
        { innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json" },
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
