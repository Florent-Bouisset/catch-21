<template>
  <v-app>
    <v-main>
      <Board></Board>
    </v-main>
  </v-app>
</template>

<script>
import Board from "./components/Board";

export default {
  name: "App",

  components: { Board },

  data: () => ({
    //
  }),
};
</script>
