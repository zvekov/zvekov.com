<template>
  <Homepage>
    <div
      class="flex flex-col items-center justify-center w-full h-screen m-auto"
    >
      <span>
        <g-image src="~/assets/img/logo.jpg" :alt="$t('atoms.name')" />
      </span>
      <Name class="text-xl xs:text-2xl font-semibold pt-2" />
      <Profession class="pb-4 text-base xs:text-lg" />
      <Navigation class="lowercase flex text-base xs:text-lg" />
      <div class="fixed bottom-0 right-0 pr-4 pb-3">
        <Pogonya />
      </div>
    </div>
  </Homepage>
</template>
<script>
import Pogonya from "@/components/atoms/Pogonya"
import Logo from "@/components/atoms/Logo"
import Name from "@/components/atoms/Name"
import Profession from "@/components/atoms/Profession"
import Navigation from "@/components/molecules/Navigation"
export default {
  components: {
    Logo,
    Name,
    Profession,
    Navigation,
    Pogonya,
  },
  metaInfo() {
    return {
      title: this.$t("atoms.name"),
      titleTemplate: "%s: " + this.$t("atoms.profession"),
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
          content: this.$t("atoms.name") + ": " + this.$t("atoms.profession"),
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
    }
  },
  // jsonld() {
  //   return {
  //     "@context": "http://www.schema.org",
  //     "@type": "person",
  //     name: this.$t("atoms.name"),
  //     jobTitle: this.$t("atoms.profession"),
  //     height: this.$t("height"),
  //     gender: this.$t("gender"),
  //     url: "https://zvekov.com",
  //     sameAs: [
  //       "https://www.facebook.com/zvekau/",
  //       "https://twitter.com/zvekau/",
  //       "https://www.instagram.com/zvekov/",
  //       "https://vk.com/zvekau/",
  //       "https://ok.ru/zvekov/",
  //     ],
  //     image: "https://zvekov.com/assets/img/logo.jpg",
  //     address: {
  //       "@type": "PostalAddress",
  //       addressLocality: this.$t("city"),
  //       addressRegion: this.$t("region"),
  //       postalCode: "247210",
  //       addressCountry: this.$t("country"),
  //     },
  //     email: "hey@zvekov.com",
  //     birthDate: "1993-09-09",
  //     birthPlace: this.$t("bithplace"),
  //     nationality: this.$t("nationality"),
  //     telephone: "+375 (33) 604-54-54",
  //   }
  // },
}
</script>
<style scoped>
img {
  @apply rounded-full border-4;
  max-width: 9rem;
  max-height: 9rem;
  border-color: #34485c;
}
</style>
