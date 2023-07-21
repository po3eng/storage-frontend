<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="3">
        <v-card elevation="0" outlined class="rounded-lg">
          <v-card-text class="pt-2 pb-2">
            <v-list dense>
              <v-list-item-group v-model="selectList">
                <v-list-item v-for="(item, i) in settingsMenu" :key="i" @click="setActiveMenu(item)">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="9">
        <component :is="activeMenu" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import storages from "./storages";
  import units from "./units";
  export default {
    components: {
      storages,
      units,
    },
    beforeMount() {
    },
    methods: {
      setActiveMenu(item) {
        this.activeMenu = item.component;
      },
    },
    data() {
      return {
        search: "",
        selectList: 0,
        activeMenu: "storages",
        settingsMenu: [
          {
            id: 1,
            icon: "mdi-dns-outline",
            text: "Склады",
            component: "storages",
          },
          {
            id: 2,
            icon: "mdi-wifi",
            text: "Подразделения",
            component: "units",
          },
        ],
      };
    },
  };
</script>
<style></style>
