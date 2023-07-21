<template lang="">
  <v-card class="rounded-lg">
    <v-card-title>
      {{ editProduct.id > 0 ? "Редактирование" : "Добавить" }}
      <v-spacer></v-spacer>
      <v-btn icon @click="cancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.name"
            placeholder="Наименование"
            class="rounded-lg"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.account"
            placeholder="Счет"
            class="rounded-lg"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            item-text="text"
            item-value="id"
            filled
            return-object
            dense
            v-model="editProduct.deviceType"
            hide-details=""
            outlined
            class="rounded-lg"
            placeholder="Тип оборудования"
            :items="deviceTypes">
          </v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            item-text="name"
            item-value="id"
            filled
            return-object
            dense
            v-model="editProduct.contractor"
            hide-details=""
            outlined
            placeholder="Собственник"
            class="rounded-lg"
            :items="contractors">
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.sim_1"
            placeholder="Сим 1"
            class="rounded-lg"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.sim_2"
            placeholder="Сим 2"
            class="rounded-lg"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            type="Number"
            min="0"
            v-model="editProduct.count"
            placeholder="Количество"
            class="rounded-lg"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            item-text="name"
            item-value="id"
            filled
            return-object
            dense
            v-model="editProduct.storage"
            hide-details=""
            outlined
            class="rounded-lg"
            placeholder="Склад"
            :disabled="editProduct.id > 0"
            :items="storages">
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.price"
            placeholder="Стоимость"
            class="rounded-lg"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            item-text="name"
            item-value="id"
            filled
            return-object
            dense
            v-model="editProduct.object"
            hide-details=""
            outlined
            placeholder="ТС"
            class="rounded-lg"
            :items="objects">
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="false">
          <v-textarea
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.reason"
            placeholder="Основания списания"
            class="rounded-lg">
          </v-textarea>
        </v-col>
        <v-col>
          <v-textarea
            filled
            outlined
            dense
            hide-details=""
            v-model="editProduct.desc"
            placeholder="Примечание"
            class="rounded-lg">
          </v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-button v-if="editProduct.id > 0" dark color="danger" @click="remove">Удалить</v-button>
      <v-button @click="cancel">Отмена</v-button>
      <v-button @click="save" color="primary">Сохранить</v-button>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "product-form",
    props: {
      product: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      contractors() {
        return this.$store.getters["contractors/getContractors"];
      },
      deviceTypes() {
        return this.$store.getters["lists/getListsItem"]("deviceTypes");
      },
      storages() {
        return this.$store.getters["storages/getStorages"];
      },
      editProduct() {
        return { ...this.product };
      },
      objects() {
        return [
          { id: -1, name: "Нет" },
          { id: 1, name: "МАЗ и123ии63" },
        ];
      },
    },
    methods: {
      save() {
        this.$emit("save", this.editProduct);
      },
      cancel() {
        this.$emit("cancel", false);
      },
      remove() {
        this.$emit("remove", this.editProduct);
      },
    },
  };
</script>
<style lang=""></style>
