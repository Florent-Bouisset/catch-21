<template>
  <v-container
    class="d-flex flex-row"
    fluid
    style="background-color: rgb(107, 106, 129)"
  >
    <v-col cols="5" class="text-center">
      <div class="d-flex justify-center">
        <img
          class="justify-center align-center"
          :src="require(`@/assets/logo.png`)"
          max-width="500"
        /><img />
      </div>
      <div
        class="d-flex flex-row justify-center"
        style="width: 60%; margin-left: 20%"
      >
        <Timer></Timer>
        <Score ref="score"></Score>
      </div>
      <div class="d-flex flex-row justify-center">
        <DrawStack :cards="drawStack" ref="drawStack" />
        <DiscardStack
          :cards="discardStack"
          ref="discardStack"
          @discard-a-card="discardCard()"
        />
      </div>
    </v-col>

    <div fluid id="greenBoard">
      <EscapeStack
        v-for="(stack, index) in stacks"
        :key="index"
        :cards="stack"
        ref="escapeStacks"
        @move-card-here="moveACard"
        @score-and-clear-stack="scoreAndClear"
      />
    </div>
  </v-container>
</template>

<script>
import Deck from "@/utils/deck";
import EscapeStack from "@/components/EscapeStack.vue";
import DrawStack from "@/components/DrawStack.vue";
import DiscardStack from "@/components/DiscardStack.vue";
import Score from "@/components/Score.vue";
import Timer from "@/components/Timer.vue";

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
  },
  components: {
    DrawStack,
    EscapeStack,
    DiscardStack,
    Score,
    Timer,
  },
};
</script>

<style scoped>
#greenBoard {
  display: flex;
  flex-direction: row;
  background-color: rgb(115, 124, 104);
  border: solid rgb(66, 63, 90);
  border-radius: 20px;
  border-width: 4px 8px 8px 4px;
}
</style>