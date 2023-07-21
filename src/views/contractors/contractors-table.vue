<template>
  <v-data-table :headers="headers" :search="search" :items="contractors" :items-per-page="15" class="elevation-0">
    <template v-slot:[`item.actions`]="{ item }">
      <slot :item="item" name="actions"></slot>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    name: "contractorsTable",
    props: {
      contractors: {
        type: Array,
        default: () => [],
      },
      search: {
        type: String,
        default: () => "",
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
            text: "e-mail",
            align: "start",
            sortable: false,
            value: "email",
          },
          {
            text: "Контакт",
            align: "start",
            sortable: false,
            value: "contact",
          },
          {
            text: "Тип",
            align: "start",
            sortable: false,
            value: "contractorType.text",
          },
          {
            text: "Регион",
            align: "start",
            sortable: false,
            value: "region.name",
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
