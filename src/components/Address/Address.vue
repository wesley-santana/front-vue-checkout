<template>
  <v-card class="card mb-8" elevation="0">
    <v-row>
      <v-card-title>Endereço </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <v-text-field
          persistent-placeholder
          label="CEP"
          v-model="inputZipCode"
          :rules="required"
          @keyup.enter="$emit('getAddress', $event)"
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
          :rules="required"
          v-model="inputStreet"
          dense
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          dense
          persistent-placeholder
          :rules="required"
          label="Número"
          v-model="inputNumber"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          dense
          v-model="inputComplement"
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
          :rules="required"
          v-model="inputDistrict"
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
          :rules="required"
          v-model="inputCity"
          outlined
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          persistent-placeholder
          v-model="inputState"
          :rules="required"
          dense
          label="Estado"
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
    zipCode: String,
    street: String,
    number: String,
    complement: String,
    district: String,
    city: String,
    state: String,
  },
  computed: {
    inputZipCode: {
      get: function () {
        this.zipCode;
      },
      set: function (val) {
        this.$emit("inputZipCode", val);
      },
    },
    inputStreet: {
      get: function () {
        return this.street;
      },
      set: function (val) {
        this.$emit("inputStreet", val);
      },
    },
    inputNumber: {
      get: function () {
        return this.number;
      },
      set: function (val) {
        this.$emit("inputNumber", val);
      },
    },
    inputComplement: {
      get: function () {
        return this.complement;
      },
      set: function (val) {
        this.$emit("inputComplement", val);
      },
    },
    inputDistrict: {
      get: function () {
        return this.district;
      },
      set: function (val) {
        this.$emit("inputDistrict", val);
      },
    },
    inputCity: {
      get: function () {
        return this.city;
      },
      set: function (val) {
        this.$emit("inputCity", val);
      },
    },
    inputState: {
      get: function () {
        return this.state;
      },
      set: function (val) {
        this.$emit("inputState", val);
      },
    },
  },
  data: () => ({
    required: [(v) => !!v || "Campo obrigatório"],
  }),
};
</script>
