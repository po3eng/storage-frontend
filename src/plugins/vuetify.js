import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VBtn, VCard } from "vuetify/lib/components";

Vue.use(Vuetify);

VBtn.options.props.ripple.default = false;

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#0077ff",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#1e88e5",
        success: "#4CAF50",
        warning: "#FFC107",
        danger: "#ff0000",
        metal: "#7d3a2c",
        plastic: "#217d58",
        endchange: "#776f18",
        sprimary: "#4582C4",
      },
      light: {
        primary: "#0077ff",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#1e88e5",
        success: "#4CAF50",
        warning: "#FFC107",
        danger: "#ff0000",
        metal: "#7d3a2c",
        plastic: "#217d58",
        endchange: "#776f18",
        sprimary: "#4582C4",
      },
    },
  },
});
