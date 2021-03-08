<template>
  <div
    class="ya-share2"
    data-curtain
    data-shape="round"
    :data-size="dataSize"
    :lang="lang"
    data-color-scheme="whiteblack"
    data-limit="0"
    data-more-button-type="short"
    :data-services="dataServices"
    :data-image:pinterest="dataImage"
  ></div>
</template>
<script>
export default {
  props: ["dataSize", "dataImage"],
  data() {
    return {
      lang: "ru",
      dataServices:
        "telegram,whatsapp,viber,vkontakte,facebook,odnoklassniki,pinterest",
    };
  },
  metaInfo: {
    script: [
      {
        src: "https://yastatic.net/share2/share.js",
        async: true,
        defer: true,
      },
    ],
  },
};
</script>
<style lang="postcss">
.ya-share2__container_size_m .ya-share2__badge + .ya-share2__title {
  @apply font-body;
}
.ya-share2__container_size_m.ya-share2__container_alone
  .ya-share2__popup_direction_bottom,
.ya-share2__container_size_m
  .ya-share2__item_more.ya-share2__item_has-pretty-view
  .ya-share2__popup_direction_bottom {
  @apply pr-2;
}
.ya-share2__container_size_m
  .ya-share2__item_more.ya-share2__item_has-pretty-view
  .ya-share2__link_more.ya-share2__link_more-button-type_short {
  background: transparent !important;
}
.ya-share2__container_size_m
  .ya-share2__item_more.ya-share2__item_has-pretty-view
  .ya-share2__link_more.ya-share2__link_more-button-type_short:hover {
  background: rgba(0, 0, 0, 0.07);
}
body[data-theme="dark"] {
  & .ya-share2__icon_more {
    filter: invert();
    opacity: 0.9;
  }
  &
    .ya-share2__container_size_m
    .ya-share2__item_more.ya-share2__item_has-pretty-view
    .ya-share2__link_more.ya-share2__link_more-button-type_short {
    @apply bg-white bg-opacity-10;
  }
}
</style>