<!-- eslint-disable vue/no-v-html -->
<template>
  <Layout>
    <div class="max-w-2xl mx-auto">
      <section class="px-4 pb-8">
        <div class="flex flex-wrap pb-8">
          <h1 v-if="$page.strapi.notes[0].name" class="text-2xl font-bold">
            {{ $page.strapi.notes[0].name }}
          </h1>
          <div class="flex items-center justify-between w-full pb-4">
            <div
              v-if="$page.strapi.notes[0].published_at"
              class="text-base opacity-50"
            >
              {{ $page.strapi.notes[0].published_at | dateFormat }}
            </div>
            <div>
              <YandexShare />
            </div>
          </div>
          <VueMarkdown
            v-if="$page.strapi.notes[0].content"
            :source="$page.strapi.notes[0].content"
            class="w-full pb-4 content"
          />
        </div>
      </section>
    </div>
  </Layout>
</template>
<page-query>
  query ($slug: String!) {
    strapi {
      notes(where: { slug: $slug }) {
        slug
        name
        content
        published_at
      }
	  }
  }
</page-query>
<script>
import moment from "moment";
import VueMarkdown from "vue-markdown";
import YandexShare from "~/components/atoms/YandexShare";

export default {
  components: {
    VueMarkdown,
    YandexShare,
  },
  filters: {
    dateFormat(date) {
      return moment(date).format("DD MMMM YYYY");
    },
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
              "@id": process.env.APP_URL + "/notes/",
              name: this.$t("atoms.links.notes"),
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": process.env.APP_URL + this.$route.path,
              name: this.currentNote,
            },
          },
        ],
      },
    };
  },
  computed: {
    currentNote() {
      return `${this.$page.strapi.notes[0].name}`;
    },
  },
  metaInfo() {
    return {
      title: this.$page.strapi.notes[0].name,
      titleTemplate: "%s – " + this.$t("pages.notes.title"),
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: "application/ld+json" },
      ],
      // meta: [
      //   {
      //     name: "description",
      //     content: this.$page.strapi.articles[0].Seo.metaDescription,
      //   },
      //   {
      //     property: "og:title",
      //     content: this.$page.strapi.articles[0].Seo.metaTitle,
      //   },
      //   {
      //     property: "og:description",
      //     content: this.$page.strapi.articles[0].Seo.metaDescription,
      //   },
      //   {
      //     property: "og:image",
      //     content: this.$page.strapi.articles[0].Seo.shareImage.image.url,
      //   },
      // ],
    };
  },
};
</script>
<style lang="postcss">
/* img {
  width: 20rem;
} */
/* .hljs {
  @apply mt-2 mb-4 w-full z-0 relative font-monospace;
  font-size: 14px;
  border-radius: 0.5rem;
  overflow-x: auto;
} */
.content pre {
  @apply bg-blue-900 text-white overflow-x-auto p-4 rounded-md mb-4 text-xs font-monospace;
}

.content a {
  border-bottom: 1px dotted;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.content ol {
  list-style: decimal;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
}
.content ul {
  list-style: disc;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
}
.content li {
  @apply pb-1;
}
</style>
