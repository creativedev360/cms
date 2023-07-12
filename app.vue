<template>
  <div>
    <v-app id="dummy">
      <Navigation :data="configData" />
      <NuxtPage />
      <Footer />
    </v-app>
  </div>
</template>

<script setup>
import { useConfigStore } from "~~/stores/ConfigStore";

let configData = useConfigStore()

</script>