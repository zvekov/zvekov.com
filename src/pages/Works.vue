<template>
  <Layout>
    <div class="max-w-3xl mx-auto">
      <Works class="px-4 pb-16"/>
    </div>
  </Layout>
</template>
<script>
import Works from "@/components/organisms/Works";

export default {
  components: {
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
              name: this.$t("organisms.works.title"),
            },
          },
        ],
      },
    };
  },
  metaInfo() {
    return {
      title: this.$t("organisms.works.title"),
      titleTemplate: "%s – " + this.$t("atoms.name"),
      script: [
        {innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json"},
      ],
      meta: [
        {
          name: "description",
          content: this.$t("pages.about.meta.desc"),
        },
        {
          property: "og:title",
          content: this.$t("organisms.works.title") + " – " + this.$t("atoms.name"),
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
