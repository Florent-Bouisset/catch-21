<template>
  <v-container>
    <div style="position: relative; margin-top: 100px">
      <GameCard
        :v-if="cards.length > 0"
        v-for="(card, index) in cards"
        :key="index"
        :positionZ="index"
        :isFaceUp="index === cards.length - 1"
        :cardNumber="card.cardNumber"
        :color="card.color"
      />
      <div v-if="cards.length === 0" />
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
  },
  methods: {
    getCardValue(card) {
      return cardNumbers[card.cardNumber];
    },
  },
  components: {
    GameCard,
  },
};
</script>