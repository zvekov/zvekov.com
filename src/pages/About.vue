<template>
  <Layout>
    <div class="max-w-2xl mx-auto">
      <AboutText class="px-4 pb-4" />
      <Works class="px-4 pb-16" />
    </div>
  </Layout>
</template>
<script>
import AboutText from "@/components/organisms/AboutText";
import Works from "@/components/organisms/Works";
export default {
  components: {
    AboutText,
    Works,
  },
  data() {
    return {
      // moment: moment,
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
              name: this.$t("atoms.links.about"),
            },
          },
        ],
      },
    };
  },
  metaInfo() {
    return {
      title: this.$t("pages.about.title"),
      titleTemplate: "%s – " + this.$t("atoms.name"),
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json" },
      ],
      meta: [
        {
          name: "description",
          content: this.$t("pages.about.meta.desc"),
        },
        {
          property: "og:title",
          content: this.$t("pages.about.title") + " – " + this.$t("atoms.name"),
        },
        {
          property: "og:description",
          content: this.$t("pages.about.meta.desc"),
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
