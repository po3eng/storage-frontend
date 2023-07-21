<template>
  <v-container>
    <v-card min-height="400" elevation="0" outlined class="rounded-lg">
      <v-card-title primary-title>
        <v-responsive max-width="200">
          <v-select
            item-text="name"
            item-value="id"
            filled
            dense
            v-model="filterStorageValue"
            value="filterStorageValue"
            hide-details=""
            outlined
            class="rounded-lg"
            placeholder="Склад"
            :items="filterStorages">
          </v-select>
        </v-responsive>
        <v-button title="Списать" :disabled="!selectedProducts.length" class="ml-4" height="40" color="primary"
          ><v-icon>mdi-barcode-off</v-icon>
        </v-button>
        <v-button title="Преместить" :disabled="!selectedProducts.length" class="ml-4" height="40" color="primary">
          <v-icon>mdi-chevron-double-right</v-icon>
        </v-button>
        <v-button
          title="Удалить"
          @click="showActionDialog('delete')"
          :disabled="!selectedProducts.length"
          :dark="selectedProducts.length > 0"
          class="ml-4"
          height="40"
          color="danger">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-button>
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
        <v-button title="Добавить" class="ml-4" height="40" color="primary" @click="addListItemDialog"
          ><v-icon>mdi-plus</v-icon>
        </v-button>
      </v-card-title>
      <v-card-text>
        <storage-table show-select v-model="selectedProducts" :items="filtredProducts" :search="search">
          <template v-slot:actions="{ item }">
            <v-btn small icon color="primary" @click="edit(item)">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
        </storage-table>
      </v-card-text>
    </v-card>
    <v-dialog persistent v-model="productDialog" max-width="700">
      <product-form :product="editProduct" @cancel="productDialog = false" @remove="remove" @save="save" />
    </v-dialog>
    <v-dialog persistent v-model="actionDialog" max-width="700">
      <action-form @cancel="actionDialog = false" :products="selectedProducts" />
    </v-dialog>
  </v-container>
</template>
<script>
  import productForm from "./product-form.vue";
  import actionForm from "./action-form.vue";
  import storageTable from "./storage-table.vue";
  export default {
    name: "Stortage",
    components: {
      storageTable,
      productForm,
      actionForm,
    },
    computed: {
      storages() {
        return this.$store.getters["storages/getStorages"];
      },
      filterStorages() {
        return [{ id: -1, name: "Все склады" }, ...this.storages];
      },
      products() {
        return this.$store.getters["products/getProducts"];
      },
      filtredProducts() {
        if (this.filterStorageValue > 0) {
          return this.products.filter(item => item.storage.id === this.filterStorageValue);
        }
        return this.products;
      },
    },
    methods: {
      async showActionDialog(typeAction) {
        this.actionDialog = true;
        console.log("res", typeAction);
      },

      addListItemDialog() {
        this.editProduct = { ...this.defaultProduct };
        this.productDialog = true;
      },

      edit(product) {
        this.editProduct = { ...product };
        this.productDialog = true;
      },
      save(editProduct) {
        this.editProduct = { ...editProduct };
        this.editProduct.id > 0
          ? this.$store.commit("products/setProduct", this.editProduct)
          : this.$store.commit("products/addProduct", this.editProduct);
        this.editProduct = { ...this.defaultProduct };
        this.productDialog = false;
      },
      remove() {
        this.productDialog = false;
        this.$store.commit("products/deleteProduct", this.editProduct);
      },
    },
    data() {
      return {
        editProduct: {
          id: -1,
          name: "",
          account: "",
          deviceType: -1,
          contractor: -1,
          storage: -1,
          sim_1: "",
          sim_2: "",
          count: 1,
          price: "",
          reason: "",
          object: { id: -1, name: "Нет" },
          desc: "",
          idWriteOff: false,
        },
        defaultProduct: {
          id: -1,
          name: "",
          account: "",
          deviceType: -1,
          contractor: -1,
          storage: -1,
          sim_1: "",
          sim_2: "",
          count: 1,
          price: "",
          object: { id: -1, name: "Нет" },
          reason: "",
          idWriteOff: false,
          desc: "",
        },
        search: "",
        productDialog: false,
        actionDialog: false,
        items: [],
        filterStorageValue: -1,
        selectedProducts: [],
      };
    },
    beforeMount() {},
  };
</script>
<style></style>
