<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-2xl mx-auto">
    <section class="px-4">
      <div v-for="note in notes" :key="note.slug" class="flex flex-wrap pb-16">
        <h1 class="text-2xl font-bold">{{ note.name }}</h1>
        <div v-if="note.published_at" class="pb-4 w-full opacity-50">
          {{ note.published_at | dateFormat }}
        </div>
        <div
          v-if="note.content"
          v-once
          class="pb-4 w-full content"
          v-html="$md.render(note.content)"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import noteQuery from '@/apollo/queries/note/note'
export default {
  // layout: 'fullscreen',
  nuxtI18n: false,
  filters: {
    dateFormat(date) {
      return moment(date).format('DD MMMM YYYY')
    },
  },
  data() {
    return {
      notes: {},
      api_url: process.env.API_URL,
      breadcrumbs: [
        {
          url: process.env.APP_URL,
          text: this.$t('homepage'),
        },
        {
          url: process.env.APP_URL + '/notes/',
          text: this.$t('atoms.links.notes'),
        },
        {
          url: process.env.APP_URL + this.$route.path,
          // text: this.notes[0] && this.notes[0].name,
        },
      ],
    }
  },
  apollo: {
    notes: {
      prefetch: true,
      query: noteQuery,
      variables() {
        const params = this.$route.params
        return {
          slug: params.slug,
        }
      },
    },
  },
  head() {
    return {
      title: this.notes[0] && this.notes[0].name,
      titleTemplate: '%s – ' + this.$t('pages.notes.title'),
    }
  },
  jsonld() {
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.text,
      },
    }))
    return {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    }
  },
}
</script>
<style lang="postcss">
/* img {
  width: 20rem;
} */
.hljs {
  @apply mt-2 mb-4 w-full z-0 relative font-monospace;
  font-size: 14px;
  border-radius: 0.5rem;
  overflow-x: auto;
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
