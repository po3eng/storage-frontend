<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="4">
        <v-card elevation="0" outlined class="rounded-lg">
          <v-card-title primary-title>
            <v-responsive max-width="360">
              <v-text-field
                filled
                outlined
                dense
                hide-details=""
                v-model="searchList"
                class="rounded-lg"
                prepend-inner-icon="mdi-magnify"
                id="login"></v-text-field>
            </v-responsive>
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item-group v-model="selectedList" @change="selectList">
                <v-list-item v-for="(item, i) in searchedLists" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card elevation="0" outlined class="rounded-lg">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <v-responsive max-width="260">
              <v-text-field
                filled
                outlined
                dense
                v-model="searchItem"
                hide-details=""
                class="rounded-lg"
                prepend-inner-icon="mdi-magnify">
              </v-text-field>
            </v-responsive>
            <v-button title="Добавить" class="ml-4" height="40" color="primary" @click="addListItem">
              <v-icon>mdi-plus</v-icon>
            </v-button>
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item-group v-model="selectedListItem">
                <v-list-item v-for="(item, i) in searchedItems" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                  <!-- <v-list-item-action>
                    <v-btn x-small icon @click="deleteItem(item.id)">
                      <v-icon color="grey lighten-1">mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-action> -->
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogItem" max-width="400">
      <v-card class="rounded-lg">
        <v-card-title>
          Новый элемент
          <v-spacer></v-spacer>
          <v-btn icon @click="dialogItem = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            filled
            outlined
            dense
            v-model="newItem"
            hide-details=""
            class="rounded-lg"
            id="login"></v-text-field
        ></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-button @click="dialogItem = false">Отмена</v-button>
          <v-button color="primary" @click.prevent="saveItem()">Сохранить</v-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  import vButton from "../controls/v-button.vue";

  export default {
    name: "lists",
    components: {
      vButton,
    },
    mounted() {
      this.selectList(0);
    },
    computed: {
      lists() {
        return this.$store.getters["lists/getLists"];
      },
      searchedItems() {
        if (!this.searchItem) return this.seletedItems;
        return this.seletedItems.filter(item => item.text.toLowerCase().indexOf(this.searchItem.toLowerCase()) !== -1);
      },
      searchedLists() {
        if (!this.searchList) return this.lists;
        return this.lists.filter(item => item.text.toLowerCase().indexOf(this.searchList.toLowerCase()) !== -1);
      },
    },
    methods: {
      saveItem() {
        this.dialogItem = false;
        this.$store.commit("lists/updateLists", { selectedList: this.selectedList, text: this.newItem });
        this.newItem = "";
      },
      deleteItem(id) {
        this.$store.commit("lists/deleteItem", { selectedList: this.selectedList, id });
      },
      selectList(e) {
        this.searchItem = "";
        this.selectedListItem = 0;
        this.seletedItems = this.lists[e].items;
      },
      addList(e) {},
      addListItem(e) {
        this.dialogItem = true;
        this.newItem = "";
      },
    },
    data() {
      return {
        searchItem: "",
        searchList: "",
        defaultList: { text: "", items: [] },
        newList: { text: "", items: [] },
        newItem: "",
        selectedList: 0,
        selectedListItem: 0,
        seletedItems: [],
        dialogItem: false,
      };
    },
  };
</script>
<style scoped></style>
