<template>
  <v-dialog v-model="show" max-width="400">
    <v-card class="rounded-lg">
      <v-card-title>
        InStorage
        <v-spacer></v-spacer>
        <v-btn icon @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>{{ dialog.text }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-button @click="cancel()">Отмена</v-button>
        <v-button color="primary" @click="ok()">Ok</v-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  /*
  Компонент вызова диалгового окна
  const res = await this.$confirm('Уверены?');
  if(res) ...
  TODO: Избавиться от стайта
*/
  import vButton from "@/controls/v-button.vue";
  export default {
    components: { vButton },
    name: "dialogForm",
    mounted() {
      this.installPlugin();
    },
    computed: {
      show: {
        get() {
          return Boolean(this.dialog.text.length);
        },
        set() {
          this.$store.dispatch("dialog/hide");
        },
      },
      dialog() {
        return this.$store.getters["dialog/get"];
      },
    },
    methods: {
      installPlugin() {
        this.$root.constructor.use({
          install(Vue) {
            Vue.prototype.$confirm = function (text) {
              return new Promise(resolve => {
                this.$store.dispatch("dialog/confirm", {
                  text,
                  ok: () => resolve(true),
                  cancel: () => resolve(false),
                });
              });
            };
          },
        });
      },
      ok() {
        this.dialog.ok();
        this.show = false;
      },
      cancel() {
        this.dialog.cancel();
        this.show = false;
      },
    },
  };
</script>
<style></style>
