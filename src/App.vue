<template>
  <v-app>
    <v-main>
      <BoardMobile></BoardMobile>
    </v-main>
  </v-app>
</template>

<script>
import BoardMobile from "./components/BoardMobile";

export default {
  name: "App",

  components: { BoardMobile },

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