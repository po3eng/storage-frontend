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
        <unit-item @click="edit(unit)" v-for="(unit, i) of searchedItems" :key="i" :unit="unit"></unit-item>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="400">
      <v-card class="rounded-lg">
        <v-card-title>
          {{ editUnit.id > 0 ? "Редактирование" : "Новое подразделение" }}
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                v-model="editUnit.name"
                placeholder="Наименование"
                class="rounded-lg"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                placeholder="Коэффициент"
                v-model="editUnit.coef"
                class="rounded-lg"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-button v-if="editUnit.id > 0" dark color="danger" @click="remove">Удалить</v-button>
          <v-button @click="dialog = false">Отмена</v-button>
          <v-button @click="save()" color="primary">Сохранить</v-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import vButton from "@/controls/v-button.vue";
  import unitItem from "./unit-item.vue";
  export default {
    name: "units",

    async mounted() {
      // перенести в главный загрузчик !
      this.$store.dispatch("units/fetchUnits");
    },

    computed: {
      units() {
        return this.$store.getters["units/getUnits"];
      },
      searchedItems() {
        if (!this.search) return this.units;
        return this.units.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
      },
    },
    components: {
      vButton,
      unitItem,
    },
    methods: {
      remove() {
        this.dialog = false;
        this.$store.dispatch("units/deleteUnit", this.editUnit);
      },

      edit(item) {
        this.editUnit = item;
        this.dialog = true;
      },

      addListItemDialog() {
        this.editUnit = this.defaultUnit;
        this.dialog = true;
      },
      save() {
        this.editUnit.id > 0
          ? this.$store.dispatch("units/updateUnit", this.editUnit)
          : this.$store.dispatch("units/createUnit", this.editUnit);
        this.dialog = false;
      },
    },
    data() {
      return {
        editUnit: {
          name: "",
          coef: "",
        },
        defaultUnit: {
          name: "",
          coef: "",
        },
        dialog: false,
        search: "",
      };
    },
  };
</script>
<style lang=""></style>
