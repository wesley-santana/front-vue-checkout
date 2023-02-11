<template>
  <PersonalData />
</template>

<script lang="ts">
import Vue from "vue";
import PersonalData from "@/components/PersonalData"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    PersonalData,
  },
});
</script>
