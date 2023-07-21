<template>
  <v-card elevation="0" outlined class="rounded-lg mt-2 mb-2" hover>
    <v-card-text>
      <v-row>
        <v-col>
          <div class="div">
            <h4 class="__item">{{ storage.name }}</h4>
          </div>
        </v-col>
        <v-col>
          <div class="div">
            <h4 class="__item">{{ storage.adres }}</h4>
          </div>
        </v-col>
        <v-col>
          <div class="div">
            <h4 class="__item">{{ storage.phone }}</h4>
          </div>
        </v-col>
        <v-col class="d-flex align-content-end">
          <v-spacer></v-spacer>
          <v-btn color="primary" icon @click="$emit('click')">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: "stortage-item",
    props: {
      storage: {
        type: Object,
        default: () => {
          return {
            name: "",
            adres: "",
            man: "",
            phone: "",
          };
        },
      },
    },
  };
</script>
<style>
  .div {
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    justify-content: center;
    position: relative;
    text-indent: 0.0892857143em;
    text-transform: uppercase;
  }
  .__item {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
  }
</style>
