<template>
  <ul class="navbar bg-white grid grid-cols-4 justify-items-center lowercase text-code border-t">
    <li class="w-full" v-wave>
        <g-link class="flex flex-col items-center w-full pt-2 pb-1" :to="$tp('/about/')" :title="$t('atoms.links.about')"
    >
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.042 18.217a6.684 6.684 0 00-12.084 0M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-10.043a4.065 4.065 0 100-8.13 4.065 4.065 0 000 8.13z"></path>
</svg>
    {{ $t("atoms.links.about") }}
  </g-link>
    </li>
    <li class="w-full" v-wave>
        <g-link class="flex flex-col items-center pt-2 pb-1" :to="$tp('/contact/')" :title="$t('atoms.links.contact')">
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="none"viewBox="0 0 25 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.111 1C5.76 1 .611 5.253.611 10.5a8.738 8.738 0 003.4 6.741L1.611 23l6.372-3.641c1.335.425 2.727.641 4.128.641 6.351 0 11.5-4.253 11.5-9.5S18.462 1 12.111 1z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.611 8.5a2 2 0 114 0"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.611 8.5a2 2 0 10-4 0"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.611 12a2.5 2.5 0 01-5 0"/>
</svg>

      {{ $t("atoms.links.contact") }}
        </g-link>
    </li>
        <li class="w-full" v-wave>
        <g-link class="flex flex-col items-center w-full pt-2 pb-1" :to="$tp('/works/')" :title="$t('atoms.links.about')"
    >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32px" height="32px" viewBox="0 0 24 25">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.504a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.504h10"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.504a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 3.504h-10"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 15.504a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 16.504h10"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 15.504a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 16.504h-10"/>
</svg>


     {{ $t("organisms.works.title") }}
        </g-link>
    </li>
        <li class="w-full" v-wave>
        <g-link class="flex flex-col items-center w-full pt-2 pb-1" :to="$tp('/notes/')" :title="$t('atoms.links.notes')"
    >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32px" height="32px" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 21H2a1 1 0 01-1-1V4a1 1 0 011-1h14a1 1 0 011 1v6"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5V1"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 5V1"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 5V1"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.529 21.058a4.529 4.529 0 100-9.058 4.529 4.529 0 000 9.058z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 23l-3.248-3.248"/>
</svg>


      {{ $t("atoms.links.notes") }}
        </g-link>
    </li>
  </ul>
</template>
<script>
import About from "~/components/atoms/links/About";
import Contact from "~/components/atoms/links/Contact";
import Notes from "~/components/atoms/links/Notes";
export default {
  components: {
    About,
    Contact,
    Notes,
  },
};
</script>
<style lang="postcss">
ul.navbar li > a.active {
  @apply bg-gray-300 bg-opacity-30;
}
</style>