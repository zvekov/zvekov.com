<template>
  <Layout>
    <div class="max-w-2xl mx-auto pb-16">
      <Messanagers class="px-4" />
      <!-- <Task class="px-4" /> -->
    </div>
  </Layout>
</template>
<script>
import Task from "~/components/organisms/Task";
import Messanagers from "~/components/organisms/Messanagers";
export default {
  components: {
    Task,
    Messanagers,
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
              name: this.$t("atoms.links.contact"),
            },
          },
        ],
      },
    };
  },
  metaInfo() {
    return {
      title: this.$t("pages.contact.title"),
      titleTemplate: "%s – " + this.$t("atoms.name"),
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json" },
      ],
      meta: [
        {
          name: "description",
          content: this.$t("pages.contact.meta.desc"),
        },
        {
          property: "og:title",
          content:
            this.$t("pages.contact.title") + " – " + this.$t("atoms.name"),
        },
        {
          property: "og:description",
          content: this.$t("pages.contact.meta.desc"),
        },
        // {
        //   property: "og:image",
        //   content: this.$page.strapi.articles[0].Seo.shareImage.image.url,
        // },
      ],
    };
  },
  // jsonld() {
  //   const items = this.breadcrumbs.map((item, index) => ({
  //     "@type": "ListItem",
  //     position: index + 1,
  //     item: {
  //       "@id": item.url,
  //       name: item.text,
  //     },
  //   }))
  //   return {
  //     "@context": "http://schema.org",
  //     "@type": "BreadcrumbList",
  //     itemListElement: items,
  //   }
  // },
};
</script>
