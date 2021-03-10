<template>
  <div class="d-flex flex-row">
    <div>
      {{ this.name }}
      <template v-if="!total">(x{{ numberOfCombo }})</template>

    </div>
    <v-spacer></v-spacer>
    <div>{{ this.scoreTotal }} pts</div>
  </div>
</template>

<script>
export default {
  props: { name: String, numberOfCombo: Number, scoreValue: Number, total: Boolean },
  computed: {
    scoreTotal() {
      if (this.total ) {
        return this.scoreValue;
      } else  {
        return this.scoreValue * this.numberOfCombo;
      }
    },
  },
};
</script>