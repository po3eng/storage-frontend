<template>
  <v-snackbar :value="true" :color="notification.type" class="rounded-lg" v-model="show">
    {{ notification.text }}
    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
  import vButton from "@/controls/v-button.vue";
  export default {
    components: { vButton },
    name: "notification",
    computed: {
      show: {
        get() {
          return Boolean(this.notification.text.length);
        },
        set() {
          this.$store.dispatch("notification/hideNotification");
        },
      },
      notification() {
        return this.$store.getters["notification/get"];
      },
    },
    methods: {
      close() {
        this.$store.dispatch("notification/hideNotification");
      },
    },
  };
</script>
<style></style>
