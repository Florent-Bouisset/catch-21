<template>
  <v-container>
    <div>Score :</div>
    <div>{{ this.score }}</div>
  </v-container>
</template>

<script>
import { scoreName } from "@/utils/types.js";

export default {
  data: function () {
    return {
      score: 0,
    };
  },
  methods: {
    scoreAClear(comboArray) {
      let scoreToAdd = 0;
      for (let i = 0; i < comboArray.length; i++) {
        let combo = comboArray[i];
        switch (combo) {
          case scoreName.BLACK_JACK_ATTACK:
            scoreToAdd += 75;
            break;
          case scoreName.CATCH_21:
            scoreToAdd += 50;
            break;
        }
      }
      this.score += scoreToAdd;
    },
  },
};
</script>