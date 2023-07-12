import { defineStore } from "pinia";
import configData from "~/assets/json/Config.json";
import footerData from "~/assets/json/Footer.json";

export const useConfigStore = defineStore("Config Store", () => {
  let config = ref(configData)
  let footer = ref(footerData)
  return { config, footer };
});
