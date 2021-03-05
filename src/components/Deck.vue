<template>
  <v-container>
    <Stack :cards="deck.cards"></Stack>
    <!-- <GameCard
      v-for="(card, index) in deck.cards"
      :key="index"
      :isFaceUp="false"
      :cardNumber="card.cardNumber"
      :color="card.color"
    ></GameCard> -->
  </v-container>
</template>

<script>
import Deck from "@/utils/deck";
// import GameCard from "@/components/Card.vue";
import Stack from "@/components/Stack.vue";

export default {
  data: function () {
    return {
      deck: null,
    };
  },
  created() {
    this.deck = new Deck();
    this.deck.shuffle();
  },
  components: {
    // GameCard,
    Stack,
  },
};
</script>