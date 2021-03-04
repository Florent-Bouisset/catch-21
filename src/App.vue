<template>
  <v-app>
    <v-main>
      <Card />
    </v-main>
  </v-app>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",

  components: { Card },

  data: () => ({
    //
  }),
};
</script>
