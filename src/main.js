// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue"
import FullscreenLayout from "~/layouts/Fullscreen.vue"
import HomepageLayout from "~/layouts/Homepage.vue"
import Note from "~/layouts/Note.vue"
import VueScrollTo from "vue-scrollto"
import vSelect from "vue-select"
import "~/assets/scss/main.scss"

import InstantSearch from 'vue-instantsearch';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.component("Fullscreen", FullscreenLayout)
  Vue.component("Homepage", HomepageLayout)
  Vue.component("Note", Note)
  Vue.component("v-select", vSelect)

  // Vue.use(VueTheMask)

  Vue.use(InstantSearch);
  
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "ru", class: "min-h-full antialiased" }

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap",
  })
  head.meta.push({
    name: "yandex-verification",
    content: "956d0ec38a279dcf",
  })
}
