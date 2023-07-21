<template>
  <v-btn elevation="0" :class="classList" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
  export default {
    name: "v-button",
    props: {
      classes: {
        type: String,
      },
      text: { type: String, default: "Кнопка" },
    },
    computed: {
      classList() {
        return `rounded-lg ${this.classes}`;
      },
    },
  };
</script>
<style></style>
