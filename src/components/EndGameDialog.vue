<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent class="styledPopup">
      <v-card class="styledPopup">
        <v-card-title class="headline"> Game Over </v-card-title>

        <v-card-text style="font-size: 1rem;">
          <ScoreLine
            name="Catch 21"
            :numberOfCombo="this.score.catch21"
            :scoreValue="50"
          />
          <ScoreLine
            name="Black Jack Attack"
            :numberOfCombo="this.score.blackJack"
            :scoreValue="75"
          />

          <ScoreLine
            name="Five Card Charlie"
            :numberOfCombo="this.score.fiveCardCharlie"
            :scoreValue="100"
          />
          <ScoreLine name="Streak" :numberOfCombo="this.score.streak" :scoreValue="25" />

          <v-divider></v-divider>
          <ScoreLine name="Total" :total="true" :scoreValue="this.score.score" />
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="playAgain"> Play again </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import ScoreLine from "@/components/ScoreLine.vue";

export default {
  data: function () {
    return {
      dialog: false,
      score: Object,
    };
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    playAgain() {
      this.dialog = false;
      this.$emit("start-new-game");
    },
    setScore(score) {
      this.score = score;
    },
  },
  components: {
    ScoreLine,
  },
};
</script>

<style scoped>
.styledPopup {
  font-size: 36px !important;
  font-weight: 800 !important;
  color: rgb(66, 63, 90) !important;
  border: solid !important;
  border-color: rgb(66, 63, 90) !important;
  background-color: white !important;
  border-width: 4px 8px 8px 4px !important;
  border-radius: 20px !important;
}
</style>