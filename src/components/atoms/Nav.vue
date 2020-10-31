<template>
  <nav id="nav">
    <ul class="menu flex flex-col lg:flex-row items-center list-reset relative">
      <li class="px-8 mb-4 md:mb-0 py-1" @mouseleave="hover = false">
        <a
          class="link text-lg font-medium hover:opacity-50 cursor-pointer"
          title="Услуги"
          @mouseover="hover = true"
        >
          Направления
        </a>
        <transition name="swing-in-top-fwd">
          <div v-if="hover" :class="{ active: hover }" class="submenu">
            <div class="p-4 w-1/2">
              <g-link class="flex flex-col items-center" to="/body-shaping/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  viewBox="0 0 150 150"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.375 3.125C0 12.5 1.481 33.125 15.625 43.75c12.5 9.375 18.75 15.625 18.75 40.625S3.125 125 3.125 146.875M140.625 3.125c9.375 9.375 7.894 30-6.25 40.625-12.5 9.375-18.75 15.625-18.75 40.625s31.25 40.625 31.25 62.5"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M26.25 53.125c21.875 0 26.875-9.375 48.75-9.375s20.625 9.375 48.75 9.375M14.713 121.875c15.624 0 38.412 12.5 60.287 12.5s44.663-12.5 60.288-12.5M75 112.5v3.125M62.5 3.125C68.75 3.125 75 12.5 75 12.5a13.931 13.931 0 0112.5-9.375"
                  />
                </svg>
                <p class="pt-4">Коррекция фигуры</p>
              </g-link>
            </div>
            <div class="p-4 w-1/2">
              <g-link class="flex flex-col items-center" to="/sport-eating/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  viewBox="0 0 150 150"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6.25 96.875h12.5c1.726 0 3.125 1.4 3.125 3.125v37.5a9.375 9.375 0 01-9.375 9.375v0a9.375 9.375 0 01-9.375-9.375V100c0-1.726 1.4-3.125 3.125-3.125z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.125 109.375h18.75M3.125 121.875h18.75"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M143.75 53.125h-12.5A3.125 3.125 0 01128.125 50V12.5a9.375 9.375 0 019.375-9.375v0a9.375 9.375 0 019.375 9.375V50a3.125 3.125 0 01-3.125 3.125z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M146.875 40.625h-18.75M146.875 28.125h-18.75M137.5 53.125v62.5c0 17.259-13.991 31.25-31.25 31.25S75 132.884 75 115.625v-81.25c0-17.259-13.991-31.25-31.25-31.25S12.5 17.116 12.5 34.375v62.5"
                  />
                </svg>
                <p class="pt-4">Спортивное питание</p>
              </g-link>
            </div>
            <div class="p-4 w-1/2">
              <g-link class="flex flex-col items-center" to="/cosmetics/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  viewBox="0 0 150 150"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M84.013 30.081a25 25 0 0132.82 32.542A25 25 0 0193.75 78.125M96.875 3.125V12.5M131.318 18.681l-8.843 8.838M146.875 53.125h-12.5M131.318 90.625l-8.843-8.837M96.875 103.125V93.75M53.125 46.875l-5.462-13.663a3.125 3.125 0 00-2.907-1.962h-8.262a3.125 3.125 0 00-2.907 1.962l-5.462 13.663M40.625 9.375V31.25M62.5 9.375H21.694a6.25 6.25 0 00-4.819 2.275L5.856 25"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.625 84.875a.5.5 0 01.5-.5h49a.5.5 0 01.5.5v30.25a.5.5 0 01-.5.5h-49a.5.5 0 01-.5-.5v-30.25z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.625 46.875h50c6.904 0 12.5 5.596 12.5 12.5v75c0 6.904-5.596 12.5-12.5 12.5h-50c-6.904 0-12.5-5.596-12.5-12.5v-75c0-6.904 5.596-12.5 12.5-12.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="pt-4">Косметика</p>
              </g-link>
            </div>
            <div class="p-4 w-1/2">
              <g-link class="flex flex-col items-center" to="/healthy-eating/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  viewBox="0 0 150 150"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.125 90.625c0 31.062 31.25 56.25 71.875 56.25s71.875-25.188 71.875-56.25H3.125z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M62.644 68.519a13.75 13.75 0 00-9.15-7.2 14.075 14.075 0 00-13.319-15.2A16.532 16.532 0 0020.25 33.306a16.537 16.537 0 00-10 21.463 13.669 13.669 0 00-5.319 15.5 15 15 0 002.163 4.469 12.668 12.668 0 00-2.463 3.387"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M99.525 38.913a17.05 17.05 0 00-13.9-16.413A20.425 20.425 0 0063.587 3.281 20.431 20.431 0 0047.5 27.713a16.356 16.356 0 00-9.375 13.437"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M134.756 78.125a15.245 15.245 0 007.269-21.656 14.074 14.074 0 001.094-20.188 16.53 16.53 0 00-5.3-23.087 16.53 16.53 0 00-22.163 8.356 14.28 14.28 0 00-16.43 14.781M63.95 78.125a18.75 18.75 0 1134.6 0"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M94.744 57.775a16.819 16.819 0 011.619-2.5 16.163 16.163 0 1122.419 22.85M28.125 58.375v0a37.25 37.25 0 016.25 19.75M65.625 24l.444 1.119a81.252 81.252 0 015.806 28.956"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M128.125 33.375v0a94.556 94.556 0 00-13.213 16.694"
                  />
                </svg>
                <p class="pt-4">Здоровое питание</p>
              </g-link>
            </div>
          </div>
        </transition>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <a
          v-if="home"
          href="/#reviews"
          v-scroll-to="'#reviews'"
          class="link text-lg font-medium hover:opacity-50"
          title="Отзывы"
        >
          Отзывы
        </a>
        <g-link
          v-if="!home"
          to="/#reviews"
          class="link text-lg font-medium hover:opacity-50"
          title="Отзывы"
        >
          Отзывы
        </g-link>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <a
          v-if="home"
          href="/#about"
          v-scroll-to="'#about'"
          class="link text-lg font-medium hover:opacity-50"
          title="О партнере"
        >
          О партнере
        </a>
        <g-link
          v-if="!home"
          to="/#about"
          class="link text-lg font-medium hover:opacity-50"
          title="О партнере"
        >
          О партнере
        </g-link>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <g-link
          to="/catalog/"
          class="link text-lg font-medium hover:opacity-50"
          title="Каталог продукции"
        >
          Каталог
        </g-link>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <g-link
          to="/blog/"
          class="link text-lg font-medium hover:opacity-50"
          title="Блог"
        >
          Блог
        </g-link>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <g-link
          to="/news/"
          class="link text-lg font-medium hover:opacity-50"
          title="Новости"
        >
          Новости
        </g-link>
      </li>
      <li class="px-8 mb-4 md:mb-0 py-1">
        <a
          href="/#contact"
          v-scroll-to="'#contact'"
          class="link text-lg font-medium hover:opacity-50"
          title="Контакты"
        >
          Контакты
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    home() {
      return this.$route.path === "/" ? true : false;
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style lang="postcss" scoped>
svg {
  filter: drop-shadow(0px 4px 4px rgba(122, 193, 67, 0.44));
}
.submenu {
  @apply mt-0 p-6 bg-white z-50 flex flex-wrap absolute left-0 mx-4;
  box-shadow: 2px 0px 75px rgba(0, 0, 0, 0.1);
  width: 26rem;
  border-radius: 0.5rem;
}
.swing-in-top-fwd-enter-active {
  animation: swing-in-top-fwd 0.3s;
}
.swing-in-top-fwd-leave-active {
  animation: swing-in-top-fwd 0.1s reverse;
}
@keyframes swing-in-top-fwd {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}

#nav ul li {
  @apply relative;
}
#nav ul li::after {
  content: "";
  right: 0;
  height: 40%;
  bottom: 30%;
  width: 1px;
  background: #ddd;
  position: absolute;
}
#nav ul li:last-child:after {
  @apply hidden;
}
</style>
