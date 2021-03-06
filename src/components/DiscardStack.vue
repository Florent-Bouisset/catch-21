<template>
  <v-container>
    <div>Discarded cards : {{ this.remainingCards }}</div>
    <div
      style="
        position: relative;
        padding-top: 100px;
        margin-top: 100px;
        height: 600px;
        width: 200px;
      "
      @click="discard()"
    >
      <GameCard
        v-for="(card, index) in cards"
        :key="index"
        :positionZ="index"
        :isFaceUp="false"
        :cardNumber="card.cardNumber"
        :color="card.color"
        :offsetY="-2"
      />
    </div>
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";

export default {
  props: {
    cards: Array,
  },
  computed: {
    remainingCards() {
      return this.cards.length;
    },
  },
  methods: {
    discard() {
      this.$emit("discard-a-card");
    },
  },
  components: {
    GameCard,
  },
};
</script>