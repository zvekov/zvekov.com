<template>
  <Homepage>
    <div
      class="flex flex-col items-center justify-center w-full h-screen m-auto"
    >
      <span>
        <g-image src="~/assets/img/logo.jpg" :alt="$t('atoms.name')" />
      </span>
      <h1 class="text-xl font-semibold autpt-2 xs:text-2xl name">
        {{ $t("atoms.name") }}
      </h1>
      <Profession class="pb-4 text-base xs:text-lg" />
      <Navigation class="flex text-base lowercase xs:text-lg" />
      <div class="fixed bottom-0 right-0 pb-3 pr-4">
        <Pogonya />
      </div>
    </div>
  </Homepage>
</template>
<script>
import Homepage from "~/layouts/Homepage.vue";
import Pogonya from "@/components/atoms/Pogonya";
import Logo from "@/components/atoms/Logo";
import Profession from "@/components/atoms/Profession";
import Navigation from "@/components/molecules/Navigation";
export default {
  components: {
    Homepage,
    Logo,
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
    };
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
};
</script>
<style scoped>
img {
  @apply rounded-full border-4;
  max-width: 9rem;
  max-height: 9rem;
  border-color: #34485c;
}
</style>
