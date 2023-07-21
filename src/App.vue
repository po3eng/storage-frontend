<template>
  <v-app style="height: 100%">
    <v-main>
      <notification />
      <dialogForm />
      <navbar v-if="user" />
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>
<script>
  import notification from "./components/notification";
  import dialogForm from "./components/dialog-form";
  import navbar from "./components/navbar";
  export default {
    components: {
      navbar,
      notification,
      dialogForm,
    },
    mounted() {
      this.$store.dispatch("storages/fetchStorages");
    },
    name: "App",
    computed: {
      user() {
        return this.$store.getters["user/getUser"];
      },
    },
    data() {
      return {};
    },
  };
</script>
<style>
  main {
    background-color: rgb(237, 238, 240);
  }
</style>
