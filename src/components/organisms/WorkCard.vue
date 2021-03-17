<template>
  <g-link
    :href="work.link"
    target="_blank"
    class="h-48"
    :class="{ hover: hover }"
    :title="work.name"
    :style="
      work.cover &&
      'background:url(' + work.cover.url + ') 50% 50%; background-size:cover'
    "
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <transition name="fade">
      <div
        v-if="hover || isMobile"
        class="w-full h-full bg-white bg-opacity-80 p-4 flex  flex-col justify-end"
      >
        <span class="font-bold text-xl text-left">{{ work.name }}</span>
        <!-- <span class="text-code">Сайт для кабинета маникюра и педикюра</span> -->
              <p v-if="work.stack" class="text-sm xs:text-xs md:text-code pb-0 text-left">{{ work.stack }}</p>
      </div>
      <!-- {{ work }} -->
    </transition>
  </g-link>
</template>
<script>
import { isMobile } from 'mobile-device-detect';
export default {
  props: ["work"],
  data() {
    return {
      hover: false,
      isMobile: isMobile ? true : false,
    };
  },
};
</script>

