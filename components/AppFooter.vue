<template>
  <footer :class="footer.root">
    <a href="https://wakatime.com/@b4c85a5e-1977-4c82-8f69-188ee9bb7c71" target="_blank" rel="nofollow noopener">
      <img
          src="https://wakatime.com/badge/user/b4c85a5e-1977-4c82-8f69-188ee9bb7c71.svg"
          alt="Total time coded since Jan 4 2020"/>
    </a>
    <span>Current location: Denpasar, Indonesia</span>
  </footer>
</template>

<style module="footer">
.root {
  @apply w-full flex justify-center p-3 text-[10px] text-center flex-col;

  & a {
    @apply opacity-40 hover:opacity-100 transition-all mx-auto mb-1 h-5;
  }

  & span {
    @apply opacity-40;
  }
}
</style>