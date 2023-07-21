<template lang="">
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field filled outlined dense hide-details="" class="rounded-lg" readonly v-model="product.name">
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field filled outlined dense hide-details="" class="rounded-lg" readonly v-model="product.count">
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="Number"
          :min="0"
          :max="product.count"
          filled
          outlined
          dense
          hide-details=""
          class="rounded-lg"
          v-model="product.actionCount">
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="__action">
        <v-btn icon color="primary"><v-icon>mdi-close</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: "action-from-items",
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
  };
</script>
<style lang=""></style>
