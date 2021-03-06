<template>
  <v-card class="pa-0" width="150" height="210" outlined :style="computedStyle">
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
    <v-img
      v-if="isFaceUp === false"
      :src="require(`@/assets/cards/back.png`)"
      height="210"
      width="150"
      contain
    /><v-img />
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
    offsetY: Number,
  },
  computed: {
    textDisplayed() {
      const mapping = {
        ACE: "1",
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
      return `position: absolute; top: ${
        this.positionZ * this.offsetY
      }px; left: 0px`;
    },
  },
};
</script>

