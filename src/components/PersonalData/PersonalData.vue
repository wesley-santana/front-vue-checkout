<template>
  <v-card class="card mb-8" elevation="0">
    <v-row>
      <v-card-title>Dados pessoais </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-text-field
          label="Nome completo"
          :rules="nameRules"
          v-model="inputName"
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
          v-model="inputPhone"
          v-mask="'(##) #####-####'"
          :rules="phoneRules"
          outlined
          persistent-placeholder
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <v-text-field
          dense
          persistent-placeholder
          v-model="inputEmail"
          label="Email"
          :rules="emailRules"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    email: String,
    phone: String,
  },
  data: () => ({
    nameRules: [(v) => !!v || "Nome completo é obrigatório"],
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    ],
    phoneRules: [(v) => !!v || "Telefone é obrigatório"],
  }),
  computed: {
    inputName: {
      get: function () {
        return this.name;
      },
      set: function (val) {
        this.$emit("inputName", val);
      },
    },
    inputPhone: {
      get: function () {
        return this.phone;
      },
      set: function (val) {
        this.$emit("inputPhone", val);
      },
    },
    inputEmail: {
      get: function () {
        return this.email;
      },
      set: function (val) {
        this.$emit("inputEmail", val);
      },
    },
  },
};
</script>
