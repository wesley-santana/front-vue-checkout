<template>
  <v-card class="card mb-8" elevation="2">
    <v-row>
      <v-card-title>Endereço </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <v-text-field
          persistent-placeholder
          label="CEP"
          dense
          v-mask="'#####-###'"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          persistent-placeholder
          label="Rua"
          dense
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          dense
          persistent-placeholder
          label="Número"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          dense
          persistent-placeholder
          label="Complemento"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="8">
        <v-text-field
          dense
          persistent-placeholder
          label="Bairro"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-text-field
          dense
          persistent-placeholder
          label="Cidade"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          persistent-placeholder
          dense
          label="Estado"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Address",

  data: () => ({}),
});
</script>
