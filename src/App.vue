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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
}
</style>