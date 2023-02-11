<template>
  <v-card class="card" elevation="2">
    <v-row>
      <v-card-title class="align-start"> Forma de pagamento </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-btn
          x-large
          block
          color="blue-grey"
          class="ma-2 white--text"
          outlined
        >
          Cartão
          <v-icon right dark> mdi-credit-card </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn
          x-large
          block
          color="blue-grey"
          class="ma-2 white--text"
          outlined
        >
          Pix
          <v-icon right dark> mdi-cash </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn
          x-large
          block
          color="blue-grey"
          class="ma-2 white--text"
          outlined
        >
          Boleto
          <v-icon right dark> mdi-barcode </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Payment",

  data: () => ({}),
});
</script>
