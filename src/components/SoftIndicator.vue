<template>
  <v-container>
    <div>
      <span class="labelIndicator">{{ this.label }}: </span>
      <span class="valueIndicator">{{ this.value }}</span>
    </div>
  </v-container>
</template>

<script>
export default {
  props: { label: String, value: Number },
};
</script>

<style scoped>
.labelIndicator {
  font-size: 28px;
    color: rgb(66, 63, 90);

}
.valueIndicator {
  font-size: 28px;
  font-weight: 800;
  color: white;
}
</style>