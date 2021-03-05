<template>
  <v-container
    class="d-flex flex-row"
    fluid
    style="background-color: DarkSlateBlue"
  >
    <DrawStack :cards="drawStack" ref="drawStack" />
    <div class="d-flex flex-row" fluid style="background-color: SeaGreen">
      <EscapeStack
        v-for="(stack, index) in stacks"
        :key="index"
        :cards="stack"
        ref="escapeStacks"
        @move-card-here="moveACard"
        @stack-is-21="empyStack"
      />
    </div>
  </v-container>
</template>

<script>
import Deck from "@/utils/deck";
import EscapeStack from "@/components/EscapeStack.vue";
import DrawStack from "@/components/DrawStack.vue";

export default {
  data: function () {
    return {
      drawStack: [],
      stacks: [[], [], [], []],
    };
  },
  created() {
    const deck = new Deck();
    deck.shuffle();
    this.drawStack = deck.cards;
  },
  methods: {
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
      // rule 2 : the sum is above 21
      const sumBefore = this.$refs.escapeStacks[stackIndex].sum;
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
  },
};
</script>