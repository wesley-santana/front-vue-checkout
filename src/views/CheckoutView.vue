<template>
  <div class="checkout">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <PersonalData />
          <Address />
          <Payment />
        </v-col>
        <v-col cols="12" sm="4">
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header>
                <div class="title">Revisão do pedido</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content> </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PersonalData from "@/components/PersonalData";
import Address from "@/components/Address";
import Payment from "@/components/Payment";

export default Vue.extend({
  name: "AbountView",
  components: { PersonalData, Address, Payment },
  props: {},
  data: () => ({}),
});
</script>

<style scoped>
.card {
  padding: 40px;
}
.checkout {
  padding: 80px;
  background-color: #eeeeee;
}
.container {
  max-width: 960px;
}
.title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
}
</style>
