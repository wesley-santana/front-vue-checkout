<template>
  <v-card class="card" elevation="0">
    <v-row>
      <v-card-title class="align-start"> Forma de pagamento </v-card-title>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-btn
          @click="$emit('clickPaymentOption', 1)"
          block
          outlined
          :color="paymentSelected === PaymentId.PIX ? 'green' : 'blue'"
        >
          Pix <v-icon right dark> mdi-cash </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          @click="$emit('clickPaymentOption', 2)"
          block
          outlined
          :color="paymentSelected === PaymentId.CARD ? 'green' : 'blue'"
        >
          Cartão <v-icon right dark> mdi-credit-card </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          @click="$emit('clickPaymentOption', 3)"
          block
          outlined
          :color="paymentSelected === PaymentId.BILLET ? 'green' : 'blue'"
        >
          Boleto <v-icon right dark> mdi-barcode </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div class="panel" v-if="paymentSelected === PaymentId.CARD">
      <v-row>
        <v-col cols="4">
          <v-text-field
            dense
            label="CPF"
            v-model="document"
            v-mask="'###.###.###-##'"
            :rules="documentRules"
            outlined
            persistent-placeholder
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-text-field
            dense
            label="Numero do cartão"
            outlined
            persistent-placeholder
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            dense
            label="Data de Expiração"
            placeholder="MM/AA"
            v-mask="'##/##'"
            outlined
            persistent-placeholder
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            dense
            label="Código de segurança"
            outlined
            persistent-placeholder
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div class="panel" v-if="paymentSelected === PaymentId.BILLET">
      <p><b>Informações sobre o pagamento via boleto: </b></p>
      <div>
        <ul class="my-4">
          <li>
            Valor à vista:
            <b>R$ {{ currency(paymentValue) }}</b
            >.
          </li>
          <li>Não podemos parcelar Boleto.</li>
          <li>Pode levar até 2 dias úteis para compensar.</li>
        </ul>
      </div>
    </div>
    <div class="panel" v-if="paymentSelected === PaymentId.PIX">
      <p><b>Informações sobre o pagamento via pix:</b></p>
      <div>
        <ul class="my-4">
          <li>
            Valor à vista:
            <b>R$ {{ currency(paymentValue) }}</b
            >.
          </li>
          <li>Liberação imediata!</li>
          <li>É simples, só usar o aplicativo de seu banco para pagar PIX.</li>
          <li>
            Super seguro. O pagamento PIX foi desenvolvido pelo Banco Central
            para facilitar pagamentos.
          </li>
        </ul>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { PaymentId } from "@/consts";
import { currency, validateDocument } from "@/helpers";

export default {
  props: {
    paymentSelected: Number,
    paymentValue: String,
  },
  methods: {
    currency,
  },
  computed: {},
  data: () => ({
    document: "",
    rules: {
      required: (value) => !!value || "Campo obrigatório",
    },
    documentRules: [
      (v) => !!v || "CPF é  obrigatório",
      (v) => validateDocument(v) || "CPF inválido",
    ],
    PaymentId: PaymentId,
  }),
};
</script>

<style lang="scss" scoped>
.panel {
  padding: 32px;
  margin-top: 32px;
  border-radius: 4px;
  background-color: #ededed !important;
}
</style>
