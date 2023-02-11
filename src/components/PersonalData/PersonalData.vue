<template>
  <v-card class="card mb-8" elevation="2">
    <v-row>
      <v-card-title>Dados pessoais </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-text-field
          label="Nome completo"
          dense
          outlined
          persistent-placeholder
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          dense
          label="Telefone"
          v-mask="'(##) #####-####'"
          outlined
          persistent-placeholder
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" sm="8">
        <v-text-field
          dense
          persistent-placeholder
          label="Email"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          dense
          label="CPF"
          v-mask="'###.###.###-##'"
          outlined
          persistent-placeholder
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PersonalData",

  data: () => ({}),
});
</script>
