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
      blackJack: 0,
      catch21: 0,
      fiveCardCharlie: 0,
      streak: 0,
      turnOflastStreak: null,
    };
  },
  methods: {
    isComboStreak(currentTurn) {
      if (this.turnOflastStreak === null) return false;
      if (this.turnOflastStreak + 1 === currentTurn) return true;
      return false;
    },

    scoreACombo(comboArray, currentTurn) {
      let scoreToAdd = 0;
      for (let i = 0; i < comboArray.length; i++) {
        let combo = comboArray[i];
        switch (combo) {
          case scoreName.CATCH_21:
            this.catch21++;
            scoreToAdd += 50;
            break;

          case scoreName.BLACK_JACK_ATTACK:
            this.blackJack++;
            scoreToAdd += 75;
            break;

          case scoreName.FIVE_CARD_CHARLIE:
            this.fiveCardCharlie++;
            scoreToAdd += 100;
        }
      }
      if (this.isComboStreak(currentTurn)) {
        this.streak++;
        scoreToAdd += 25;
      }
      this.turnOflastStreak = currentTurn;
      this.score += scoreToAdd;
    },
  },
};
</script>