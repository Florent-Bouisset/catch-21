<template>
  <v-card
    class="pa-0"
    style="width: 100%; height: 100%"
    outlined
    :style="computedStyle"
  >
    <img
      style="width: 100%; height: 100%"
      v-if="isFaceUp === true"
      :src="require(`@/assets/cards/${imagePath}.png`)"
    />
    <img
      v-else
      style="width: 100%; height: 100%"
      :src="require(`@/assets/cards/back.png`)"
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
    offsetX: Number,
    spreadShadow: Boolean,
    maxWidth: Number,
  },
  computed: {
    imagePath() {
      const colorPath = this.color.toLowerCase();
      const numberPath = this.cardNumber.toLowerCase();
      return colorPath + "/" + numberPath;
    },
    computedStyle() {
      let shadowStyle;
      if (this.spreadShadow) {
        shadowStyle = "box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);";
      } else {
        shadowStyle = "box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);";
      }

      return `position: absolute; border-radius: 4px;
      top: ${this.positionZ * this.offsetY}px; left: ${
        this.positionZ * this.offsetX
      }px;  ${shadowStyle}`;
    },
  },
};
</script>

