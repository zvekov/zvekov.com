<template>
  <a class="flex items-center" href="/#contact" v-scroll-to="'#contact'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M25.375 12.16c0 7.524-8.605 14.57-10.507 16.034a.604.604 0 01-.736 0c-1.901-1.463-10.507-8.51-10.507-16.035C3.625 5.821 8.16.68 14.5.68s10.875 5.14 10.875 11.48z"
        clip-rule="evenodd"
      />
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.5 17.597a6.042 6.042 0 100-12.083 6.042 6.042 0 000 12.083z"
        clip-rule="evenodd"
      />
    </svg>

    <div class="flex flex-col pl-2 pt-2">
      <span class="font-bold text-lg leading-4">Клуб ЗОЖ «Фристайл» </span>
      <span class="text-xs">г. Жлобин, ул. Первомайская 5</span>
    </div>
  </a>
</template>
<style lang="postcss" scoped>
header a > div {
  @apply hidden;
}
header a > svg {
  padding: 0.0625rem;
}
@screen lg {
  header a > div {
    @apply flex;
  }
  header a > svg {
    padding: 0;
  }
}
</style>