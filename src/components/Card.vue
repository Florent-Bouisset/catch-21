<template>
  <v-card class="ma-6" width="150" height="150" outlined :style="computedStyle">
    <div v-if="isFaceUp === true" class="d-flex flex-row">
      <h1 class="ma-4">
        {{ this.textDisplayed }}
      </h1>
      <v-img
        class="ma-4"
        :src="require(`@/assets/colors/${color}.png`)"
        max-height="72"
        max-width="48"
      /><v-img />
    </div>
    <div v-if="!isFaceUp">
      <v-img
        :v-if="isFaceUp === false"
        :src="require(`@/assets/cards/back.png`)"
        max-height="150"
        max-width="150"
        contain
      /><v-img />
    </div>
  </v-card>
</template>

<script>
// import { colors, cardNumbers } from "@/utils/types.js";

export default {
  props: {
    color: String,
    cardNumber: String,
    isFaceUp: Boolean,
    positionZ: Number,
  },
  computed: {
    textDisplayed() {
      const mapping = {
        ONE: "1",
        TWO: "2",
        THREE: "3",
        FOUR: "4",
        FIVE: "5",
        SIX: "6",
        SEVEN: "7",
        HEIGHT: "8",
        NINE: "9",
        TEN: "10",
        JACK: "J",
        QUEEN: "Q",
        KING: "K",
      };
      return mapping[this.cardNumber];
    },
    computedStyle() {
      return `position: absolute; top: ${200 + this.positionZ * -2}px;`;
    },
  },
};
</script>

