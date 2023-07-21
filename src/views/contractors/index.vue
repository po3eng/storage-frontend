<template>
  <div>
    <v-container>
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
              prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-responsive>
          <v-button title="Добавить" class="ml-4" height="40" color="primary" @click="addListItemDialog">
            <v-icon>mdi-plus</v-icon>
          </v-button>
        </v-card-title>
        <v-card-text>
          <contractors-table :contractors="contractors" :search="search">
            <template v-slot:actions="{ item }">
              <v-btn small icon color="primary" @click="edit(item)">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
          </contractors-table>
        </v-card-text>
      </v-card>
    </v-container>

    <v-dialog v-model="dialog" max-width="600">
      <v-card class="rounded-lg">
        <v-card-title>
          {{ editContractor.id > 0 ? "Редактирование" : "Новое контрагент" }}
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
                v-model="editContractor.name"
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
                v-model="editContractor.email"
                placeholder="Почта"
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
                placeholder="Контакт"
                v-model="editContractor.contact"
                class="rounded-lg"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                item-text="text"
                item-value="id"
                filled
                return-object
                dense
                v-model="editContractor.contractorType"
                hide-details=""
                outlined
                class="rounded-lg"
                placeholder="Тип контрагента"
                :items="counterTypes">
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-autocomplete
                return-object
                item-text="name"
                item-value="code"
                filled
                dense
                v-model="editContractor.region"
                hide-details=""
                outlined
                class="rounded-lg"
                placeholder="Регион"
                :items="regions">
              </v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                filled
                outlined
                dense
                hide-details=""
                v-model="editContractor.desc"
                placeholder="Описание"
                class="rounded-lg">
              </v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-button v-if="editContractor.id > 0" dark color="danger" @click="remove">Удалить</v-button>
          <v-button @click="dialog = false">Отмена</v-button>
          <v-button @click="save()" color="primary">Сохранить</v-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import contractorsTable from "./contractors-table.vue";
  export default {
    name: "contractors",
    components: {
      contractorsTable,
    },
    computed: {
      contractors() {
        return this.$store.getters["contractors/getContractors"];
      },
      regions() {
        return this.$store.getters["contractors/getRegions"];
      },

      counterTypes() {
        return this.$store.getters["lists/getListsItem"]("counterTypes");
      },
    },
    methods: {
      addListItemDialog() {
        this.dialog = true;
        this.editContractor = { ...this.defaultContractor };
      },
      edit(contractor) {
        this.editContractor = { ...contractor };
        this.dialog = true;
      },
      save() {
        this.editContractor.id > 0
          ? this.$store.commit("contractors/setContractor", this.editContractor)
          : this.$store.commit("contractors/`", this.editContractor);
        this.editContractor = { ...this.defaultContractor };
        this.dialog = false;
      },

      remove() {
        this.dialog = false;
        this.$store.dispatch("contractors/≤", this.editContractor);
      },
    },
    data() {
      return {
        search: "",
        dialog: false,
        editContractor: {
          id: -1,
          name: "",
          email: "",
          contact: "",
          region: "",
          contractorType: -1,
          desc: "",
          files: [],
        },
        defaultContractor: {
          id: -1,
          name: "",
          email: "",
          contact: "",
          region: "",
          contractorType: -1,
          desc: "",
          files: [],
        },
      };
    },
  };
</script>
<style lang=""></style>
