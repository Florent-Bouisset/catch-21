<template>
  <v-card class="pa-0" width="150" height="210" outlined :style="computedStyle">
      <v-img
         v-if="isFaceUp === true"
        :src="require(`@/assets/cards/${imagePath}.png`)"
        max-height="400"
      /><v-img />
    <v-img
      v-if="isFaceUp === false"
      :src="require(`@/assets/cards/back.png`)"
      max-height="400"
      contain
    /><v-img />
  </v-card>
</template>

<script>

export default {
  props: {
    color: String,
    cardNumber: String,
    isFaceUp: Boolean,
    positionZ: Number,
    offsetY: Number,
  },
  computed: {
    imagePath() {
      const colorPath = this.color.toLowerCase();
      const numberPath = this.cardNumber.toLowerCase()
      return colorPath + '/' + numberPath;
    },
    computedStyle() {
      return `position: absolute; top: ${
        this.positionZ * this.offsetY
      }px; left: 0px;  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);`;
    },
  },
};
</script>

