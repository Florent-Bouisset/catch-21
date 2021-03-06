<template>
  <v-container
    class="d-flex flex-row"
    fluid
    style="background-color: DarkSlateBlue"
  >
    <DrawStack :cards="drawStack" ref="drawStack" />
    <DiscardStack
      :cards="discardStack"
      ref="discardStack"
      @discard-a-card="discardCard()"
    />
    <Score></Score>
    <div class="d-flex flex-row" fluid style="background-color: SeaGreen">
      <EscapeStack
        v-for="(stack, index) in stacks"
        :key="index"
        :cards="stack"
        ref="escapeStacks"
        @move-card-here="moveACard"
        @score-and-clear-stack="empyStack"
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
    empyStack(stackIndex) {
      this.$set(this.stacks, stackIndex, []);
    },
  },
  components: {
    DrawStack,
    EscapeStack,
    DiscardStack,
    Score,
  },
};
</script>