<template>
  <g-link
    :class="'col-span-' + stackGridCol"
    :to="stack.link"
    :title="stackTitle"
    v-html="stack.svgIcon"
  />
</template>
<script>
export default {
  props: ["stack"],
  computed: {
    stackTitle() {
      return this.stack.name + " – " + this.stack.description;
    },
    stackGridCol() {
      const gridCol = this.stack.gridCol;
      if (gridCol === "one") return "1";
      if (gridCol === "two") return "2";
      if (gridCol === "three") return "3";
      else return "auto";
    },
  },
};
</script>

