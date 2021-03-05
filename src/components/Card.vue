<template>
  <v-card class="ma-6" max-width="150" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ this.textDisplayed }}
        </v-list-item-title>
      </v-list-item-content>
      <v-img
        :src="require(`@/assets/colors/${color}.png`)"
        max-height="72"
        max-width="48"
      /><v-img />
    </v-list-item>
  </v-card>
</template>

<script>
// import { colors, cardNumbers } from "@/utils/types.js";

export default {
  props: {
    color: String,
    cardNumber: String,
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
  },
};
</script>

