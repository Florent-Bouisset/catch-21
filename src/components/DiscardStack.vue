<template>
  <v-container>
    <div
      style="
        width: 100%;
        padding-left: 20%;
        padding-right: 20%;
        height: 300px;
        margin-top: 50px;
      "
      @click="discard()"
    >
      <div style="position: relative">
        <div
          v-if="cards.length === 0"
          style="
            display: flex;
            font-weight: 800;
                        font-size: 22px;

            color: rgb(255, 255, 255, 0.3);
            box-shadow: 0 0 0 2px rgb(255, 255, 255, 0.3);
            border-radius: 16px;
            height: 300px;
            padding:16px;
            align-items: center;
          "
        >
          CLICK HERE TO DISCARD
        </div>

        <GameCard
          v-for="(card, index) in cards"
          :key="index"
          :positionZ="index"
          :isFaceUp="false"
          :cardNumber="card.cardNumber"
          :color="card.color"
          :offsetY="-1"
        />
      </div>
    </div>
    <SoftIndicator label="Discards" :value="remainingCards" />
  </v-container>
</template>

<script>
import GameCard from "@/components/Card.vue";
import SoftIndicator from "@/components/SoftIndicator.vue";

export default {
  props: {
    cards: Array,
  },
  computed: {
    remainingCards() {
      return this.cards.length;
    },
  },
  methods: {
    discard() {
      this.$emit("discard-a-card");
    },
  },
  components: {
    GameCard,
    SoftIndicator,
  },
};
</script>