// Import Global Layouts
import DefaultLayout from "~/layouts/Default.vue"
import FullscreenLayout from "~/layouts/Fullscreen.vue"
import HomepageLayout from "~/layouts/Homepage.vue"
import NoteLayout from "~/layouts/Note.vue"

// Import Global Styles
import "~/assets/scss/main.scss"

// Import Global Plugins
import VueScrollTo from "vue-scrollto"
import InstantSearch from 'vue-instantsearch';

export default function (Vue, { router, head, isClient ,appOptions }) {

  // Set Layouts & Components
  Vue.component("Layout", DefaultLayout)
  Vue.component("Fullscreen", FullscreenLayout)
  Vue.component("Homepage", HomepageLayout)
  Vue.component("Note", NoteLayout)

  // Set Plugins
  Vue.use(InstantSearch);
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  // Set Head Attributes
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

  // Global Requires
}
