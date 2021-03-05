<template>
  <v-container>
    <GameCard
      v-for="(card, index) in cards"
      :key="index"
      :positionZ="index"
      :isFaceUp="card.isFaceUp"
      :cardNumber="card.cardNumber"
      :color="card.color"
    ></GameCard>
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";

export default {
  props: {
    cards: Array,
  },
  components: {
    GameCard,
  },
};
</script>