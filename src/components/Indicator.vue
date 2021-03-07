<template>
  <v-container>
    <div class="labelIndicator">{{this.label}}</div>
    <div class="valueIndicator">{{this.value}}</div>
  </v-container>
</template>

<script>

export default {
  props: { label: String, value: Number },
};
</script>

<style scoped>
.labelIndicator {
  font-size: 26px;
  color: white;
}
.valueIndicator {
  font-size: 36px;
  font-weight: 800;
  color: rgb(66, 63, 90);
  border: solid;
  border-color: rgb(66, 63, 90);
  background-color: white;
  border-width: 4px 8px 8px 4px;
  border-radius: 20px;
}
</style>