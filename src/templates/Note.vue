<!-- eslint-disable vue/no-v-html -->
<template>
  <Note>
    <div class="flex flex-wrap">
      <div
        v-if="$page.strapi.notes[0].usefulLinks.length !== 0"
        class="order-2 w-full max-w-2xl px-4 pb-4 mx-auto lowercase lg:pt-16 lg:left-0 lg:px-16 lg:fixed lg:w-auto"
      >
        <div class="font-black">Useful Links</div>
        <ul>
          <li
            v-for="link in $page.strapi.notes[0].usefulLinks"
            v-bind:key="link.id"
          >
            <a
              :href="link.url"
              target="_blank"
              class="flex items-center hover:text-red-700"
            >
              <!-- {{ link.resource }} -->
              <span
                v-if="link.resource == 'github'"
                class="flex justify-end w-6 mr-2"
              >
                <IconGithub class="w-4 h-4 mt-0" />
              </span>
              <span
                v-if="link.resource == 'npm'"
                class="flex justify-end w-6 mr-2"
              >
                <IconNpm class="w-6 h-6 mt-1" />
              </span>
              <span v-if="link.resource == 'bitbucket'"> bitbucketicon </span>
              <span v-if="link.resource == 'codepen'"> codepenicon </span>
              <span
                v-if="link.resource == 'link'"
                class="flex justify-end w-6 mr-2"
              ></span>
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
      <div
        v-if="$page.strapi.notes[0].similar.length !== 0"
        class="order-3 w-full max-w-2xl px-4 pb-4 mx-auto lowercase lg:pt-16 lg:px-16 lg:right-0 lg:fixed lg:w-auto"
      >
        <div class="font-black" v-if="$page.strapi.notes[0].similar">
          Similar Notes
        </div>
        <ul>
          <li
            v-for="note in $page.strapi.notes[0].similar"
            v-bind:key="note.id"
          >
            <g-link
              :to="'/notes/' + note.slug"
              class="flex items-center hover:text-red-700"
            >
              {{ note.name }}
            </g-link>
          </li>
        </ul>
      </div>
      <div class="order-1 w-full max-w-2xl mx-auto">
        <section class="px-4">
          <div class="flex flex-wrap pb-8">
            <h1 v-if="$page.strapi.notes[0].name" class="text-2xl font-bold">
              {{ $page.strapi.notes[0].name }}
            </h1>
            <div class="flex items-center justify-between w-full pb-4">
              <div
                v-if="$page.strapi.notes[0].updated_at"
                class="text-base opacity-50"
              >
                updated:
                {{ $page.strapi.notes[0].updated_at | dateFormat }}
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
    </div>
  </Note>
</template>
<page-query>
  query ($slug: String!) {
    strapi {
      notes(where: { slug: $slug }) {
        slug
        name
        content
        updated_at
        usefulLinks {
          id
          title
          url
          resource
        }
        similar {
          id
          name
          slug
        }
      }
	  }
  }
</page-query>
<script>
import Note from "~/layouts/Note";
import moment from "moment";
import VueMarkdown from "vue-markdown";
import YandexShare from "~/components/atoms/YandexShare";

// Resources Icons
import IconNpm from "~/assets/svg/icon-npm.svg?inline";
import IconGithub from "~/assets/svg/icon-github.svg?inline";

export default {
  components: {
    IconNpm,
    IconGithub,
    VueMarkdown,
    YandexShare,
  },
  filters: {
    dateFormat(date) {
      return moment(date).format("DD.MM.YYYY");
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
      meta: [
        {
          name: "description",
          content: this.$page.strapi.articles[0].Seo.metaDescription,
        },
        {
          property: "og:title",
          content: this.$page.strapi.articles[0].Seo.metaTitle,
        },
        {
          property: "og:description",
          content: this.$page.strapi.articles[0].Seo.metaDescription,
        },
        //   {
        //     property: "og:image",
        //     content: this.$page.strapi.articles[0].Seo.shareImage.image.url,
        //   },
      ],
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
  @apply bg-blue-900 text-white overflow-x-auto px-6 py-4 rounded-md mb-4 text-code font-monospace;
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
