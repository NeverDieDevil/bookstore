<template>
  <TheNavigation></TheNavigation>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<script setup>
  import TheFooter from "./components/ui/footer/TheFooter.vue";
  import TheNavigation from "./components/ui/nagivation/TheNavigation.vue";
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
