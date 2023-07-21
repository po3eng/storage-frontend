<template>
  <div>
    <v-data-table
      v-model="selectedItems"
      v-bind="$attrs"
      v-on="$listeners"
      :headers="headers"
      :search="search"
      :items="items"
      :items-per-page="15"
      class="elevation-0">
      <template v-slot:[`item.actions`]="{ item }">
        <slot :item="item" name="actions"></slot>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: "productsTable",
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      value: {
        type: Array,
        default: () => [],
      },
      search: {
        type: String,
        default: () => "",
      },
    },
    computed: {
    
      selectedItems: {
        get() {
          return this.selected;
        },
        set(e) {
          this.$emit("input", e);
        },
      },
    },
    data() {
      return {
        headers: [
          {
            text: "Компания",
            align: "start",
            sortable: false,
            value: "name",
          },
          {
            text: "Тип",
            align: "start",
            sortable: false,
            value: "deviceType.text",
          },
          {
            text: "Контрагент",
            align: "start",
            sortable: false,
            value: "contractor.name",
          },
          {
            text: "Кол-во",
            align: "start",
            sortable: false,
            value: "count",
          },
          {
            text: "Стоимость",
            align: "start",
            sortable: false,
            value: "price",
          },
          {
            text: "Склад",
            align: "start",
            sortable: false,
            value: "storage.name",
          },
          {
            text: "",
            align: "end",
            sortable: false,
            value: "actions",
          },
        ],
      };
    },
  };
</script>
<style lang=""></style>
