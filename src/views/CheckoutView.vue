<template>
  <v-form onSubmit="return false;" ref="form" class="checkout">
    <v-container v-if="offerRequestStatus === 'SUCCESS'">
      <div class="checkout__header">
        <img src="../assets/logo-checkout.png" />
        <div>
          já tem uma conta?
          <button>Entrar</button>
        </div>
      </div>
      <v-row>
        <v-col cols="12" sm="8">
          <PersonalData
            :name="name"
            :email="email"
            :phone="phone"
            @inputName="name = $event"
            @inputPhone="phone = $event"
            @inputEmail="email = $event"
          />
          <Address
            :zipCode="zipCode"
            :street="addressStreet"
            :number="addressNumber"
            :complement="addressComplement"
            :district="addressDistrict"
            :city="addressCity"
            :state="addressState"
            @getAddress="getAddress"
            @inputStreet="addressStreet = $event"
            @inputZipCode="zipCode = $event"
            @inputNumber="addressNumber = $event"
            @inputComplement="addressComplement = $event"
            @inputDistrict="addressDistrict = $event"
          />
          <Payment
            @clickPaymentOption="handleClickPaymentOption"
            :paymentSelected="paymentSelected"
            :paymentValue="offer.price"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-row>
            <v-col cols="12">
              <v-expansion-panels v-cloak>
                <v-expansion-panel
                  :elevation="false"
                  v-for="(item, i) in 1"
                  :key="i"
                >
                  <v-expansion-panel-header>
                    <div class="title">Revisão do pedido</div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>Livro + Audiobook :: {{ offer.name }}</p>
                    <p>{{ offer.description }}</p>
                    <p><b>Total</b> R$ {{ currency(offer.price) }}</p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                block
                type="submit"
                x-large
                color="primary"
                elevation="0"
                class="mr-4"
                @click.prevent="validate"
                >Finalizar pedido</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Loader
      :overlay="
        offerRequestStatus === RequestStatusEnum.START ||
        addressRequestStatus === RequestStatusEnum.START
      "
    />
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import PersonalData from "@/components/PersonalData";
import Address from "@/components/Address";
import Payment from "@/components/Payment";
import Loader from "@/components/Loader";
import { RequestStatusEnum } from "@/consts";
import { currency } from "@/helpers";

export default Vue.extend({
  name: "CheckoutView",
  components: { PersonalData, Address, Payment, Loader },
  props: {},
  computed: {
    ...mapState([
      "offer",
      "address",
      "offerRequestStatus",
      "addressRequestStatus",
    ]),
    form(): Vue & { validate: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean };
    },
  },

  created() {
    this.$store.dispatch("loadOffer", this.$route.params.id);
  },
  watch: {
    addressRequestStatus(newValue) {
      if (newValue === RequestStatusEnum.SUCCESS) {
        this.addressStreet = this.address.logradouro;
        this.addressNumber = "";
        this.addressComplement = this.address.complemento;
        this.addressDistrict = this.address.bairro;
        this.addressCity = this.address.localidade;
        this.addressState = this.address.uf;
      }
    },
  },
  methods: {
    validate(): void {
      this.form.validate();
    },
    clearString(text: String): String {
      return text.replace(/[^a-zA-Z0-9]/g, "");
    },
    getAddress(event: { target: HTMLInputElement }): void {
      let zipCode = event.target.value;
      this.$store.dispatch("loadAddress", this.clearString(zipCode));
    },
    handleClickPaymentOption(paymentId: number) {
      this.paymentSelected = paymentId;
    },
    currency,
  },
  beforeCreate() {},
  data: () => ({
    name: "",
    email: "",
    phone: "",
    addressStreet: "",
    addressNumber: "",
    addressComplement: "",
    addressDistrict: "",
    addressCity: "",
    addressState: "",
    zipCode: "",
    RequestStatusEnum: RequestStatusEnum,
    paymentSelected: 1,
  }),
});
</script>

<style lang="scss" scoped>
.checkout {
  background-color: #eeeeee;
  padding: 16px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
  }

  &__image {
    max-height: 128px;
    height: auto;
    width: auto;
    max-width: 128px;
    border-radius: 0.375rem;
  }
}
.container {
  max-width: 960px;
}

.card {
  padding: 40px;
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
