<template>
  <v-app-bar dense app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-btn width="175" elevation="0" class="rounded" color="primary">InStorage</v-btn>
      <v-app-bar-title class="title pr-4"></v-app-bar-title>
      <v-btn v-for="(rout, i) in links" :key="i" :to="rout.path" text>
        {{ rout.meta.title }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu rounded="b-lg" bottom left min-width="200px" nudge-bottom="10" offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn v-bind="attrs" v-on="on" small icon>
            <v-avatar size="32" color="primary">
              <span class="white--text text-button">{{ initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list dense>
            <v-list-item link v-for="(item, i) in items" :key="i" @click="item.method">
              <v-list-item-icon>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>
<script>
  // TODO: Декомпозировать !
  // [ ]  нав меню - в компонент
  // [ ] меню пользователя - в компонент
  import { ROUTES } from "@/router/constants";
  export default {
   
    mounted() {},
    computed: {
      links() {
        let menu = [];
        for (const key in ROUTES) {
          if (ROUTES.hasOwnProperty(key)) {
            const element = ROUTES[key];
            if (element.meta.menu) {
              menu.push(element);
            }
          }
        }
        return menu;
      },
      user() {
        return this.$store.getters["user/getUser"];
      },
      initials() {
        const name = this.user.name || this.user.login;
        return (this.user.name || this.user.login).toUpperCase()[0];
      },
    },

    methods: {
      profile() {
        this.$router.push({ path: "/profile" }).catch(e => {});
      },
      exit() {
        this.$store.commit("user/logout");
        this.$router.push("/login").catch(e => {});
      },
    },
    data() {
      return {
        items: [
          {
            icon: "mdi-wrench-outline",
            text: "Профиль",
            method: () => this.profile(),
          },
          {
            icon: "mdi-run",
            text: "Выход",
            method: () => this.exit(),
          },
        ],
        model: 1,
      };
    },
  };
</script>

<style scoped>
  .title {
    padding-bottom: 2px;
  }
</style>
