<template>
  <v-container class="pa-0">
    <Indicator label="Time" :value="timerDisplay"></Indicator>
  </v-container>
</template>

<script>
import Indicator from "@/components/Indicator.vue";
const secondsInMinutes = 60;
const minutesToPlay = 5;

export default {
  data: function () {
    return {
      timeRemaining: minutesToPlay * secondsInMinutes,
    };
  },
  computed: {
    timerDisplay() {
      const min = Math.floor(this.timeRemaining / secondsInMinutes);
      const sec = this.timeRemaining % secondsInMinutes;
      const formatedSec = sec.toLocaleString('en-US', {minimumIntegerDigits:2})
      return min + ' : ' + formatedSec;
    },
  },
  methods: {
    countDownTimer() {
      if (this.timeRemaining > 0) {
        setTimeout(() => {
          this.timeRemaining -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.$emit('time-is-over')
      }
    },
    reset() {
      const needRestart = this.timeRemaining === 0;
      this.timeRemaining = minutesToPlay * secondsInMinutes;
      if( needRestart) this.countDownTimer();
    }
  },
  components: {
    Indicator,
  },
  created() {
    this.countDownTimer();
  },
};
</script>