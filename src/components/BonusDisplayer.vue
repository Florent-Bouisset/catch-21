<template >
  <div v-if="show" style="position: absolute; width: 100%; margin-top:50%;">
    <v-img
      v-if="catch21"
      :src="require('@/assets/bonus/bonus-C21.png')"
    ></v-img>
    <v-img
      v-if="fiveCards"
      :src="require('@/assets/bonus/bonus-5CC.png')"
    ></v-img>
    <v-img
      v-if="jackAttack"
      :src="require('@/assets/bonus/bonus-BJA.png')"
    ></v-img>
  </div>
</template>

<script>
import { scoreName } from "@/utils/types.js";

export default {
  props: { show: Boolean, bonuses: Array },
  computed: {
    catch21() {
      if (this.bonuses.includes(scoreName.CATCH_21)) return true;
      else return false;
    },
    fiveCards() {
      if (this.bonuses.includes(scoreName.FIVE_CARD_CHARLIE)) return true;
      else return false;
    },
    jackAttack() {
      if (this.bonuses.includes(scoreName.BLACK_JACK_ATTACK)) return true;
      else return false;
    },
  },
};
</script>