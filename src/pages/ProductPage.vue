<template>
  <div>
    <h4>Specific product: {{ route.params.id }}</h4>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";

  const route = useRoute();
</script>

<style lang="scss" scoped></style>
