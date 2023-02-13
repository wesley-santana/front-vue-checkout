<template>
  <v-overlay :opacity="1" :value="overlay">
    <v-progress-circular indeterminate size="64">
      Carregando...
    </v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
export default {
  props: {
    overlay: Boolean,
  },
  data: () => ({}),
};
</script>
