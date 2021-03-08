<template>
  <v-card class="pa-0" width="100%" max-width="220px" outlined :style="computedStyle">
      <v-img
         v-if="isFaceUp === true"
        :src="require(`@/assets/cards/${imagePath}.png`)"
      />
    <v-img
      v-else
      :src="require(`@/assets/cards/back.png`)"
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
    spreadShadow: Boolean
  },
  computed: {
    imagePath() {
      const colorPath = this.color.toLowerCase();
      const numberPath = this.cardNumber.toLowerCase()
      return colorPath + '/' + numberPath;
    },
    computedStyle() {
      let shadowStyle;
      if (this.spreadShadow) {
        shadowStyle = 'box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);';
      } else {
        shadowStyle = 'box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);';
      }

      return `position: absolute; border-radius: 14px;
      top: ${
        this.positionZ * this.offsetY
      }px; left: 0px;  ${shadowStyle}`;
    },
  },
};
</script>

