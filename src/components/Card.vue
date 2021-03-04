<template>
  <div>
    <v-img
      max-height="150"
      max-width="250"
      :src="require('../assets/diamondsKing.png')"
    ></v-img>
  </div>
</template>

<script>
const colors = {
  CLUB: "club",
  DIAMOND: "diamond",
  HEART: "heart",
  SPADE: "spade",
};

export default {
  data: function () {
    return {
      color: colors.CLUB,
    };
  },
  computed: {
    imagePath() {
      const baseSrc = "@/assets/colors/";
      switch (this.color) {
        case colors.CLUB:
          return baseSrc + "club.png";
        default:
          return null;
      }
    },
  },
};
</script>