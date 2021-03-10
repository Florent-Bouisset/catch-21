<template>
  <v-container
    fluid
    style="background-color: rgb(107, 106, 129); width: 100%"
    class="fill-height ma-0 py-0"
  >
    <div
      style="height: 100%; width: 100%; display: flex"
      class="flex-column flex-lg-row"
    >
      <div
        class="pa-0 d-flex flex-column"
        :style="isMobile? 'width: 100%': 'width: 60%'"
      >
        <v-row class="text-center pa-0 ma-0" align="center" justify="center">
          <v-col cols="4" lg="12" class="px-2">
            <v-img
              style="max-width: 400px; width: auto; height: auto; margin: auto"
              contain
              :src="require(`@/assets/logo.png`)"
            /><v-img />
          </v-col>
          <v-col cols="8" class="pa-0 ma-0">
            <div class="d-flex flex-row justify-center" style="width: 100%">
              <Timer @time-is-over="endGame" ref="timer" class="px-2"></Timer>
              <Score ref="score"></Score>
            </div>
          </v-col> </v-row
        ><v-row class="ma-0">
          <v-col cols="6" class="pa-0">
            <DrawStack
              :cards="drawStack"
              :mobile="isMobile"
              ref="drawStack"
              @no-more-cards="endGame"
            /> </v-col
          ><v-col cols="6" class="pa-0">
            <DiscardStack
              :mobile="isMobile"
              :cards="discardStack"
              ref="discardStack"
              @discard-a-card="discardCard()"
            />
          </v-col>
        </v-row>
      </div>
      <div
        id="greenBoard"
        :class="isMobile ? 'flex-column fill-height' : 'flex-row ma-4'"
      >
        <EscapeStack
          v-for="(stack, index) in stacks"
          :key="index"
          :cards="stack"
          :mobile="isMobile"
          ref="escapeStacks"
          @move-card-here="moveACard"
          @score-and-clear-stack="scoreAndClear"
        />
      </div>
    </div>
    <EndGameDialog @start-new-game="startNewGame" ref="endGameDialog" />
  </v-container>
</template>

<script>
import Deck from "@/utils/deck";
import EscapeStack from "@/components/EscapeStack.vue";
import DrawStack from "@/components/DrawStack.vue";
import DiscardStack from "@/components/DiscardStack.vue";
import Score from "@/components/Score.vue";
import Timer from "@/components/Timer.vue";
import EndGameDialog from "@/components/EndGameDialog.vue";

export default {
  data: function () {
    return {
      drawStack: [],
      discardStack: [],
      stacks: [[], [], [], []],
    };
  },
  created() {
    const deck = new Deck();
    deck.shuffle();
    this.drawStack = deck.cards;
  },
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
        default:
          return false;
      }
    },
  },
  methods: {
    discardCard() {
      if (this.drawStack.length > 0) {
        const cardToMove = this.drawStack.pop();
        this.discardStack.push(cardToMove);
      }
    },
    moveACard(stackIndex) {
      if (this.isMovingAllowed(stackIndex)) {
        const cardToMove = this.drawStack.pop();
        this.stacks[stackIndex].push(cardToMove);
      } else {
        this.$refs.escapeStacks[stackIndex].showErrorImpossibleMove();
      }
    },

    isMovingAllowed(stackIndex) {
      // rule 1 : need to be cards
      if (this.drawStack.length === 0) return false;
      // rule 2 : the card is a black jack
      const nextCard = this.$refs.drawStack.getNextCard();
      if (Deck.isABlackJack(nextCard)) return true;
      // rule 3 : the sum is above 21
      const possibleSums = this.$refs.escapeStacks[stackIndex].sums;
      const sumBefore = Math.min(possibleSums);
      const nextCardValue = this.$refs.drawStack.nextCardValue;
      if (sumBefore + nextCardValue > 21) return false;
      return true;
    },
    scoreAndClear(stackIndex, comboArray) {
      const currentTurn = 52 - this.drawStack.length;
      this.$refs.score.scoreACombo(comboArray, currentTurn);
      this.$set(this.stacks, stackIndex, []);
    },
    endGame() {
      this.$refs.endGameDialog.showDialog();
    },
    startNewGame() {
      const deck = new Deck();
      deck.shuffle();
      this.drawStack = deck.cards;
      (this.discardStack = []), (this.stacks = [[], [], [], []]);
      this.$refs.timer.reset();
      this.$refs.score.reset();
    },
  },
  components: {
    DrawStack,
    EscapeStack,
    DiscardStack,
    Score,
    Timer,
    EndGameDialog,
  },
};
</script>

<style scoped>
#greenBoard {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(115, 124, 104);
  border: solid rgb(66, 63, 90);
  border-radius: 20px;
  padding: 6px;
  border-width: 4px 8px 8px 4px;
}
</style>