<template>
  <v-container class="d-flex flex-row pa-1 ma-0" style="width: 100%; height: 100%">
    <div
      class="d-flex flex-column justify-center align-center"
      style="width: 75px"
    >
      <h3 v-for="(sumPossibility, index) in sums" :key="index" class="pr-1">
        <template v-if="index > 0">OR</template>
        {{ sumPossibility }}
      </h3>
    </div>
    <div
      class="cardEmplacement"
      :style="showErrorOutline ? 'box-shadow: 0 0 3pt 2pt red' : ''"
      @click="moveCardThere()"
    >
      <div
        style="
          position: relative;
          height: 100%;
          max-width: 12vh;
          margin-left: 10%;
        "
      >
        <div class="textOnBoard">PLAY CARD HERE</div>

        <GameCard
          :v-if="cards.length > 0"
          v-for="(card, index) in cards"
          :key="index"
          :positionZ="index"
          :isFaceUp="true"
          :cardNumber="card.cardNumber"
          :color="card.color"
          :spreadShadow="true"
          :offsetY="0"
          :offsetX="35"
          :maxWidth="50"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import { cardNumbers, scoreName } from "@/utils/types.js";
import Deck from "@/utils/deck";

export default {
  props: {
    cards: Array,
  },
  data: function () {
    return {
      showErrorOutline: false,
      mobile: true,
    };
  },
  components: {
    GameCard,
  },
  computed: {
    sums() {
      let sumOfCards = 0;
      let sumsOfCards = [];
      let isThereAce = false;
      for (let i = 0; i < this.cards.length; i++) {
        sumOfCards = sumOfCards + this.getCardValue(this.cards[i]);
        if (this.cards[i].cardNumber === "ACE") {
          isThereAce = true;
        }
      }

      sumsOfCards.push(sumOfCards);
      // Ace count for 1 or 11
      const sumWithAceHighValue = sumOfCards + 10;
      if (isThereAce && sumWithAceHighValue <= 21) {
        sumsOfCards.push(sumWithAceHighValue);
      }
      //return sums;
      return sumsOfCards;
    },
    cardLength() {
      return this.cards.length;
    },
  },
  watch: {
    cards: function () {
      const scoreTrigger = [];
      if (this.sums.includes(21)) {
        scoreTrigger.push(scoreName.CATCH_21);
      }
      if (this.isFiveCardCharlie()) {
        scoreTrigger.push(scoreName.FIVE_CARD_CHARLIE);
      }
      if (this.isBlackJack()) {
        scoreTrigger.push(scoreName.BLACK_JACK_ATTACK);
      }
      if (scoreTrigger.length > 0) {
        this.$emit("score-and-clear-stack", this.$vnode.key, scoreTrigger);
      }
    },
  },
  methods: {
    isBlackJack() {
      if (this.cards.length > 0) {
        const lastCardIndex = this.cards.length - 1;
        return Deck.isABlackJack(this.cards[lastCardIndex]);
      }
      return false;
    },

    isFiveCardCharlie() {
      return this.cards.length >= 5;
    },
    moveCardThere() {
      this.$emit("move-card-here", this.$vnode.key);
    },
    getCardValue(card) {
      return cardNumbers[card.cardNumber];
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

<style scoped>
h3 {
  font-size: 1em;
  color: white;
  text-align: center;
}

.textOnBoard {
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  font-size: 15px;
  font-weight: 800;
  padding: 4px;
  text-align: center;
  color: rgb(170, 183, 154);
}

.cardEmplacement {
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: rgb(143, 154, 130);
  border-radius: 14px;
  padding: 4px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>