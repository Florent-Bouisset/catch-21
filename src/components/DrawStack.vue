<template>
  <v-container>
    <div>Remaining cards : {{ this.remainingCards }}</div>

    <div style="position: relative; margin-top: 100px">
      <GameCard
        v-for="(card, index) in cards"
        :key="index"
        :positionZ="index"
        :isFaceUp="index === cards.length - 1"
        :cardNumber="card.cardNumber"
        :color="card.color"
        :offsetY="-2"
      />
    </div>
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import { cardNumbers } from "@/utils/types.js";

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
  components: {
    GameCard,
  },
};
</script>