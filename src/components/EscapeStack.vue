<template>
  <v-container>
    <div
      style="
        position: relative;
        padding-top: 100px;
        height: 600px;
        width: 200px;
        cursor: pointer;
        background-color: DarkOliveGreen;
      "
      :style="showErrorOutline ? 'outline: red solid;' : ''"
      @click="moveCardThere()"
    >
      <GameCard
        :v-if="cards.length > 0"
        v-for="(card, index) in cards"
        :key="index"
        :positionZ="index"
        :isFaceUp="true"
        :cardNumber="card.cardNumber"
        :color="card.color"
        :offsetY="60"
      />
      <div v-if="cards.length === 0"></div>
    </div>
    <h3>{{ this.sum }}</h3>
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import { cardNumbers } from "@/utils/types.js";

export default {
  props: {
    cards: Array,
  },
  data: function () {
    return {
      showErrorOutline: false,
    };
  },
  components: {
    GameCard,
  },
  computed: {
    sum() {
      let sum = 0;
      for (let i = 0; i < this.cards.length; i++) {
        sum += this.getCardValue(this.cards[i]);
      }
      return sum;
    },
    cardLength() {
      return this.cards.length;
    },
  },
  watch: {
    cards: function () {
      if (this.sum === 21) this.$emit("stack-is-21", this.$vnode.key);
    },
  },
  methods: {
    moveCardThere() {
      this.$emit("move-card-here", this.$vnode.key);
    },
    getCardValue(card) {
      return cardNumbers[card.cardNumber];
    },
    sumOfCards() {
      let sum = 0;
      for (let i = 0; i < this.cards.length; i++) {
        sum += this.getCardValue(this.cards[i]);
      }
      return sum;
    },
    clearCards() {
      this.$emit("clear-card-here", this.$vnode.key);
    },
    showErrorImpossibleMove() {
      this.showErrorOutline = true;
      setTimeout(() => (this.showErrorOutline = false), 500);
    },
  },
};
</script>