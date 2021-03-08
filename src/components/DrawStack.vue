<template>
  <v-container>
    <div
      style="     
        width: 100%;
        padding-left: 20%;
        padding-right: 20%;
        height: 300px;
        margin-top: 50px;
        "
    >
      <div style="position: relative">
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
    <SoftIndicator label="Left" :value="remainingCards" />
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import { cardNumbers } from "@/utils/types.js";
import SoftIndicator from "@/components/SoftIndicator.vue";

export default {
  props: {
    cards: Array,
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