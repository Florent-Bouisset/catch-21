<template>
  <template v-if="displayBonus">
    <v-img
      v-for="(bonus, index) in bonusPaths"
      :key="index"
      style="position: absolute"
      :src="require('@/assets/bonus/bonus-5CC.png')"
    ></v-img>
  </template>
</template>
