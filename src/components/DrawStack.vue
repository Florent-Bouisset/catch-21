<template>
  <v-container class="pa-0">
    <div
      style="     
        width: 100%;
        margin-top: 50px;
        padding-right:20%;
        padding-left:20%;
        "
    >
      <div style="position: relative; "
      :style="mobile ? 'height:15vh; max-width: 15vh;' : 'height:30vh; max-width: 30vh;'"
      justify="center">
        <GameCard

          v-for="(card, index) in cards"
          :key="index"
          :positionZ="index"
          :isFaceUp="true"
          :cardNumber="card.cardNumber"
          :color="card.color"
          :offsetY="-1"
        />
      </div>
    </div>
    <SoftIndicator label="Left" :value="remainingCards" class="mt-1 text-center" />
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import { cardNumbers } from "@/utils/types.js";
import SoftIndicator from "@/components/SoftIndicator.vue";

export default {
  props: {
    cards: Array,
    mobile: Boolean,
  },
  computed: {
    nextCardValue() {
      const nextCardIndex = this.cards.length - 1;
      return this.getCardValue(this.cards[nextCardIndex]);
    },
    remainingCards() {
      return this.cards.length;
    },
  },
  methods: {
    getNextCard() {
      const nextCardIndex = this.cards.length - 1;
      return this.cards[nextCardIndex];
    },
    getCardValue(card) {
      return cardNumbers[card.cardNumber];
    },
  },
  watch: {
    cards: function() {
      if (this.cards.length === 0) {
        this.$emit('no-more-cards');
      }
    }
  },
  components: {
    GameCard,
    SoftIndicator,
  },
};
</script>