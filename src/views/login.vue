<template>
  <v-container fluid fill-height class="justify-center align-content-start card__">
    <v-card width="320" class="rounded-lg pa-3" flat tile>
      <v-card-title primary-title class="d-flex justify-center text-h5 mb-2"> InStorage </v-card-title>
      <v-card-text class="text__">
        <v-text-field
          filled
          outlined
          dense
          v-model="login"
          hide-details=""
          class="rounded-lg"
          placeholder="Пользователь"
          id="login"></v-text-field>
        <v-text-field
          filled
          outlined
          hide-details=""
          v-model="password"
          dense
          class="rounded-lg"
          placeholder="Пароль"
          type="password"
          id="pass"></v-text-field>
        <v-button :loading="loading" width="100%" color="primary" classes="" @click="enter()">Вход</v-button>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
  import vButton from "../controls/v-button.vue";
  export default {
    name: "login",
    components: {
      vButton,
    },
    methods: {
      async enter() {
        this.loading = true;
        const responce = await this.$store.dispatch("user/login", {
          login: this.login,
          password: this.password,
        });
        this.loading = false;

        if (responce.user) {
          this.$store.commit("user/update", responce);
          this.$router.push("/storage").catch(() => {});
        }
      },
    },
    data() {
      return {
        loading: false,
        login: "",
        password: "",
      };
    },
  };
</script>
<style>
  .card__ {
    padding-top: 144px;
  }
  .text__ {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
