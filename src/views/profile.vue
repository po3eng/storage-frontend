<template>
  <v-container grid-list-xs>
    <v-row dense>
      <v-col offset="3" cols="6">
        <v-card elevation="0" outlined class="rounded-lg">
          <v-card-text>
            <v-row>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar size="64" class="avatar">
                    <v-icon color="primary"> mdi-camera-outline </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <h3 class="title">{{ fullName }}</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-text-field
                      filled
                      outlined
                      dense
                      readonly
                      hide-details=""
                      class="rounded-lg"
                      v-model="user.surname"
                      id="login"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    <v-text-field
                      filled
                      outlined
                      dense
                      readonly
                      hide-details=""
                      class="rounded-lg"
                      v-model="user.name"
                      id="login"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-text-field
                      filled
                      outlined
                      dense
                      readonly
                      hide-details=""
                      class="rounded-lg"
                      v-model="user.patronymic"
                      id="login"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    <v-text-field
                      filled
                      outlined
                      dense
                      readonly
                      hide-details=""
                      class="rounded-lg"
                      v-model="user.role"
                      id="login"></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "Profile",
    computed: {
      user() {
        return this.$store.getters["user/getUser"];
      },

      fullName() {
        return this.user.surname + " " + this.user.name + " " + this.user.patronymic;
      },
    },
  };
</script>
<style>
  .avatar {
    background-color: rgb(237, 238, 240);
    border: thin solid rgba(0, 0, 0, 0.12);
  }
</style>
