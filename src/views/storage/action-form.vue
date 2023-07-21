<template>
  <v-card class="rounded-lg">
    <v-card-title>
      Перемещение
      <v-spacer></v-spacer>
      <v-btn icon @click="cancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-button @click="cancel">Отмена</v-button>
      <v-button @click="save" color="primary">Применить</v-button>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: "actionForm",
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      editProducts() {
        return this.products.map(item => ({ ...item, actionCount: 0 }));
      },
    },
    methods: {
      save() {
        this.$emit("save", this.editProduct);
      },
      cancel() {
        this.$emit("cancel", false);
      },
    },
  };
</script>
<style>
  __action {
    text-align: end !important;
  }
</style>
