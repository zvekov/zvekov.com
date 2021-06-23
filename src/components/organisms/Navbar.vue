<template>
  <ul>
    <li v-wave>
      <g-link :to="$tp('/about/')" :title="$t('atoms.links.about')">
        <AboutIcon />
        {{ $t("atoms.links.about") }}
      </g-link>
    </li>
    <li v-wave>
      <g-link :to="$tp('/contact/')" :title="$t('atoms.links.contact')">
        <ContactIcon />
        {{ $t("atoms.links.contact") }}
      </g-link>
    </li>
    <li v-wave>
      <g-link :to="$tp('/works/')" :title="$t('atoms.links.about')">
        <WorkIcon />
        {{ $t("organisms.works.title") }}
      </g-link>
    </li>
    <li v-wave>
      <g-link :to="$tp('/search/')" :title="$t('atoms.links.notes')">
        <NotesIcon />
        {{ $t("atoms.links.notes") }}
      </g-link>
    </li>
  </ul>
</template>
<script>
import AboutIcon from "~/assets/svg/about.svg?inline";
import ContactIcon from "~/assets/svg/contact.svg?inline";
import WorkIcon from "~/assets/svg/work.svg?inline";
import NotesIcon from "~/assets/svg/notes.svg?inline";

export default {
  components: {
    AboutIcon,
    ContactIcon,
    WorkIcon,
    NotesIcon,
  },
};
</script>
<style lang="postcss" scoped>
ul {
  @apply bg-white grid grid-cols-4 justify-items-center border-t fixed bottom-0 w-full;
  @screen landscape {
    @apply grid-cols-1 border-t-0 border-l right-0 w-16 h-screen;
  }
  & li {
    @apply w-full lowercase text-code;
    & > a {
      @apply flex flex-col items-center w-full pt-2 pb-1;
      @screen landscape {
        @apply p-0 h-full justify-center;
      }
      & svg {
        @apply w-8 h-8;
        @screen landscape {
          @apply mt-2;
        }
      }
      &.active {
        @apply bg-gray-300 bg-opacity-40;
      }
    }
  }
  @screen md {
    @apply hidden;
  }
}
</style>