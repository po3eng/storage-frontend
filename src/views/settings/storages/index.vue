<template>
  <div>
    <v-card min-height="400" elevation="0" outlined class="rounded-lg">
      <v-card-title primary-title>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field
            filled
            outlined
            dense
            v-model="search"
            hide-details=""
            class="rounded-lg"
            prepend-inner-icon="mdi-magnify">
          </v-text-field>
        </v-responsive>
        <v-button title="Добавить" class="ml-4" height="40" color="primary" @click="addListItemDialog">
          <v-icon>mdi-plus</v-icon>
        </v-button>
      </v-card-title>
      <v-card-text>
        <storage-item
          @click="edit(storage)"
          v-for="(storage, i) of searchedItems"
          :key="i"
          :storage="storage"></storage-item>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="400">
      <v-card class="rounded-lg">
        <v-card-title>
          {{ editStorage.id > 0 ? "Редактирование" : "Новый склад" }}
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row
            ><v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                v-model="editStorage.name"
                placeholder="Наименование"
                class="rounded-lg"></v-text-field> </v-col
          ></v-row>
          <v-row
            ><v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                placeholder="Адрес"
                v-model="editStorage.adres"
                class="rounded-lg"></v-text-field> </v-col
          ></v-row>
          <v-row
            ><v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                v-model="editStorage.man"
                placeholder="Ответственный"
                class="rounded-lg"></v-text-field> </v-col
          ></v-row>
          <v-row
            ><v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                v-model="editStorage.phone"
                placeholder="Телефон"
                class="rounded-lg"></v-text-field> </v-col
          ></v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-button v-if="editStorage.id > 0" dark color="danger" @click="remove">Удалить</v-button>
          <v-button @click="dialog = false">Отмена</v-button>
          <v-button @click="save()" color="primary">Сохранить</v-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import vButton from "@/controls/v-button.vue";
  import storageItem from "./storage-item.vue";
  export default {
    name: "storages",

    computed: {
      storages() {
        return this.$store.getters["storages/getStorages"];
      },
      searchedItems() {
        if (!this.search) return this.storages;
        return this.storages.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
      },
    },
    components: {
      vButton,
      storageItem,
    },
    methods: {
      remove() {
        this.dialog = false;
        this.$store.dispatch("storages/deleteStorage", this.editStorage);
      },
      edit(item) {
        this.editStorage = { ...item };
        this.dialog = true;
      },

      addListItemDialog() {
        this.editStorage = { ...this.defaultStorage };
        this.dialog = true;
      },
      save() {
        this.editStorage.id > 0
          ? this.$store.dispatch("storages/updateStorage", this.editStorage)
          : this.$store.dispatch("storages/createStorage", this.editStorage);
        this.dialog = false;
      },
    },
    data() {
      return {
        editStorage: {
          name: "",
          adres: "",
          man: "",
          phone: "",
        },
        defaultStorage: {
          name: "",
          adres: "",
          man: "",
          phone: "",
        },
        dialog: false,
        search: "",
      };
    },
  };
</script>
<style lang=""></style>
