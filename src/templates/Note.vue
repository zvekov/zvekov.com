<!-- eslint-disable vue/no-v-html -->
<template>
  <Note>
    <div class="flex flex-wrap">
      <div
        class="order-2 w-full max-w-2xl px-6 pb-4 mx-auto lowercase other-links"
      >
        <div v-if="$page.strapi.notes[0].usefulLinks.length > 0" class="pb-4">
          <div class="font-black">Useful Links</div>
          <ul>
            <li
              v-for="link in $page.strapi.notes[0].usefulLinks"
              v-bind:key="link.id"
              class="opacity-50 hover:opacity-100"
            >
              <a
                :href="link.url"
                target="_blank"
                class="flex items-center text-lg hover:text-red-700 lg:text-base"
              >
                <span
                  v-if="link.resource == 'github'"
                  class="flex justify-end w-6 mr-2"
                >
                  <IconGithub class="w-4 h-4 mt-0 filter-grayscale" />
                </span>
                <span
                  v-if="link.resource == 'npm'"
                  class="flex justify-end w-6 mr-2"
                >
                  <IconNpm class="w-6 h-6 mt-1 filter-grayscale" />
                </span>
                <span v-if="link.resource == 'bitbucket'"> bitbucketicon </span>
                <span v-if="link.resource == 'codepen'"> codepenicon </span>
                <span
                  v-if="link.resource == 'link'"
                  class="flex justify-end w-6 mr-2"
                >
                  <IconLink class="w-4 h-3 filter-grayscale" />
                </span>
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>
        <div
          v-if="
            $page.strapi.notes[0].similars.length > 0 ||
            $page.strapi.notes[0].notes.length > 0
          "
          class=""
        >
          <div class="font-black" v-if="$page.strapi.notes[0].similars">
            Similar Notes
          </div>
          <ul>
            <li
              v-for="note in $page.strapi.notes[0].similars"
              v-bind:key="note.id"
              class="lg:opacity-50 lg:hover:opacity-100"
            >
              <g-link
                :to="'/notes/' + note.slug + '/'"
                class="flex items-center hover:text-red-700 lg:text-base"
              >
                {{ note.name }}
              </g-link>
            </li>
            <li
              v-for="note in $page.strapi.notes[0].notes"
              v-bind:key="note.id"
              class="lg:opacity-50 lg:hover:opacity-100"
            >
              <g-link
                :to="'/notes/' + note.slug"
                class="flex items-center hover:text-red-700 lg:text-base"
              >
                {{ note.name }}
              </g-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-1 w-full max-w-2xl mx-auto">
        <section class="px-4">
          <div class="flex flex-wrap">
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
        description
        usefulLinks {
          id
          title
          url
          resource
        }
        similars {
          id
          name
          slug
        }
        notes {
          id
          name
          slug
        }
      }
	  }
  }
</page-query>
<script>
import moment from "moment";
import VueMarkdown from "vue-markdown";
import YandexShare from "~/components/atoms/YandexShare";

// Resources Icons
import IconNpm from "~/assets/svg/icon-npm.svg?inline";
import IconGithub from "~/assets/svg/icon-github.svg?inline";
import IconLink from "~/assets/svg/icon-link.svg?inline";

export default {
  layout: "Note",
  components: {
    IconNpm,
    IconGithub,
    IconLink,
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
          content: this.$page.strapi.notes[0].description,
        },
        {
          property: "og:title",
          content: this.$page.strapi.notes[0].name,
        },
        {
          property: "og:description",
          content: this.$page.strapi.notes[0].description,
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
@screen xl {
  .other-links {
    @apply pt-16 left-0 fixed w-auto;
    margin-left: calc(50% + 21rem);
  }
}
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
