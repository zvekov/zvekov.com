<template>
  <g-link class="flex items-center" href="tel:+375333876625">
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
        d="M12.358 10.909a1.873 1.873 0 00.138-2.636l-1.872-1.869a1.87 1.87 0 00-2.636.14l-1.14 1.139a2.88 2.88 0 00-.537 3.535c2.93 4.63 6.85 8.55 11.48 11.48a2.88 2.88 0 003.534-.536l1.14-1.14c.764-.692.825-1.87.138-2.637l-1.872-1.872a1.872 1.872 0 00-2.634.138l-.695.693a37.767 37.767 0 01-5.738-5.744l.694-.691z"
        clip-rule="evenodd"
      />
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 21.75c.604.604 1.885 6.646-7.25 6.646a13.896 13.896 0 1111.465-6.042"
      />
    </svg>
    <div class="flex flex-col pl-2 pt-2">
      <span class="font-bold text-lg leading-4">+375 33 387-66-25</span>
      <span class="lowercase text-xs">Предварительная запись</span>
    </div>
  </g-link>
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
