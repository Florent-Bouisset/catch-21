<template>
  <v-container>
    <Indicator label="Time" value="500"></Indicator>
  </v-container>
</template>

<script>
import Indicator from "@/components/Indicator.vue";

export default {
  data: function () {
    return {};
  },

  components: {
    Indicator,
  },
};
</script>