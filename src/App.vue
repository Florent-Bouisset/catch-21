<template>
  <v-app>
    <v-main>
      <Deck></Deck>
    </v-main>
  </v-app>
</template>

<script>
import Deck from "./components/Deck";

export default {
  name: "App",

  components: { Deck },

  data: () => ({
    //
  }),
};
</script>
