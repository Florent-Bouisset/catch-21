<template>
  <v-container class="pa-0">
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
  font-size: 1.4em;
    color: rgb(66, 63, 90);

}
.valueIndicator {
  font-size: 1.4em;
  font-weight: 800;
  color: white;
}
</style>